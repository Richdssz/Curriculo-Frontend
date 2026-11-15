import type { Metadata } from "next";
import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
} from "@phosphor-icons/react/ssr";
import { PERFIL } from "@/data/portifolio";
import FormularioContato from "./FormularioContato";
import styles from "./contato.module.css";

export const metadata: Metadata = {
  title: "Contato | Richard Silva",
  description:
    "Entre em contato com Richard Silva para oportunidades de desenvolvimento, projetos ou dúvidas.",
};

export default function ContatoPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.chapeu}>Canais & Conexão</span>
        <h1 className={styles.titulo}>Contato</h1>
        <p className={styles.subtitulo}>
          Tem alguma oportunidade em mente, quer falar sobre tecnologia ou tirar
          alguma dúvida sobre meus projetos? Fique à vontade para me mandar uma
          mensagem.
        </p>

        {/* Localização e redes no topo */}
        <div className={styles.barraTopo}>
          <div className={styles.itemLocalizacao}>
            <MapPinIcon size={18} weight="duotone" className={styles.iconeLocalizacao} />
            <span>{PERFIL.cidade}</span>
          </div>

          <div className={styles.redesTopo}>
            <a
              href={PERFIL.urlLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnRedeTopo}
            >
              <LinkedinLogoIcon size={18} weight="bold" />
              <span>LinkedIn</span>
              <ArrowSquareOutIcon size={14} />
            </a>

            <a
              href={PERFIL.urlGithub}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnRedeTopo}
            >
              <GithubLogoIcon size={18} weight="bold" />
              <span>GitHub</span>
              <ArrowSquareOutIcon size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* Formulário com CTA direto para o e-mail */}
      <section>
        <FormularioContato />
      </section>
    </main>
  );
}
