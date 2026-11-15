import type { Metadata } from "next";
import CardExperiencia from "@/components/CardExperiencia/CardExperiencia";
import styles from "./experiencia.module.css";
import {
  EXPERIENCIAS_ACADEMICAS,
  EXPERIENCIAS_PROFISSIONAIS,
  FORMACOES_ACADEMICAS,
} from "@/data/portifolio";

export const metadata: Metadata = {
  title: "Experiência | Richard Silva",
  description:
    "Trajetória profissional e formação acadêmica de Richard Silva, desenvolvedor Full-stack em formação.",
};

export default function ExperienciaPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.chapeu}>Trajetória & Vivência</span>
        <h1 className={styles.titulo}>Experiência</h1>
        <p className={styles.subtitulo}>
          Vivência prática em suporte técnico a sistemas, residências de software
          desenvolvendo APIs e aplicativos, e base acadêmica em sistemas e redes.
        </p>
      </header>

      <section className={styles.secao}>
        <div className={styles.secaoCabecalho}>
          <h2 className={styles.secaoTitulo}>Experiência Profissional</h2>
          <span className={styles.secaoContador}>
            {EXPERIENCIAS_PROFISSIONAIS.length} registros
          </span>
        </div>

        <div className={styles.gridCards}>
          {EXPERIENCIAS_PROFISSIONAIS.map((exp) => (
            <CardExperiencia key={exp.id} item={exp} mostrarTags={true} />
          ))}
        </div>
      </section>

      <section className={styles.secao}>
        <div className={styles.secaoCabecalho}>
          <h2 className={styles.secaoTitulo}>Experiências Acadêmicas</h2>
          <span className={styles.secaoContador}>
            {EXPERIENCIAS_ACADEMICAS.length} registros
          </span>
        </div>

        <div className={styles.gridCards}>
          {EXPERIENCIAS_ACADEMICAS.map((experiencia) => (
            <CardExperiencia
              key={experiencia.id}
              item={experiencia}
              mostrarTags={true}
            />
          ))}
        </div>
      </section>

      <section className={styles.secao}>
        <div className={styles.secaoCabecalho}>
          <h2 className={styles.secaoTitulo}>Formação Acadêmica</h2>
          <span className={styles.secaoContador}>
            {FORMACOES_ACADEMICAS.length} formações
          </span>
        </div>

        <div className={styles.gridCards}>
          {FORMACOES_ACADEMICAS.map((formacao) => (
            <CardExperiencia key={formacao.id} item={formacao} />
          ))}
        </div>
      </section>
    </main>
  );
}
