export interface ItemTecnologia {
  nome: string;
  categoria: "back-end" | "front-end" | "mobile" | "infra";
}

export type VisibilidadeProjeto = "publico" | "privado";

export interface ItemProjeto {
  id: string;
  titulo: string;
  visibilidade: VisibilidadeProjeto;
  resumo: string;
  objetivo: string;
  contribuicao: string;
  status: string;
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
  disponibilidade: "Disponível para oportunidades",
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
    tags: ["Fastify", "Node.js", "Next.js", "React", "Serverless", "Vercel"],
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
    tags: ["Flutter", "Figma", "Mobile", "UI/UX"],
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
    tags: ["JavaScript", "HTML5", "CSS3", "Back4App", "CRUD", "INEP"],
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

// add dps
// export const PROJETOS: ItemProjeto[] = [
//   {

//   }
// ];
