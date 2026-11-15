"use client";

import { useState } from "react";
import {
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  PaperPlaneRightIcon,
} from "@phosphor-icons/react/ssr";
import { PERFIL } from "@/data/portifolio";
import styles from "./contato.module.css";

export default function FormularioContato() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function gerarLinkMailto() {
    const assunto = encodeURIComponent(
      tema.trim() ? tema : `Contato via Portfólio - ${nome}`
    );
    const corpo = encodeURIComponent(
      `Olá Richard,\n\nMeu nome é ${nome}.\n\n${mensagem}\n\n(Enviado através do formulário de contato)`
    );
    return `mailto:${PERFIL.email}?subject=${assunto}&body=${corpo}`;
  }

  function aoEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nome.trim() || !tema.trim() || !mensagem.trim()) {
      return;
    }

    setEnviado(true);
    window.location.href = gerarLinkMailto();
  }

  function reiniciarFormulario() {
    setNome("");
    setTema("");
    setMensagem("");
    setEnviado(false);
  }

  return (
    <div className={styles.cardForm}>
      <div className={styles.formTopo}>
        <h2 className={styles.formTitulo}>Envie uma mensagem</h2>
        <p className={styles.formDescricao}>
          Preencha os campos abaixo para enviar diretamente para{" "}
          <strong>{PERFIL.email}</strong>.
        </p>
      </div>

      {enviado ? (
        <div className={styles.avisoSucesso} role="alert">
          <div className={styles.avisoTopo}>
            <CheckCircleIcon size={24} weight="bold" color="#123B2A" />
            <span>Pronto para envio!</span>
          </div>

          <p className={styles.avisoTexto}>
            Obrigado pelo contato, <strong>{nome}</strong>! Abrimos o seu
            aplicativo de e-mail com a mensagem endereçada para{" "}
            <strong>{PERFIL.email}</strong>.
          </p>

          <div className={styles.acoesAviso}>
            <a href={gerarLinkMailto()} className={styles.btnAvisoPrincipal}>
              <EnvelopeSimpleIcon size={18} weight="bold" />
              <span>Abrir no seu e-mail</span>
            </a>

            <button
              type="button"
              onClick={reiniciarFormulario}
              className={styles.btnNovaMensagem}
            >
              Enviar outra mensagem
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={aoEnviar} className={styles.formulario}>
          <div className={styles.campo}>
            <label htmlFor="nome" className={styles.label}>
              Seu nome *
            </label>
            <input
              id="nome"
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como prefere ser chamado?"
              className={styles.input}
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="tema" className={styles.label}>
              Tema *
            </label>
            <input
              id="tema"
              type="text"
              required
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Oportunidade, Parceria, Projeto..."
              className={styles.input}
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="mensagem" className={styles.label}>
              Mensagem *
            </label>
            <textarea
              id="mensagem"
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Escreva sobre a oportunidade, dúvida ou projeto..."
              className={styles.textarea}
            />
          </div>

          <button type="submit" className={styles.btnEnviar}>
            <span>Enviar mensagem</span>
            <PaperPlaneRightIcon size={18} weight="bold" />
          </button>
        </form>
      )}
    </div>
  );
}
