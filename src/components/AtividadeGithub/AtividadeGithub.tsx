"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowSquareOutIcon,
  CalendarBlankIcon,
  FireIcon,
  GitBranchIcon,
  GithubLogoIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { PERFIL } from "@/data/portifolio";
import styles from "./AtividadeGithub.module.css";

interface PerfilGithub {
  login: string;
  public_repos: number;
  followers: number;
  created_at: string;
  html_url: string;
}

interface DiaContribuicao {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface RespostaContribuicoes {
  total: Record<string, number>;
  contributions: DiaContribuicao[];
}

interface TooltipInfo {
  texto: string;
  x: number;
  y: number;
}

const MESES_PT = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

function formatarDataPtBr(dataIso: string) {
  const [ano, mes, dia] = dataIso.split("-").map(Number);
  const nomeMes = MESES_PT[(mes - 1) % 12] ?? "";
  return `${dia} de ${nomeMes} de ${ano}`;
}

export default function AtividadeGithub() {
  const [perfil, setPerfil] = useState<PerfilGithub | null>(null);
  const [contribuicoes, setContribuicoes] = useState<DiaContribuicao[]>([]);
  const [totalAno, setTotalAno] = useState<number>(0);
  const [tooltip, setTooltip] = useState<TooltipInfo | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const cardGraficoRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function buscarDadosGithub() {
      try {
        setCarregando(true);
        setErro(null);

        const anoAtual = new Date().getFullYear();

        const [resPerfil, resContrib] = await Promise.all([
          fetch("https://api.github.com/users/Richdssz"),
          fetch(
            `https://github-contributions-api.jogruber.de/v4/Richdssz?y=${anoAtual}`
          ),
        ]);

        if (!resPerfil.ok || !resContrib.ok) {
          throw new Error("Não foi possível carregar os dados do GitHub.");
        }

        const dadosPerfil: PerfilGithub = await resPerfil.json();
        const dadosContrib: RespostaContribuicoes = await resContrib.json();

        const inicioAnoIso = `${anoAtual}-01-01`;
        const hojeIso = new Date().toLocaleDateString("en-CA");
        const diasAteHoje = (dadosContrib.contributions ?? []).filter(
          (dia) => dia.date >= inicioAnoIso && dia.date <= hojeIso
        );

        setPerfil(dadosPerfil);
        setContribuicoes(diasAteHoje);
        setTotalAno(dadosContrib.total?.[String(anoAtual)] ?? 0);
      } catch {
        setErro("Não foi possível conectar ao GitHub no momento.");
      } finally {
        setCarregando(false);
      }
    }

    buscarDadosGithub();
  }, []);

  // Posiciona o scroll no final (dias mais recentes até hoje) ao carregar
  useEffect(() => {
    if (!carregando && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [carregando, contribuicoes.length]);

  // Organiza os dias até hoje em colunas de 7 dias (Dom a Sáb)
  const semanas = useMemo(() => {
    if (contribuicoes.length === 0) return [];

    const primeiroDiaSemana = new Date(
      `${contribuicoes[0].date}T12:00:00`
    ).getDay();

    const diasComEspaco: (DiaContribuicao | null)[] = [
      ...Array.from({ length: primeiroDiaSemana }, () => null),
      ...contribuicoes,
    ];

    const listaSemanas: (DiaContribuicao | null)[][] = [];
    for (let i = 0; i < diasComEspaco.length; i += 7) {
      listaSemanas.push(diasComEspaco.slice(i, i + 7));
    }

    return listaSemanas;
  }, [contribuicoes]);

  function mostrarTooltip(
    elemento: HTMLButtonElement,
    dia: DiaContribuicao
  ) {
    if (!cardGraficoRef.current) return;

    const cardRect = cardGraficoRef.current.getBoundingClientRect();
    const cellRect = elemento.getBoundingClientRect();

    const centroX = cellRect.left - cardRect.left + cellRect.width / 2;
    const topoY = cellRect.top - cardRect.top;

    const margemSegura = 115;
    const xLimitado = Math.max(
      margemSegura,
      Math.min(centroX, cardRect.width - margemSegura)
    );

    const textoContribuicoes =
      dia.count === 0
        ? "Nenhuma contribuição"
        : `${dia.count} ${
            dia.count === 1 ? "contribuição" : "contribuições"
          }`;

    setTooltip({
      texto: `${textoContribuicoes} em ${formatarDataPtBr(dia.date)}.`,
      x: xLimitado,
      y: topoY,
    });
  }

  if (carregando) {
    return (
      <div className={styles.estadoCaixa}>
        <p className={styles.estadoTexto}>
          Buscando atividade em tempo real no GitHub...
        </p>
      </div>
    );
  }

  if (erro || !perfil) {
    return (
      <div className={styles.estadoCaixa}>
        <p className={styles.estadoTexto}>
          {erro ?? "Dados indisponíveis no momento."}
        </p>
      </div>
    );
  }

  const anoInicio = new Date(perfil.created_at).getFullYear();
  const anoAtual = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.gridMetricas}>
        <div className={styles.cardMetrica}>
          <div className={styles.metricaTopo}>
            <FireIcon size={20} weight="duotone" color="#F0644F" />
            <span className={styles.metricaLabel}>
              Contribuições ({anoAtual})
            </span>
          </div>
          <strong className={styles.metricaValor}>
            {totalAno.toLocaleString("pt-BR")}
          </strong>
        </div>

        <div className={styles.cardMetrica}>
          <div className={styles.metricaTopo}>
            <GitBranchIcon size={20} weight="duotone" color="#F0644F" />
            <span className={styles.metricaLabel}>Repositórios públicos</span>
          </div>
          <strong className={styles.metricaValor}>{perfil.public_repos}</strong>
        </div>

        <div className={styles.cardMetrica}>
          <div className={styles.metricaTopo}>
            <UsersIcon size={20} weight="duotone" color="#F0644F" />
            <span className={styles.metricaLabel}>Seguidores</span>
          </div>
          <strong className={styles.metricaValor}>{perfil.followers}</strong>
        </div>

        <div className={styles.cardMetrica}>
          <div className={styles.metricaTopo}>
            <CalendarBlankIcon size={20} weight="duotone" color="#F0644F" />
            <span className={styles.metricaLabel}>No GitHub desde</span>
          </div>
          <strong className={styles.metricaValor}>{anoInicio}</strong>
        </div>
      </div>

      <div ref={cardGraficoRef} className={styles.cardGrafico}>
        {tooltip && (
          <div
            className={styles.tooltipFlutuante}
            style={{ left: tooltip.x, top: tooltip.y }}
            role="tooltip"
          >
            {tooltip.texto}
          </div>
        )}

        <div className={styles.graficoCabecalho}>
          <div className={styles.graficoTituloGrupo}>
            <GithubLogoIcon size={20} weight="bold" color="#123B2A" />
            <span className={styles.graficoTitulo}>
              {totalAno.toLocaleString("pt-BR")} contribuições em {anoAtual} (@
              {perfil.login})
            </span>
          </div>

          <a
            href={perfil.html_url || PERFIL.urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkPerfil}
          >
            <span>Ver perfil</span>
            <ArrowSquareOutIcon size={15} weight="bold" />
          </a>
        </div>

        <div
          ref={scrollRef}
          className={styles.graficoScroll}
          onScroll={() => setTooltip(null)}
        >
          <div
            className={styles.gradeSemanas}
            role="grid"
            aria-label="Calendário de contribuições até hoje"
          >
            {semanas.map((semana, idxSemana) => (
              <div key={idxSemana} className={styles.colunaSemana}>
                {semana.map((dia, idxDia) => {
                  if (!dia) {
                    return (
                      <span
                        key={`vazio-${idxSemana}-${idxDia}`}
                        className={styles.celulaVazia}
                        aria-hidden="true"
                      />
                    );
                  }

                  const textoAria = `${dia.count} ${
                    dia.count === 1 ? "contribuição" : "contribuições"
                  } em ${formatarDataPtBr(dia.date)}`;

                  return (
                    <button
                      key={dia.date}
                      type="button"
                      onMouseEnter={(e) => mostrarTooltip(e.currentTarget, dia)}
                      onMouseLeave={() => setTooltip(null)}
                      onClick={(e) => mostrarTooltip(e.currentTarget, dia)}
                      className={`${styles.celulaDia} ${styles[`nivel${dia.level}`]}`}
                      aria-label={textoAria}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rodapeGrafico}>
          <div className={styles.legenda} aria-hidden="true">
            <span className={styles.legendaTexto}>Menos</span>
            <span className={`${styles.legendaQuadrado} ${styles.nivel0}`} />
            <span className={`${styles.legendaQuadrado} ${styles.nivel1}`} />
            <span className={`${styles.legendaQuadrado} ${styles.nivel2}`} />
            <span className={`${styles.legendaQuadrado} ${styles.nivel3}`} />
            <span className={`${styles.legendaQuadrado} ${styles.nivel4}`} />
            <span className={styles.legendaTexto}>Mais</span>
          </div>
        </div>
      </div>
    </div>
  );
}
