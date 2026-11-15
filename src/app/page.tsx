import Link from "next/link";
import AtividadeGithub from "@/components/AtividadeGithub/AtividadeGithub";
import CardExperiencia from "@/components/CardExperiencia/CardExperiencia";
import LogoTecnologia from "@/components/LogoTecnologia/LogoTecnologia";
import styles from "./page.module.css";
import {
  EXPERIENCIAS_ACADEMICAS,
  EXPERIENCIAS_PROFISSIONAIS,
  TECNOLOGIAS_PRINCIPAIS,
} from "@/data/portifolio";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.chapeuNome}>
          Richard <span className={styles.chapeuPonto}>Silva.</span>
        </p>
        <h1 className={styles.titulo}>Desenvolvedor Full-stack em formação</h1>

        <p className={styles.frase}>
          Desenvolvedor Full-Stack em formação pela UNICAP e técnico em redes de
          computadores. Focado na construção de APIs escaláveis, arquiteturas
          modernas e interfaces funcionais que conectam pessoas e tecnologia.
        </p>

        <div className={styles.botoes}>
          <Link href="/projetos" className={styles.btnPrincipal}>
            Ver projetos
          </Link>
          <Link href="/contato" className={styles.btnSecundario}>
            Entrar em contato
          </Link>
        </div>
      </section>
      
      {/* Tecnologias principais */}
      <section className={styles.secao}>
        <div className={styles.divisorSecao}>
          <h2 className={styles.secaoTitulo}>Tecnologias principais</h2>
          <span className={styles.linhaCoral} aria-hidden="true" />
        </div>

        <div className={styles.carrosselContainer}>
          <div className={styles.fita}>
            {[...TECNOLOGIAS_PRINCIPAIS, ...TECNOLOGIAS_PRINCIPAIS].map(
              (tec, index) => (
                <span key={`${tec.nome}-${index}`} className={styles.tag}>
                  <LogoTecnologia nome={tec.nome} tamanho={18} />
                  <span>{tec.nome}</span>
                </span>
              )
            )}
          </div>

          <div className={styles.fitaSegundaLinha}>
            {[
              ...TECNOLOGIAS_PRINCIPAIS.slice().reverse(),
              ...TECNOLOGIAS_PRINCIPAIS.slice().reverse(),
            ].map((tec, index) => (
              <span key={`rev-${tec.nome}-${index}`} className={styles.tag}>
                <LogoTecnologia nome={tec.nome} tamanho={18} />
                <span>{tec.nome}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência em destaque */}
      <section className={styles.secao}>
        <div className={styles.divisorSecao}>
          <h2 className={styles.secaoTitulo}>Experiência em destaque</h2>
          <span className={styles.linhaCoral} aria-hidden="true" />
        </div>

        <div className={styles.gridExperiencias}>
          {EXPERIENCIAS_PROFISSIONAIS.map((exp) => (
            <CardExperiencia key={exp.id} item={exp} />
          ))}
          <CardExperiencia item={EXPERIENCIAS_ACADEMICAS[0]} />
        </div>
      </section>

      {/* Atividade no GitHub */}
      <section className={styles.secao}>
        <div className={styles.divisorSecao}>
          <h2 className={styles.secaoTitulo}>Atividade no GitHub</h2>
          <span className={styles.linhaCoral} aria-hidden="true" />
        </div>

        <AtividadeGithub />
      </section>
    </main>
  );
}
