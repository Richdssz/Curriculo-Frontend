// Tipos do TypeScript (moldes dos dados)

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
  notaAcesso: string;
}

export interface ItemExperiencia {
  id: string;
  titulo: string;
  local: string;
  duracao: string;
  descricao: string;
  tags: string[];
}

// Dados do perfil de Richard Silva

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
  urlLinkedin: "www.linkedin.com/in/richdssz",
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
  { nome: "Redes & Suporte", categoria: "infra" },
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
  {
    id: "porto-digital",
    titulo: "Residências Tecnológicas (3 edições)",
    local: "Porto Digital",
    duracao: "3 edições",
    descricao:
      "Vivência prática em desafios reais de software, passando por prototipação no Figma, desenvolvimento mobile com Flutter e criação de APIs com Fastify/Node.js.",
    tags: ["Flutter", "Node.js", "Fastify", "Figma"],
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
