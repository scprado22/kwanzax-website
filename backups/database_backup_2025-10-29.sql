-- Database Backup - 2025-10-29
-- Tables: career_applications, contacts, currency_rates, newsletter_subscribers, quotes, services, tech_news

-- ============================================
-- TABLE: currency_rates (3 rows)
-- ============================================
INSERT INTO currency_rates (id, currency_code, rate_to_usd, updated_at) VALUES
('6620d67b-98c6-475d-8a9a-1c430de2d9e0', 'USD', 1.000000, '2025-10-12 19:51:12.97023+00'),
('13625f2c-ae05-4cb4-80a3-0d1853e08cdd', 'EUR', 0.920000, '2025-10-12 19:51:12.97023+00'),
('14e06719-3127-44e2-8170-a486ffd37309', 'AOA', 925.000000, '2025-10-12 19:51:12.97023+00');

-- ============================================
-- TABLE: services (8 rows)
-- ============================================
INSERT INTO services (id, slug, title, description, category, base_price_usd, is_active, created_at, updated_at) VALUES
('068eb860-23a4-45f4-91d3-db0bf4e02e1f', 'ai-consulting', 'AI Consulting & Strategy', 'Roadmaps, discovery e business cases para ROI em 30–90 dias', 'AI', 15000.00, true, '2025-10-12 19:51:12.97023+00', '2025-10-12 19:51:12.97023+00'),
('5aea39cd-62f8-4fa0-9296-94ac8a1a631d', 'automations-rpa', 'Automations & RPA', 'Automatização ponta-a-ponta com APIs, n8n/Zapier e WhatsApp Business', 'Automation', 10000.00, true, '2025-10-12 19:51:12.97023+00', '2025-10-12 19:51:12.97023+00'),
('fc729466-4d02-484d-84e2-f0dd471cbde6', 'data-analytics', 'Data Platforms & Analytics', 'Data lakes, pipelines, BI e governança para decisões em tempo real', 'Data', 20000.00, true, '2025-10-12 19:51:12.97023+00', '2025-10-12 19:51:12.97023+00'),
('4bac10ca-c72b-41ad-86c8-3ea36e75996a', 'product-ux-engineering', 'Product & UX Engineering', 'Web apps, ERPs/CRMs e marketplaces com foco em conversão', 'Product', 25000.00, true, '2025-10-12 19:51:12.97023+00', '2025-10-12 19:51:12.97023+00'),
('9fce4189-db5d-40e6-8c2b-d2629ea14a3c', 'cto-as-service', 'CTO as a Service', 'CTO fractional para guiar a estratégia técnica e arquitetura', 'Consulting', 8000.00, true, '2025-10-12 19:51:12.97023+00', '2025-10-12 19:51:12.97023+00'),
('d84080b7-88c4-41ad-bfde-682eabb5e11c', 'custom-erp', 'Custom ERP Development', 'ERPs modulares e escaláveis para gestão empresarial', 'Product', 35000.00, true, '2025-10-12 19:51:12.97023+00', '2025-10-12 19:51:12.97023+00'),
('a8d62021-469d-4c39-bf55-e7b994f670c7', 'whatsapp-automation', 'WhatsApp Business Automation', 'Bots inteligentes para atendimento e vendas via WhatsApp', 'Automation', 5000.00, true, '2025-10-12 19:51:12.97023+00', '2025-10-12 19:51:12.97023+00'),
('1f65ee34-34bc-4c2a-be6e-5aa3301a12eb', 'marketplace-platform', 'Marketplace Platform', 'Plataformas de marketplace multi-vendor completas', 'Product', 40000.00, true, '2025-10-12 19:51:12.97023+00', '2025-10-12 19:51:12.97023+00');

-- ============================================
-- TABLE: tech_news (6 rows)
-- ============================================
INSERT INTO tech_news (id, title, url, summary, source, published_at, tag, created_at, week_slug) VALUES
('04507b8e-08c6-418f-83d6-9c5bbb605125', 'We keep talking about AI agents, but do we ever know what they are?', 'https://venturebeat.com/ai/we-keep-talking-about-ai-agents-but-do-we-ever-know-what-they-are', 'Imagine you do two things on a Monday morning.First, you ask a chatbot to summarize your new emails. Next, you ask an AI tool to figure out why your top competitor grew so fast last quarter. The AI silently gets to work. It scours financ...', 'venturebeat.com', '2025-10-12 19:00:00+00', 'AI/Software', '2025-10-12 20:45:44.030186+00', '2025-10-12'),
('262e4648-a319-47f1-b485-bee4ac2a1dcf', 'Nvidia&#8217;s AI empire: A look at its top startup investments', 'https://techcrunch.com/2025/10/12/nvidias-ai-empire-a-look-at-its-top-startup-investments/', 'Over the last two years, Nvidia has used its ballooning fortunes to invest in over 100 AI startups. Here are the giant semiconductor''s largest investments.', 'techcrunch.com', '2025-10-12 15:30:28+00', 'AI/Software', '2025-10-12 20:45:44.030186+00', '2025-10-12'),
('cf7f6879-d1e7-4afa-a14e-132571dce4d5', '8 Best Cat Water Fountains, WIRED Tested and Reviewed (2025)', 'https://www.wired.com/gallery/the-best-cat-water-fountains/', 'Ensuring your cat is drinking enough water is one of the best ways to keep your pet healthy. We tested popular models to find the best water fountains for most cats.', 'wired.com', '2025-10-12 15:06:00+00', 'AI/Software', '2025-10-12 20:45:44.030186+00', '2025-10-12'),
('83145fc4-afc6-469b-b37a-b44f80801979', 'Specialized S-Works Levo 4 Electric Mountain Bike Review: The Best Electric Mountain Bike', 'https://www.wired.com/review/specialized-s-works-levo-4/', 'This supercharged, intuitive trail machine can turn any intermediate rider into a World Cup–level legend in their own mind.', 'wired.com', '2025-10-12 12:00:00+00', 'AI/Software', '2025-10-12 20:45:44.030186+00', '2025-10-12'),
('440ff9a2-f844-479e-9a1a-f63ed79aa8ca', 'Thinking Machines Lab co-founder Andrew Tulloch heads to Meta', 'https://techcrunch.com/2025/10/11/thinking-machines-lab-co-founder-andrew-tulloch-heads-to-meta/', 'AI researcher Andrew Tulloch reportedly announced his departure to employees in a message on Friday.', 'techcrunch.com', '2025-10-11 19:10:37+00', 'AI/Software', '2025-10-12 20:45:44.030186+00', '2025-10-12'),
('e0730d9c-a427-409c-9396-3cb536a74095', 'Is vibe coding ruining a generation of engineers?', 'https://venturebeat.com/ai/is-vibe-coding-ruining-a-generation-of-engineers', 'AI tools are revolutionizing software development by automating repetitive tasks, refactoring bloated code, and identifying bugs in real-time. Developers can now generate well-structured code from plain language prompts, saving hours of ...', 'venturebeat.com', '2025-10-11 19:00:00+00', 'AI/Software', '2025-10-12 20:45:44.030186+00', '2025-10-12');

-- ============================================
-- EMPTY TABLES
-- ============================================
-- career_applications: 0 rows
-- contacts: 0 rows
-- newsletter_subscribers: 0 rows
-- quotes: 0 rows

-- ============================================
-- BACKUP SUMMARY
-- ============================================
-- Total records: 17
-- - currency_rates: 3 rows
-- - services: 8 rows
-- - tech_news: 6 rows
-- - career_applications: 0 rows (empty)
-- - contacts: 0 rows (empty)
-- - newsletter_subscribers: 0 rows (empty)
-- - quotes: 0 rows (empty)
-- ============================================
