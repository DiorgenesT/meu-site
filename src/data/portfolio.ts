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
    id: 1,
    title: "Sistema de Digitalização de Processos",
    description: "Plataforma para virtualização de fluxos administrativos da Prefeitura de Betim. Elimina papel e planilhas com formulários inteligentes, assinatura digital e gestão de documentos.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/DiorgenesT",
    live: "#",
    featured: true,
    color: "#00f5ff",
    year: "2025",
  },
  {
    id: 2,
    title: "Automação de Relatórios — Python",
    description: "Pipeline de coleta, tratamento e visualização de dados operacionais. Substitui 40+ horas semanais de trabalho manual com relatórios gerados automaticamente e distribuídos por e-mail.",
    tech: ["Python", "Pandas", "NumPy", "FastAPI", "PostgreSQL"],
    github: "https://github.com/DiorgenesT",
    live: "#",
    featured: true,
    color: "#ffffff",
    year: "2024",
  },
  {
    id: 3,
    title: "Web Scraping Pipeline",
    description: "Sistema de coleta automatizada de dados públicos com Beautiful Soup e Playwright. Processa e estrutura dados em PostgreSQL para análise e geração de relatórios.",
    tech: ["Python", "Beautiful Soup", "PostgreSQL", "Pandas"],
    github: "https://github.com/DiorgenesT",
    live: "#",
    featured: false,
    color: "#00f5ff",
    year: "2024",
  },
  {
    id: 4,
    title: "Dashboard Administrativo",
    description: "Painel de gestão com métricas em tempo real, controle de acesso por perfis, histórico de ações e exportação de relatórios. Interface moderna sobre sistema legado.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/DiorgenesT",
    live: "#",
    featured: false,
    color: "#ffffff",
    year: "2025",
  },
  {
    id: 5,
    title: "API REST — FastAPI",
    description: "API robusta com autenticação JWT, rate limiting, documentação OpenAPI automática e deploy containerizado. Integra sistemas legados da prefeitura a interfaces modernas.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "CI/CD"],
    github: "https://github.com/DiorgenesT",
    live: "#",
    featured: false,
    color: "#00f5ff",
    year: "2025",
  },
  {
    id: 6,
    title: "Portal de Atendimento Digital",
    description: "Plataforma de atendimento ao cidadão substituindo formulários físicos. Formulários dinâmicos, upload de documentos, acompanhamento de status e notificações.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Cloudflare"],
    github: "https://github.com/DiorgenesT",
    live: "#",
    featured: false,
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
