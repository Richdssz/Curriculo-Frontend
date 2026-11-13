"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { PERFIL } from "@/data/portifolio";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();

    return (
    <header className={styles.header}>
      {/* 1. O inner é quem joga o RS. pra esquerda e o menu pra direita */}
      <div className={styles.inner}>

        {/* 1º Filho: Monograma na extrema esquerda */}
        <Link href="/" className="brandLogo">
          RS<span className="brandDot">.</span>
        </Link>

        {/* 2º Filho: Menu + GitHub na extrema direita */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <nav className={styles.nav}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={PERFIL.urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Perfil no GitHub"
            title="Acessar GitHub"
          >
            <GithubLogoIcon size={24} weight="regular" />
          </a>
        </div>

      </div>
    </header>
    )}