export const personalInfo = {
  name: "Diorgenes George",
  initials: "DG",
  role: "Python Developer · Backend & AI Engineer",
  tagline: "Construo sistemas backend com Python que entregam em produção: de APIs de alta demanda a pipelines de IA com LLMs e agentes autônomos.",
  bio: "Desenvolvedor Python com sistemas rodando em produção no setor público e privado. Na Fundação Beta (Prefeitura de Betim), arquitetei APIs consumidas por dezenas de milhares de acessos mensais. No lado privado, integro LLMs, RAG e agentes inteligentes em produtos reais, não apenas protótipos. Minha vantagem: entendo o problema de negócio antes de abrir o editor, e entrego código que outras pessoas conseguem manter.",
  location: "Betim, Minas Gerais",
  github: "https://github.com/DiorgenesT",
  linkedin: "https://www.linkedin.com/in/diorgenesgeorge/",
  instagram: "https://www.instagram.com/diorgenestavares/",
  whatsapp: "https://wa.me/5531991519864",
  available: true,
};

export const skills = [
  { name: "Python / FastAPI", category: "backend", level: 93 },
  { name: "LLMs & AI Agents", category: "ai", level: 84 },
  { name: "AWS (Lambda · S3 · Bedrock)", category: "cloud", level: 80 },
  { name: "RAG / LangChain", category: "ai", level: 82 },
  { name: "PostgreSQL / pgvector", category: "database", level: 85 },
  { name: "Docker & CI/CD", category: "devops", level: 82 },
  { name: "TypeScript / React", category: "frontend", level: 90 },
  { name: "Web Scraping / Automação", category: "backend", level: 88 },
];

export const techStack = [
  "Python", "FastAPI", "AWS", "LangChain", "LLMs", "RAG",
  "AI Agents", "OpenAI API", "Anthropic API", "PostgreSQL", "pgvector",
  "Docker", "TypeScript", "React", "Next.js", "Cloudflare",
  "Supabase", "CI/CD", "Git / GitHub",
];

export const experience = [
  {
    role: "Engenheiro de Software · Python & AI",
    company: "Fundação Beta",
    companyDetail: "Inovação & Tecnologia · Prefeitura de Betim",
    period: "nov 2025 · Presente",
    description: "Arquitetura de APIs Python/FastAPI para digitalização da administração pública de Betim: portais com dezenas de milhares de acessos mensais. Integração de LLMs para automação de processos e classificação inteligente de dados. Sistemas substituindo papel, planilhas e fluxos manuais por APIs REST com PostgreSQL e workers Cloudflare.",
    tech: ["Python", "FastAPI", "LLMs", "PostgreSQL", "TypeScript", "Cloudflare Workers", "Docker"],
    isCurrentJob: true,
  },
  {
    role: "Gerente de Atendimento → Dev Python",
    company: "Monumental Assistência 24hrs",
    companyDetail: "",
    period: "nov 2021 · nov 2025",
    description: "Gestão de equipe onde dei início à transição para tecnologia: automatizei operações críticas com Python, construí dashboards de métricas e reduzi o tempo de atendimento em 35% com ferramentas internas. Primeiro contato prático com LLMs para automação de triagem e análise de dados em volume.",
    tech: ["Python", "Automação", "Data Analysis", "LLMs"],
    isCurrentJob: false,
  },
  {
    role: "Gerente de Operações",
    company: "Expresso Truck",
    companyDetail: "",
    period: "jul 2014 · set 2020",
    description: "Gestão de operações logísticas de alta pressão. Formou a base para entender processos de negócio antes de codificar, habilidade que diferencia um dev que entrega de um que apenas implementa requisitos.",
    tech: ["Gestão de Processos", "Logística", "Operações"],
    isCurrentJob: false,
  },
];

export const education = [
  {
    degree: "Pós-Graduação",
    field: "Desenvolvimento de Sistemas com Python",
    institution: "UniCesumar",
    period: "set 2024 · set 2025",
  },
  {
    degree: "Bacharelado",
    field: "Ciência da Computação",
    institution: "Universidade Cruzeiro do Sul",
    period: "2019 · set 2024",
  },
];

export const projects = [
  {
    id: 0,
    title: "UPA Agora",
    description: "Painel público em tempo real das 4 UPAs de Betim. Fila de espera por especialidade, classificação pelo Protocolo de Manchester e status online/offline de cada unidade.",
    tech: ["React 19", "TypeScript", "Tailwind CSS v4", "Hono", "Cloudflare Workers", "Cloudflare KV"],
    github: null,
    live: "https://fundacaobeta.com.br/upaagora",
    featured: true,
    color: "#00f5ff",
    year: "2025",
  },
  {
    id: 1,
    title: "Regionais Conectadas",
    description: "Portal das regionais administrativas de Betim. Cidadãos consultam equipamentos públicos e abrem solicitações de serviços urbanos com acompanhamento por e-mail.",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Cloudflare Workers", "Resend"],
    github: null,
    live: "https://fundacaobeta.com.br/regionaisconectadas",
    featured: true,
    color: "#ffffff",
    year: "2025",
  },
  {
    id: 2,
    title: "Fundação Beta",
    description: "Site institucional do centro de inovação e tecnologia da Prefeitura de Betim. Apresenta os 21+ projetos ativos e a visão Beta30+ (2025–2055).",
    tech: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Cloudflare Pages"],
    github: null,
    live: "https://fundacaobeta.com.br",
    featured: true,
    color: "#00f5ff",
    year: "2025",
  },
  {
    id: 3,
    title: "Tudo Em Dia",
    description: "SaaS de gestão financeira pessoal. Contas, cartões, metas e relatórios com score de saúde financeira. Assistente de IA com voz e pagamentos via Stripe.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Firebase", "OpenAI", "Stripe", "Vercel AI SDK", "GSAP"],
    github: "https://github.com/DiorgenesT/controle-financeiro",
    live: "https://tatudoemdia.com.br",
    featured: true,
    color: "#ffffff",
    year: "2025",
  },
];

export const stats = [
  { value: 30, suffix: "+", label: "Sistemas Entregues" },
  { value: 35, suffix: "%", label: "Redução de Tempo Operacional" },
  { value: 2, suffix: "x", label: "Formações em TI" },
];

export const terminalLines = [
  { text: "class Developer:" },
  { text: '    name = "Diorgenes George"' },
  { text: '    alias = "DG"' },
  { text: "    core_language = 'Python'" },
  { text: "    stack = ['FastAPI', 'AWS', 'LangChain', 'PostgreSQL']" },
  { text: "    expertise = ['LLMs', 'AI Agents', 'RAG', 'Backend APIs']" },
  { text: "    available = True" },
  { text: "" },
  { text: "    def build(self): return 'sistemas que pensam'" },
  { text: "" },
  { text: "DG = Developer()" },
  { text: "DG.build()  # ✓ em produção" },
];
