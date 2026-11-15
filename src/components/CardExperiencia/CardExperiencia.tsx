import type { ItemExperiencia } from "@/data/portifolio";
import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react/ssr";
import LogoTecnologia from "@/components/LogoTecnologia/LogoTecnologia";
import styles from "./CardExperiencia.module.css";

interface CardExperienciaProps {
  item: ItemExperiencia;
  mostrarTags?: boolean;
}

export default function CardExperiencia({
  item,
  mostrarTags = false,
}: CardExperienciaProps) {
  const temLinks = Boolean(item.urlGithub || item.urlAcesso);

  return (
    <article className={styles.card}>
      <div className={styles.cabecalho}>
        <div className={styles.cabecalhoTexto}>
          <h3 className={styles.titulo}>
            {item.local} - {item.titulo}
          </h3>
          <p className={styles.meta}>{item.duracao}</p>
        </div>

        {temLinks && (
          <div className={styles.acoes}>
            {item.urlGithub && (
              <a
                href={item.urlGithub}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnAcao}
                title="Acessar código no GitHub"
                aria-label={`Acessar repositório de ${item.titulo} no GitHub`}
              >
                <GithubLogoIcon size={18} weight="bold" />
              </a>
            )}
            {item.urlAcesso && (
              <a
                href={item.urlAcesso}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnAcao}
                title="Acessar site / aplicação"
                aria-label={`Acessar projeto ${item.titulo}`}
              >
                <ArrowSquareOutIcon size={18} weight="bold" />
              </a>
            )}
          </div>
        )}
      </div>

      <p className={styles.descricao}>{item.descricao}</p>

      {mostrarTags && item.tags.length > 0 && (
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              <LogoTecnologia nome={tag} tamanho={13} />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
