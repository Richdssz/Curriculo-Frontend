import Link from "next/link";
import { PERFIL } from "@/data/portifolio";
import styles from "./Footer.module.css";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

const footerLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
      
        <div className={styles.brandGroup}>
          <p className={styles.brand}>
            RS<span className={styles.brandDot}>.</span>
          </p>
          <p className={styles.role}>
            {PERFIL.nome} · {PERFIL.cargo}
          </p>
          <p className={styles.city}>{PERFIL.cidade}</p>
        </div>

        <nav className={styles.links} aria-label="Links do rodapé">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
          <a
            href={PERFIL.urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
             <GithubLogoIcon size={24} weight="regular" />
          </a>
        </nav>
      </div>
    </footer>
  );
}