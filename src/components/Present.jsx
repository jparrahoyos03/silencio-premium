export default function Present() {
  return (
    <section className="section" id="presente">
      <div className="section-label">1 · Leer el presente</div>

      <p
        style={{
          maxWidth: "62ch",
          fontStyle: "italic",
          color: "var(--ice)",
          fontSize: "1.1rem",
          lineHeight: 2,
          marginBottom: "3rem",
        }}
      >
        Antes de imaginar el futuro, hay que entender qué está pasando ahora. El
        fenómeno ocurre aquí, en la vida cotidiana de quienes estudian y
        trabajan en Cali.
      </p>

      <div className="present-grid">
        <div className="present-cell">
          <h3>El fenómeno</h3>
          <p>
            La transformación de los <em>vínculos humanos</em> por el
            capitalismo digital, la hiperproductividad y la vida mediada por
            plataformas. La promesa: conexión total. El resultado: nuevas formas
            de aislamiento, vigilancia y desigualdad.
          </p>
        </div>
        <div className="present-cell">
          <h3>Territorios</h3>
          <p>
            Campus universitarios, cafeterías y bibliotecas de Cali. Transporte
            público, habitaciones individuales, centros comerciales, coworkings.
            Espacios donde <em>estar disponible se volvió norma</em>, no
            excepción.
          </p>
        </div>
        <div className="present-cell">
          <h3>Actores</h3>
          <p>
            Estudiantes universitarios, docentes evaluados por métricas,
            trabajadores remotos, repartidores de plataforma. También: empresas
            tecnológicas, aplicaciones, redes sociales, universidades y{" "}
            <em>familias fragmentadas</em>.
          </p>
        </div>
        <div className="present-cell">
          <h3>Tensión central</h3>
          <p>
            Responder rápido, producir más, dormir menos y mostrarse
            emocionalmente estable son prácticas{" "}
            <em>valoradas como responsabilidad</em>. El problema no es la
            tecnología: es el modo en que organiza el tiempo, el cuerpo y el
            deseo.
          </p>
        </div>
      </div>

      <div className="tension-bar">
        ¿Qué pasa cuando la sociedad convierte el descanso, el silencio y la
        intimidad en servicios premium, accesibles solo para quienes pueden
        pagarlos?
      </div>
    </section>
  );
}
