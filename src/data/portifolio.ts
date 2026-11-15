export interface ItemTecnologia {
  nome: string;
  categoria: "back-end" | "front-end" | "mobile" | "infra";
}

export type VisibilidadeProjeto = "publico" | "privado";

export type StatusProjeto = "concluido" | "em_desenvolvimento" | "ativo";

export interface ItemProjeto {
  id: string;
  titulo: string;
  visibilidade: VisibilidadeProjeto;
  status: StatusProjeto;
  resumo: string;
  objetivo: string;
  contribuicao: string;
  tecnologias: string[];
  urlAcesso: string | null;
  urlGithub?: string | null;
  notaAcesso: string;
}

export interface ItemExperiencia {
  id: string;
  titulo: string;
  local: string;
  duracao: string;
  descricao: string;
  tags: string[];
  urlAcesso?: string | null;
  urlGithub?: string | null;
}

export const PERFIL = {
  nome: "Richard Silva",
  cargo: "Desenvolvedor Full-Stack",
  cidade: "Recife, PE",
  email: "richdssouza@gmail.com",
  fraseDestaque:
    "Desenvolvedor Full-Stack, criando soluções que conectam pessoas e tecnologia.",
  biografia:
    "Sou Richard Silva, estudante de Tecnologia em Sistemas para Internet na UNICAP (3º de 5 períodos, previsão de conclusão em 2027) e técnico em Redes de Computadores pela ETEPLAP (concluído em 2024). Desenvolvo APIs e aplicações com foco em Java, Spring Boot, Node.js e Fastify.",
  urlGithub: "https://github.com/Richdssz",
  urlLinkedin: "https://www.linkedin.com/in/richdssz",
};

// Tecnologias principais

export const TECNOLOGIAS_PRINCIPAIS: ItemTecnologia[] = [
  { nome: "Java", categoria: "back-end" },
  { nome: "Spring Boot", categoria: "back-end" },
  { nome: "Node.js", categoria: "back-end" },
  { nome: "Fastify", categoria: "back-end" },
  { nome: "React", categoria: "front-end" },
  { nome: "Next.js", categoria: "front-end" },
  { nome: "TypeScript", categoria: "front-end" },
  { nome: "Flutter", categoria: "mobile" },
  { nome: "PostgreSQL", categoria: "back-end" },
  { nome: "Redes", categoria: "infra" },
];

// Experiências profissionais

export const EXPERIENCIAS_PROFISSIONAIS: ItemExperiencia[] = [
  {
    id: "softvalle",
    titulo: "Estágio em Suporte N1 e Sistemas",
    local: "Softvalle",
    duracao: "2 meses",
    descricao:
      "Atuação em atendimento de primeiro nível (N1) a usuários, registro e acompanhamento de chamados e suporte operacional a sistemas corporativos.",
    tags: ["Suporte N1", "Sistemas", "Atendimento"],
  },
];

// Experiências acadêmicas e projetos de residência

export const EXPERIENCIAS_ACADEMICAS: ItemExperiencia[] = [
  {
    id: "ong-isac",
    titulo: "Site Institucional & CMS para ONG (ISAC)",
    local: "Residência Tecnológica (Porto Digital) · 3º Período",
    duracao: "3º Período",
    descricao:
      "Atuação como desenvolvedor-chefe na construção de plataforma institucional completa com painel administrativo estilo CMS. Arquitetura distribuída em 3 repositórios: API completa em Node.js e Fastify, front-end e painel admin em Next.js e React, implantados na Vercel com funções serverless.",
    tags: ["Fastify", "Node.js", "Next.js", "React", "Serverless", "Vercel", "IA"],
    urlAcesso: "https://isac-site.vercel.app/",
    urlGithub: null,
  },
  {
    id: "bora-arrumar",
    titulo: "BoraArrumar! - Zeladoria Urbana Colaborativa",
    local: "Residência Tecnológica (Porto Digital) · 2º Período",
    duracao: "4 meses",
    descricao:
      "Aplicativo pensado para identificação e mapeamento de problemas urbanos (buracos, vazamentos e vias danificadas) para agilizar manutenções públicas junto à prefeitura. Atuação na prototipação no Figma e desenvolvimento mobile com Flutter.",
    tags: ["Flutter", "Dart", "Figma", "Mobile", "UI/UX", "IA"],
    urlAcesso: null,
    urlGithub: null,
  },
  {
    id: "acessoedu-nordeste",
    titulo: "AcessoEdu Nordeste - Painel de Dados Escolares",
    local: "Projeto Acadêmico UNICAP · 2º Período",
    duracao: "2º Período",
    descricao:
      "Painel analítico e colaborativo cobrindo cerca de 74 mil escolas da Região Nordeste com microdados do INEP. CRUD completo em HTML, CSS e JavaScript puro integrado ao Back4App, permitindo autenticação, upload de fotos, comentários, avaliações e visualização de indicadores.",
    tags: ["JavaScript", "HTML5", "CSS3", "Back4App", "CRUD", "INEP", "IA"],
    urlAcesso: "https://acessoedu-nordeste.vercel.app/",
    urlGithub: "https://github.com/Richdssz/acessoedu-nordeste",
  },
];

// Formações acadêmicas

export const FORMACOES_ACADEMICAS: ItemExperiencia[] = [
  {
    id: "unicap",
    titulo: "Tecnólogo em Sistemas para Internet",
    local: "Universidade Católica de Pernambuco (UNICAP)",
    duracao: "3º de 5 períodos · Previsão 2027",
    descricao:
      "Graduação com foco em arquitetura de software, desenvolvimento para web, bancos de dados e engenharia de aplicações.",
    tags: ["Java", "Spring Boot", "APIs", "Web"],
  },
  {
    id: "eteplap",
    titulo: "Técnico em Redes de Computadores",
    local: "ETE Professor Lucilo Ávila Pessoa (ETEPLAP)",
    duracao: "Concluído em 2024",
    descricao:
      "Formação técnica com base sólida em infraestrutura física e lógica de redes, protocolos de comunicação e sistemas operacionais.",
    tags: ["Redes", "Infraestrutura", "Suporte"],
  },
];

// Projetos

export const PROJETOS: ItemProjeto[] = [
  {
    id: "acessoedu-nordeste",
    titulo: "AcessoEdu Nordeste",
    visibilidade: "publico",
    status: "concluido",
    resumo:
      "Painel analítico e colaborativo para consulta de dados de cerca de 74 mil escolas da Região Nordeste.",
    objetivo:
      "Democratizar o acesso a indicadores educacionais do INEP através de uma interface interativa e acessível na web.",
    contribuicao:
      "Desenvolvimento completo do front-end em HTML, CSS e JavaScript Vanilla, integração com Back4App (Parse) e estruturação do CRUD com fotos, notas e comentários.",
    tecnologias: ["JavaScript", "HTML5", "CSS3", "Back4App", "CRUD", "INEP", "IA"],
    urlAcesso: "https://acessoedu-nordeste.vercel.app/",
    urlGithub: "https://github.com/Richdssz/acessoedu-nordeste",
    notaAcesso: "Aplicação pública hospedada na Vercel com repositório aberto no GitHub.",
  },
  {
    id: "isac-plataforma",
    titulo: "Instituto ISAC - Plataforma & CMS",
    visibilidade: "privado",
    status: "ativo",
    resumo:
      "Plataforma institucional estilo WordPress com site dinâmico e painel administrativo para gestão de conteúdo da ONG.",
    objetivo:
      "Criar uma presença digital escalável e autônoma para a ONG gerenciar suas iniciativas, publicações e eventos.",
    contribuicao:
      "Atuação como desenvolvedor-chefe na concepção da arquitetura desacoplada (3 repositórios), desenvolvimento da API em Fastify com TypeScript, front-end em Next.js/React e deploy serverless na Vercel.",
    tecnologias: ["Fastify", "Node.js", "Next.js", "React", "Serverless", "Vercel", "IA"],
    urlAcesso: "https://isac-site.vercel.app/",
    urlGithub: null,
    notaAcesso: "Site em produção. Repositório mantido privado por confidencialidade institucional.",
  },
  {
    id: "vagas-scraper",
    titulo: "Vagas Scraper",
    visibilidade: "publico",
    status: "em_desenvolvimento",
    resumo:
      "Rastreador inteligente de vagas de tecnologia com deduplicação cruzada entre LinkedIn, Gupy e GitHub.",
    objetivo:
      "Automatizar a busca diária e triagem de oportunidades tech, eliminando anúncios duplicados entre portais diferentes.",
    contribuicao:
      "Desenvolvimento do motor de extração em Go (Golang) para alta concorrência e velocidade, hashing para deduplicação cruzada e interface visual em HTML para monitoramento das oportunidades.",
    tecnologias: ["Golang", "HTML", "Web Scraping", "Automação", "IA"],
    urlAcesso: null,
    urlGithub: "https://github.com/Richdssz/vagas-scraper",
    notaAcesso: "Código aberto no GitHub com instruções para execução local.",
  },
  {
    id: "downloads-watcher",
    titulo: "DownloadsWatcher",
    visibilidade: "publico",
    status: "concluido",
    resumo:
      "Monitor em segundo plano para Windows que categoriza e organiza automaticamente arquivos baixados.",
    objetivo:
      "Manter a pasta de Downloads limpa e estruturada por tipos de arquivos (documentos, instaladores, imagens, compactados) sem intervenção manual.",
    contribuicao:
      "Desenvolvimento da aplicação desktop em C#/.NET utilizando FileSystemWatcher do Windows para escuta de eventos do sistema de arquivos e movimentação assíncrona.",
    tecnologias: ["C#", ".NET", "Windows API", "Desktop", "IA"],
    urlAcesso: null,
    urlGithub: "https://github.com/Richdssz/DownloadsWatcher",
    notaAcesso: "Repositório aberto no GitHub com binário e código-fonte disponíveis.",
  },
  {
    id: "bora-arrumar",
    titulo: "BoraArrumar!",
    visibilidade: "privado",
    status: "concluido",
    resumo:
      "Aplicativo cívico colaborativo para identificação e notificação de problemas urbanos em vias públicas.",
    objetivo:
      "Conectar a população à administração pública para acelerar reparos em buracos, vazamentos e vias danificadas.",
    contribuicao:
      "Prototipação no Figma com foco em usabilidade móvel e participação no desenvolvimento do app com Flutter.",
    tecnologias: ["Flutter", "Dart", "Figma", "Mobile", "UI/UX", "IA"],
    urlAcesso: null,
    urlGithub: null,
    notaAcesso: "Projeto de residência tecnológica com repositório privado.",
  },
];
