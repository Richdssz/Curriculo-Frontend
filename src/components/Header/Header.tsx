"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubLogoIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { PERFIL } from "@/data/portifolio";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);

  // Fecha o menu com a tecla Escape
  useEffect(() => {
    function tratarKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuAberto(false);
      }
    }
    window.addEventListener("keydown", tratarKeyDown);
    return () => window.removeEventListener("keydown", tratarKeyDown);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Monograma na esquerda */}
        <Link
          href="/"
          className="brandLogo"
          onClick={() => setMenuAberto(false)}
        >
          RS<span className="brandDot">.</span>
        </Link>

        {/* Menu Desktop */}
        <div className={styles.desktopNavGroup}>
          <nav className={styles.navDesktop} aria-label="Navegação principal">
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

        {/* Controles Mobile: GitHub + Botão Hambúrguer */}
        <div className={styles.mobileControls}>
          <a
            href={PERFIL.urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnIconeMobile}
            aria-label="Perfil no GitHub"
            title="Acessar GitHub"
          >
            <GithubLogoIcon size={22} weight="regular" />
          </a>

          <button
            type="button"
            className={styles.btnHamburger}
            onClick={() => setMenuAberto((prev) => !prev)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
          >
            {menuAberto ? (
              <XIcon size={24} weight="bold" />
            ) : (
              <ListIcon size={24} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {menuAberto && (
        <div
          id="menu-mobile"
          className={styles.menuMobile}
          role="dialog"
          aria-label="Menu de navegação mobile"
        >
          <nav className={styles.navMobile}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuAberto(false)}
                  className={
                    isActive
                      ? `${styles.linkMobile} ${styles.activeMobile}`
                      : styles.linkMobile
                  }
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
