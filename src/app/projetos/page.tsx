import type { Metadata } from "next";
import ListaProjetos from "./ListaProjetos";
import styles from "./projetos.module.css";

export const metadata: Metadata = {
  title: "Projetos | Richard Silva",
  description:
    "Aplicações web, APIs, ferramentas de automação e projetos mobile desenvolvidos por Richard Silva.",
};

export default function ProjetosPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.chapeu}>Portfólio & Criações</span>
        <h1 className={styles.titulo}>Projetos</h1>
        <p className={styles.subtitulo}>
          Aplicações web completas, APIs escaláveis, utilitários desktop e projetos
          mobile construídos com foco em usabilidade, arquitetura limpa e tecnologia.
        </p>
      </header>

      <ListaProjetos />
    </main>
  );
}
