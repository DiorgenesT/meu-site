export const personalInfo = {
  name: "Diorgenes George",
  initials: "DG",
  role: "Engenheiro / Desenvolvedor de Software",
  tagline: "Transformo processos administrativos e operacionais complexos em sistemas digitais robustos e escaláveis.",
  bio: "Desenvolvedor full stack na Fundação Beta (Prefeitura de Betim), especializado em digitalização de processos governamentais. Combino TypeScript e Python para eliminar papel, planilhas e ineficiências — construindo sistemas que as pessoas realmente usam.",
  location: "Betim, Minas Gerais",
  email: "dg@email.com",
  github: "https://github.com/DiorgenesT",
  linkedin: "https://www.linkedin.com/in/diorgenesgeorge/",
  instagram: "https://www.instagram.com/diorgenestavares/",
  whatsapp: "https://wa.me/5531991519864",
  available: true,
};

// Curated tech stack — sênior não lista tudo, lista o que importa
export const skills = [
  { name: "TypeScript", category: "frontend", level: 92 },
  { name: "React / Next.js", category: "frontend", level: 90 },
  { name: "Python / FastAPI", category: "backend", level: 88 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },
  { name: "PostgreSQL", category: "database", level: 82 },
  { name: "Docker & CI/CD", category: "devops", level: 78 },
  { name: "Web Scraping", category: "backend", level: 85 },
  { name: "GSAP / Animações", category: "frontend", level: 82 },
];

export const techStack = [
  "TypeScript", "Python", "React", "Next.js", "FastAPI",
  "PostgreSQL", "Docker", "Tailwind CSS", "GSAP",
  "Vercel", "Cloudflare", "Supabase", "Git / GitHub", "CI/CD", "Vite",
];

export const experience = [
  {
    role: "Analista Sênior · Engenheiro de Software",
    company: "Fundação Beta",
    companyDetail: "Inovação & Tecnologia — Prefeitura de Betim",
    period: "nov 2025 — Presente",
    description: "Desenvolvimento de sistemas para digitalização de processos da administração pública. Zero papel, zero planilhas — fluxos modernos com Next.js, FastAPI e PostgreSQL integrados a sistemas legados.",
    tech: ["TypeScript", "Next.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
    isCurrentJob: true,
  },
  {
    role: "Gerente de Atendimento",
    company: "Monumental Assistência 24hrs",
    companyDetail: "",
    period: "nov 2021 — nov 2025",
    description: "Liderança de equipe de atendimento ao cliente. Período em que migrei para tecnologia: automatizei relatórios com Python, estruturei dashboards de métricas e desenvolvi ferramentas internas que reduziram o tempo de atendimento em 35%.",
    tech: ["Python", "Automação", "Liderança", "Data Analysis"],
    isCurrentJob: false,
  },
  {
    role: "Gerente de Atendimento",
    company: "Expresso Truck",
    companyDetail: "",
    period: "jul 2014 — set 2020",
    description: "Gestão de operações logísticas. Base sólida em processos, prazos e resolução de problemas sob pressão — habilidades que hoje aplicam diretamente em desenvolvimento de software.",
    tech: ["Gestão de Processos", "Logística", "Operações"],
    isCurrentJob: false,
  },
];

export const education = [
  {
    degree: "Pós-Graduação",
    field: "Desenvolvimento de Sistemas com Python",
    institution: "UniCesumar",
    period: "set 2024 — set 2025",
  },
  {
    degree: "Bacharelado",
    field: "Ciência da Computação",
    institution: "Universidade Cruzeiro do Sul",
    period: "2019 — set 2024",
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
    id: 4,
    title: "Tudo Em Dia",
    description: "SaaS de gestão financeira pessoal. Contas, cartões, metas e relatórios com score de saúde financeira. Assistente de IA com voz e pagamentos via Stripe.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Firebase", "OpenAI", "Stripe", "Vercel AI SDK", "GSAP"],
    github: null,
    live: "https://tatudoemdia.com.br",
    featured: true,
    color: "#ffffff",
    year: "2025",
  },
];

export const stats = [
  { value: 5, suffix: "+", label: "Anos de Experiência" },
  { value: 30, suffix: "+", label: "Sistemas Entregues" },
  { value: 100, suffix: "%", label: "Digital — Zero Papel" },
  { value: 2, suffix: "x", label: "Formações em TI" },
];

export const terminalLines = [
  { text: "const developer = {" },
  { text: '  name: "Diorgenes George",' },
  { text: '  alias: "DG",' },
  { text: "  role: 'Engenheiro de Software'," },
  { text: "  stack: ['TypeScript', 'Python', 'Next.js']," },
  { text: "  focus: 'digitalização de processos'," },
  { text: "  available: true," },
  { text: "};" },
  { text: "" },
  { text: "DG.build(); // ✓ Online" },
];
