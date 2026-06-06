import PhotoFrame from "./PhotoFrame.jsx";
import foto1 from "../assets/foto-1.webp";
import foto2 from "../assets/foto-2.webp";
import foto3 from "../assets/foto-3.webp";

export default function PhotoSeries() {
  return (
    <section style={{ padding: "5rem 0 0" }} id="imagenes">
      <div style={{ padding: "0 6vw 4rem" }}>
        <div className="section-label">2 · Serie fotográfica</div>
        <p
          style={{
            maxWidth: "54ch",
            color: "var(--ice)",
            fontStyle: "italic",
            fontSize: "1.05rem",
            lineHeight: 2,
          }}
        >
          Tres imágenes. Una lógica común: pantallas, aislamiento, luz
          artificial, espacios fríos. Un elemento recurrente une la serie: la
          luz de pantalla como sustituto de compañía.
        </p>
      </div>

      {/* FOTO 1 */}
      <div className="photo-entry">
        <PhotoFrame frameClass="ph-1" alt="Conectado" image={foto1}>
          <div className="ph-screen"></div>
          <div className="ph-silhouette"></div>
        </PhotoFrame>
        <div className="photo-text">
          <div className="photo-n">Imagen 01 — Foucault / Althusser</div>
          <h2 className="photo-title">Conectado</h2>
          <p className="photo-poem">
            La pantalla ilumina el rostro
            <br />
            pero no produce compañía.
            <br />
            Estar disponible todo el tiempo
            <br />
            es otra forma de estar solo.
          </p>
          <div className="photo-function">
            <p className="photo-function-text">
              Muestra que la{" "}
              <strong>conexión tecnológica no equivale a comunidad</strong>.
              Abre la serie estableciendo que la soledad del 2040 no nace de la
              ausencia de tecnología sino de su exceso. La luz de la pantalla
              como único foco visual refuerza la idea foucaultiana de disciplina
              íntima: el sujeto vigilado por su propio dispositivo.
            </p>
          </div>
          <p className="photo-caption">
            "La pantalla ilumina el rostro, pero no produce compañía."
            <br />
            <em>Concepto:</em> Autovigilancia (Foucault) · Aparato ideológico
            (Althusser)
          </p>
        </div>
      </div>

      {/* FOTO 2 */}
      <div className="photo-entry rev">
        <PhotoFrame frameClass="ph-2" alt="Silencio Premium" image={foto2}>
          <div className="ph-sign">
            <p>Zona de acceso restringido</p>
            <h3>
              SILENCIO
              <br />
              PREMIUM
            </h3>
            <span>plan mensual · $299.000 COP</span>
          </div>
        </PhotoFrame>
        <div className="photo-text">
          <div className="photo-n">Imagen 02 — Bourdieu</div>
          <h2 className="photo-title">Silencio Premium</h2>
          <p className="photo-poem">
            En 2040, descansar no es detenerse:
            <br />
            es pagar.
            <br />
            El silencio tiene precio
            <br />y no todos pueden comprarlo.
          </p>
          <div className="photo-function">
            <p className="photo-function-text">
              Muestra que{" "}
              <strong>el descanso se volvió mercancía y privilegio</strong>. Es
              la imagen más directamente crítica: el cartel "Silencio Premium"
              hace visible lo que el lenguaje del bienestar oculta — que el
              autocuidado tiene precio de clase. Contrasta la promesa del
              bienestar con la realidad de la distinción social (Bourdieu).
            </p>
          </div>
          <p className="photo-caption">
            "En 2040, descansar no es detenerse: es pagar."
            <br />
            <em>Concepto:</em> Capital / Distinción social (Bourdieu) · Habitus
            de clase
          </p>
        </div>
      </div>

      {/* FOTO 3 */}
      <div className="photo-entry">
        <PhotoFrame frameClass="ph-3" alt="Presencia ausente" image={foto3}>
          <div className="ph-fig">
            <div className="ph-fig-head"></div>
            <div className="ph-fig-phone"></div>
          </div>
          <div className="ph-fig">
            <div className="ph-fig-head"></div>
            <div className="ph-fig-phone"></div>
          </div>
          <div className="ph-fig">
            <div className="ph-fig-head"></div>
            <div className="ph-fig-phone"></div>
          </div>
        </PhotoFrame>
        <div className="photo-text">
          <div className="photo-n">Imagen 03 — Foucault / Althusser</div>
          <h2 className="photo-title">Presencia Ausente</h2>
          <p className="photo-poem">
            Tres cuerpos en la misma mesa.
            <br />
            Tres pantallas distintas.
            <br />
            Ninguna mirada.
            <br />
            Estar juntos dejó de significar encontrarse.
          </p>
          <div className="photo-function">
            <p className="photo-function-text">
              Cierra la serie mostrando que{" "}
              <strong>la cercanía física no garantiza vínculo social</strong>.
              Es la consecuencia colectiva de lo que la imagen 1 mostraba en
              soledad. Revela que la reproducción de estas prácticas (Althusser)
              ocurre sin que nadie lo ordene: se aprende sola, interacción tras
              interacción.
            </p>
          </div>
          <p className="photo-caption">
            "Estar juntos dejó de significar encontrarse."
            <br />
            <em>Concepto:</em> Subjetivación moderna (Foucault) · Reproducción
            de prácticas (Althusser)
          </p>
        </div>
      </div>
    </section>
  );
}
