export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center font-bold text-white text-xl">
        K
      </div>
      <span className="font-bold text-xl text-gray-900">KwanzaX</span>
    </div>
  );
}
