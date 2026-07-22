import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Copy, CopyCheck } from "lucide-react";
import PreviewWindow from "../PreviewWindow";
import cleancodeDark from "../../data/cleancodeDark";
import styles from "./style.module.css";

export default function ComponentActions({ item, previewSmall = true }) {
  const [activeView, setActiveView] = useState("preview");
  const [codigo, setCodigo] = useState("jsx");
  const [copiado, setCopiado] = useState(false);

  const codigoAtual =
    codigo === "jsx"
      ? item?.codigos?.jsx || ""
      : item?.codigos?.cssModule || "";

  function copiarCodigo() {
    navigator.clipboard.writeText(codigoAtual);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1200);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        <button
          type="button"
          className={activeView === "preview" ? styles.activeAction : ""}
          onClick={() => setActiveView("preview")}
        >
          Preview
        </button>

        <button
          type="button"
          className={activeView === "code" ? styles.activeAction : ""}
          onClick={() => setActiveView("code")}
        >
          Ver código
        </button>
      </div>

      {activeView === "preview" && (
        <div className={styles.previewArea}>
          <PreviewWindow small={previewSmall}>
            <item.Component />
          </PreviewWindow>
        </div>
      )}

      {activeView === "code" && (
        <div className={styles.codeArea}>
          <div className={styles.tabs}>
            <button
              className={codigo === "jsx" ? styles.active : ""}
              onClick={() => setCodigo("jsx")}
            >
              JSX
            </button>
            <button
              className={codigo === "cssModule" ? styles.active : ""}
              onClick={() => setCodigo("cssModule")}
            >
              CSS Module
            </button>

            <button className={styles.copyBtn} onClick={copiarCodigo}>
              {copiado ? <CopyCheck size={16} /> : <Copy size={16} />}
            </button>
          </div>

          <div className={styles.codeBlock}>
            <SyntaxHighlighter
              language={codigo === "jsx" ? "jsx" : "css"}
              style={cleancodeDark}
              showLineNumbers
            >
              {codigoAtual}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}
