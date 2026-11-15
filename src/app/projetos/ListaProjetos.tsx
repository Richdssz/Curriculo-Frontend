"use client";

import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  ArrowSquareOutIcon,
  GithubLogoIcon,
  LockIcon,
  XIcon,
} from "@phosphor-icons/react/ssr";
import LogoTecnologia from "@/components/LogoTecnologia/LogoTecnologia";
import { PROJETOS, type ItemProjeto, type VisibilidadeProjeto } from "@/data/portifolio";
import styles from "./projetos.module.css";

type FiltroTipo = "todos" | VisibilidadeProjeto;

const ROTULOS_STATUS = {
  concluido: "Concluído",
  em_desenvolvimento: "Em desenvolvimento",
  ativo: "Ativo",
};

export default function ListaProjetos() {
  const [filtro, setFiltro] = useState<FiltroTipo>("todos");
  const [projetoModal, setProjetoModal] = useState<ItemProjeto | null>(null);

  // Trava a rolagem da página quando o modal estiver aberto
  useEffect(() => {
    function aoPressionarTecla(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setProjetoModal(null);
      }
    }

    if (projetoModal) {
      window.addEventListener("keydown", aoPressionarTecla);
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    return () => {
      window.removeEventListener("keydown", aoPressionarTecla);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [projetoModal]);

  const contagem = {
    todos: PROJETOS.length,
    publico: PROJETOS.filter((p) => p.visibilidade === "publico").length,
    privado: PROJETOS.filter((p) => p.visibilidade === "privado").length,
  };

  const projetosFiltrados = PROJETOS.filter((projeto) => {
    if (filtro === "todos") return true;
    return projeto.visibilidade === filtro;
  });

  return (
    <>
      {/* Pílulas de Filtro */}
      <div className={styles.filtros} role="tablist" aria-label="Filtro de projetos">
        <button
          type="button"
          onClick={() => setFiltro("todos")}
          className={`${styles.btnFiltro} ${filtro === "todos" ? styles.btnFiltroAtivo : ""}`}
        >
          <span>Todos</span>
          <span className={styles.badgeContador}>{contagem.todos}</span>
        </button>

        <button
          type="button"
          onClick={() => setFiltro("publico")}
          className={`${styles.btnFiltro} ${filtro === "publico" ? styles.btnFiltroAtivo : ""}`}
        >
          <span>Públicos</span>
          <span className={styles.badgeContador}>{contagem.publico}</span>
        </button>

        <button
          type="button"
          onClick={() => setFiltro("privado")}
          className={`${styles.btnFiltro} ${filtro === "privado" ? styles.btnFiltroAtivo : ""}`}
        >
          <span>Privados</span>
          <span className={styles.badgeContador}>{contagem.privado}</span>
        </button>
      </div>

      {/* Grade de Cards */}
      <div className={styles.gridProjetos}>
        {projetosFiltrados.map((projeto) => (
          <article key={projeto.id} className={styles.card}>
            <div className={styles.cardCorpo}>
              <div className={styles.cardTopo}>
                <div className={styles.badges}>
                  <span
                    className={`${styles.badgeVisibilidade} ${
                      projeto.visibilidade === "publico"
                        ? styles.badgePublico
                        : styles.badgePrivado
                    }`}
                  >
                    {projeto.visibilidade === "publico" ? "Público" : "Privado"}
                  </span>
                  <span className={styles.badgeStatus}>
                    {ROTULOS_STATUS[projeto.status]}
                  </span>
                </div>

                <div className={styles.acoesRapidas}>
                  {projeto.urlGithub && (
                    <a
                      href={projeto.urlGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnAcaoRapida}
                      title="Ver código no GitHub"
                      aria-label={`Ver código de ${projeto.titulo} no GitHub`}
                    >
                      <GithubLogoIcon size={16} weight="bold" />
                    </a>
                  )}
                  {projeto.urlAcesso && (
                    <a
                      href={projeto.urlAcesso}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnAcaoRapida}
                      title="Acessar projeto"
                      aria-label={`Acessar projeto ${projeto.titulo}`}
                    >
                      <ArrowSquareOutIcon size={16} weight="bold" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardTitulo}>{projeto.titulo}</h3>
              <p className={styles.cardResumo}>{projeto.resumo}</p>

              <div className={styles.tags}>
                {projeto.tecnologias.map((tec) => (
                  <span key={tec} className={styles.tag}>
                    <LogoTecnologia nome={tec} tamanho={13} />
                    <span>{tec}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.cardRodape}>
              <button
                type="button"
                onClick={() => setProjetoModal(projeto)}
                className={styles.btnDetalhes}
              >
                <span>Ver detalhes</span>
                <ArrowRightIcon size={14} weight="bold" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal / Popup de Detalhes */}
      {projetoModal && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setProjetoModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-titulo"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalCabecalho}>
              <div>
                <div className={styles.badges} style={{ marginBottom: "0.4rem" }}>
                  <span
                    className={`${styles.badgeVisibilidade} ${
                      projetoModal.visibilidade === "publico"
                        ? styles.badgePublico
                        : styles.badgePrivado
                    }`}
                  >
                    {projetoModal.visibilidade === "publico" ? "Público" : "Privado"}
                  </span>
                  <span className={styles.badgeStatus}>
                    {ROTULOS_STATUS[projetoModal.status]}
                  </span>
                </div>
                <h2 id="modal-titulo" className={styles.modalTitulo}>
                  {projetoModal.titulo}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setProjetoModal(null)}
                className={styles.btnFechar}
                aria-label="Fechar modal"
              >
                <XIcon size={18} weight="bold" />
              </button>
            </div>

            <div className={styles.modalCorpo}>
              <div className={styles.blocoModal}>
                <span className={styles.rotuloModal}>Objetivo</span>
                <p className={styles.textoModal}>{projetoModal.objetivo}</p>
              </div>

              <div className={styles.blocoModal}>
                <span className={styles.rotuloModal}>Minha contribuição</span>
                <p className={styles.textoModal}>{projetoModal.contribuicao}</p>
              </div>

              <div className={styles.blocoModal}>
                <span className={styles.rotuloModal}>Tecnologias & Tópicos</span>
                <div className={styles.tags} style={{ marginTop: "0.3rem" }}>
                  {projetoModal.tecnologias.map((tec) => (
                    <span key={tec} className={styles.tag}>
                      <LogoTecnologia nome={tec} tamanho={13} />
                      <span>{tec}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.blocoModal}>
                <span className={styles.rotuloModal}>Disponibilidade & Código</span>
                <p className={styles.textoModal}>{projetoModal.notaAcesso}</p>
              </div>
            </div>

            <div className={styles.modalRodape}>
              {projetoModal.urlGithub && (
                <a
                  href={projetoModal.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnModalSecundario}
                >
                  <GithubLogoIcon size={18} weight="bold" />
                  <span>Ver no GitHub</span>
                </a>
              )}

              {projetoModal.urlAcesso && (
                <a
                  href={projetoModal.urlAcesso}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnModalPrincipal}
                >
                  <span>Acessar agora</span>
                  <ArrowSquareOutIcon size={18} weight="bold" />
                </a>
              )}

              {!projetoModal.urlAcesso && !projetoModal.urlGithub && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.85rem",
                    color: "var(--carvao)",
                    opacity: 0.75,
                  }}
                >
                  <LockIcon size={16} />
                  <span>Código & Acesso Privados</span>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
