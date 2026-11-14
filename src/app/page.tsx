import Link from "next/link";
import styles from "./page.module.css";
import { PERFIL, TECNOLOGIAS_PRINCIPAIS } from "@/data/portifolio";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.titulo}>Desenvolvedor Full-stack em formação</h1>

        <p className={styles.frase}>{PERFIL.fraseDestaque}</p>

        <div className={styles.botoes}>
          <Link href="/projetos" className={styles.btnPrincipal}>
            Ver projetos
          </Link>
          <Link href="/contato" className={styles.btnSecundario}>
            Entrar em contato
          </Link>
        </div>
      </section>
      
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>Tecnologias principais</h2>
        <div className={styles.gridTecnologias}>
          {TECNOLOGIAS_PRINCIPAIS.map((tec) => (
            <span key={tec.nome} className={styles.tag}> 
            {tec.nome}</span>
          ))} </div>
      </section>
    </main>
  );
}
