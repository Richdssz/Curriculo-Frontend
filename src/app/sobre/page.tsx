import CardExperiencia from "@/components/CardExperiencia/CardExperiencia";
import styles from "./sobre.module.css";
import { PERFIL, FORMACOES_ACADEMICAS } from "@/data/portifolio";
import {
  CodeIcon,
  DeviceMobileIcon,
  HardDrivesIcon,
} from "@phosphor-icons/react/ssr";
import LogoTecnologia from "@/components/LogoTecnologia/LogoTecnologia";

// Pilares de atuação
const PILARES = [
  {
    titulo: "Back-end & APIs",
    icone: CodeIcon,
    descricao:
      "Construção de APIs robustas e escaláveis com foco em Java, Spring Boot, Node.js e Fastify, utilizando bancos relacionais como PostgreSQL.",
  },
  {
    titulo: "Front-end & Mobile",
    icone: DeviceMobileIcon,
    descricao:
      "Criação de interfaces web modernas com React, Next.js e TypeScript, além de vivência em aplicações mobile multiplataforma com Flutter.",
  },
  {
    titulo: "Redes & Infra",
    icone: HardDrivesIcon,
    descricao:
      "Base sólida em redes de computadores pela ETEPLAP, protocolos de comunicação, sistemas corporativos e atendimento técnico N1.",
  },
];

// Tecnologias do projeto
const MODULOS_PROJETO = [
  {
    nome: "Next.js",
    versao: "v16 (App Router)",
    uso: "Framework full-stack com Server Components, renderização híbrida e roteamento moderno baseado no sistema de arquivos.",
  },
  {
    nome: "React",
    versao: "v19",
    uso: "Biblioteca principal para construção modular e declarativa das interfaces e gerenciamento de estado.",
  },
  {
    nome: "TypeScript",
    versao: "v5",
    uso: "Tipagem estática rigorosa para garantir consistência de dados, prevenção de erros em desenvolvimento e contratos com interfaces.",
  },
  {
    nome: "CSS Modules",
    versao: "Nativo Next.js",
    uso: "Estilização com escopo local por componente, evitando colisões globais de classes e mantendo a identidade Recife Editorial.",
  },
  {
    nome: "@phosphor-icons/react",
    versao: "v2.1",
    uso: "Conjunto de ícones vetoriais modernos e leves em formato SVG para links sociais e navegação.",
  },
  {
    nome: "GitHub REST & Contributions API",
    versao: "v3 & v4",
    uso: "Consumo assíncrono combinando duas APIs distintas: a REST oficial do GitHub (v3) para dados de perfil e repositórios, e a GitHub Contributions API (v4 por @grubersjoe) para o histórico diário de commits sem necessidade de expor chaves privadas no front-end.",
  },
  {
    nome: "Vercel",
    versao: "Cloud Edge",
    uso: "Infraestrutura de CI/CD com build automático a cada git push e distribuição global na borda (Edge Network).",
  },
];

export default function SobrePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.chapeu}>Trajetória & Foco</span>
        <h1 className={styles.titulo}>Sobre mim</h1>
        <p className={styles.bio}>{PERFIL.biografia}</p>
      </header>

      <section className={styles.secao}>
        <div className={styles.secaoCabecalho}>
          <h2 className={styles.secaoTitulo}>Áreas de Atuação</h2>
        </div>
        <div className={styles.gridPilares}>
          {PILARES.map((pilar) => (
            <article key={pilar.titulo} className={styles.cardPilar}>
              <div className={styles.pilarTopo}>
                <pilar.icone size={22} weight="duotone" color="#F0644F" />
                <h3 className={styles.cardTitulo}>{pilar.titulo}</h3>
              </div>
              <p className={styles.cardDescricao}>{pilar.descricao}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.secao}>
        <div className={styles.secaoCabecalho}>
          <h2 className={styles.secaoTitulo}>Formação Acadêmica</h2>
        </div>
        <div className={styles.listaFormacao}>
          {FORMACOES_ACADEMICAS.map((formacao) => (
            <CardExperiencia key={formacao.id} item={formacao} />
          ))}
        </div>
      </section>

      <section className={styles.secao}>
        <div className={styles.secaoCabecalho}>
          <h2 className={styles.secaoTitulo}>
            Tecnologias & Módulos Utilizados no Portfólio
          </h2>
        </div>
        <div className={styles.gridModulos}>
          {MODULOS_PROJETO.map((modulo) => (
            <article key={modulo.nome} className={styles.cardModulo}>
              <div className={styles.moduloTopo}>
                <div className={styles.moduloTituloGrupo}>
                  <LogoTecnologia nome={modulo.nome} tamanho={20} />
                  <span className={styles.moduloNome}>{modulo.nome}</span>
                </div>
                <span className={styles.moduloVersao}>{modulo.versao}</span>
              </div>
              <p className={styles.moduloUso}>{modulo.uso}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
