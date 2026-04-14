import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

const DOT_RADIUS = 1.4;
const DOT_SPACING = 5;
const GLOBE_RADIUS_FACTOR = 0.42;
const ROTATION_SPEED = 0.18;

function generateDotGrid(radius: number) {
  const dots: [number, number][] = [];
  const rows = Math.floor((Math.PI * radius) / DOT_SPACING);
  for (let i = 0; i <= rows; i++) {
    const lat = -90 + (180 * i) / rows;
    const latRad = (lat * Math.PI) / 180;
    const circumference = 2 * Math.PI * radius * Math.cos(latRad);
    const cols = Math.max(1, Math.floor(circumference / DOT_SPACING));
    for (let j = 0; j < cols; j++) {
      const lon = -180 + (360 * j) / cols;
      dots.push([lon, lat]);
    }
  }
  return dots;
}

export default function WireframeDottedGlobe({
  size = 420,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotRef = useRef<number>(0);
  const frameRef = useRef<number>(0);
  const dotsRef = useRef<[number, number][]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const r = size * GLOBE_RADIUS_FACTOR;

    const projection = d3
      .geoOrthographic()
      .scale(r)
      .translate([cx, cy])
      .clipAngle(90);

    const pathGen = d3.geoPath(projection, ctx);

    dotsRef.current = generateDotGrid(r);

    let worldData: GeoJSON.FeatureCollection | null = null;

    fetch(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    )
      .then((res) => res.json())
      .then((topo) => {
        worldData = feature(topo, topo.objects.land) as unknown as GeoJSON.FeatureCollection;
      })
      .catch(() => {});

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      projection.rotate([rotRef.current, -10, 0]);

      const globe = { type: "Sphere" } as Parameters<typeof pathGen>[0];

      ctx.beginPath();
      pathGen(globe);
      ctx.fillStyle = "rgba(3, 64, 156, 0.04)";
      ctx.fill();
      ctx.strokeStyle = "rgba(53, 162, 245, 0.18)";
      ctx.lineWidth = 1;
      ctx.stroke();

      const graticule = d3.geoGraticule()();
      ctx.beginPath();
      pathGen(graticule);
      ctx.strokeStyle = "rgba(53, 162, 245, 0.10)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      if (worldData) {
        ctx.beginPath();
        pathGen(worldData);
        ctx.fillStyle = "rgba(3, 64, 156, 0.10)";
        ctx.fill();
        ctx.strokeStyle = "rgba(53, 162, 245, 0.35)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const [lon, lat] = dots[i];
        const projected = projection([lon, lat]);
        if (!projected) continue;
        const [px, py] = projected;

        const lonRad = ((lon + rotRef.current) * Math.PI) / 180;
        const latRad = (lat * Math.PI) / 180;
        const cosLon = Math.cos(lonRad);
        const cosLat = Math.cos(latRad);

        const isVisible = cosLat * cosLon > 0;
        if (!isVisible) continue;

        const depth = (cosLat * cosLon + 1) / 2;
        const alpha = 0.15 + depth * 0.65;

        ctx.beginPath();
        ctx.arc(px, py, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(53, 162, 245, ${alpha.toFixed(2)})`;
        ctx.fill();
      }

      rotRef.current += ROTATION_SPEED;
      frameRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block" }}
    />
  );
}
