import { useEffect, useRef } from "react";

export default function Closing() {
  const quoteRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle("visible", e.isIntersecting);
        });
      },
      { threshold: 0.12 },
    );
    [quoteRef.current, infoRef.current].forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="closing">
      <div className="closing-glow"></div>
      <blockquote id="closingQ" ref={quoteRef}>
        "La conexión permanente no garantiza comunidad."
      </blockquote>
      <div className="closing-info" id="closingI" ref={infoRef}>
        Silencio Premium · Fotoensayo · Teoría Social
        <br />
        Cali, Colombia
        <br />
        Foucault · Althusser · Bourdieu · Kant
        <br />
        <br />
        <br />
        <div className="closing-author"> By: Juan Camilo Parra Hoyos</div>
      </div>
      <button
        type="button"
        className="closing-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Volver al inicio
      </button>
    </section>
  );
}
