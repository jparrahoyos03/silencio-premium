import { useRef } from "react";

export default function Essay() {
  const wrapRef = useRef(null);

  return (
    <section className="section" id="ensayo">
      <div className="section-label">Ensayo</div>

      <div className="essay-wrap" ref={wrapRef}>
        <p>
          En Cali, en el año 2040, el silencio se volvió un servicio premium.
          Las universidades, empresas y plataformas prometieron una vida más
          eficiente: horarios inteligentes, asistentes emocionales, medición del
          sueño, productividad personalizada y espacios de concentración. La
          ciudad parece más organizada, pero sus habitantes están cada vez más
          solos. La conexión permanente dejó de ser una posibilidad y se
          convirtió en obligación.
        </p>

        <p className="pull">
          Este futuro no aparece de repente. Sus señales ya existen en el
          presente: estudiantes que responden mensajes a cualquier hora,
          trabajadores disponibles incluso en el descanso, personas reunidas
          físicamente pero separadas por pantallas, jóvenes agotados que
          administran su vida mediante aplicaciones.
        </p>

        <p>
          Foucault permite entender este escenario como una forma de
          subjetivación moderna. El poder ya no necesita imponerse solo desde
          afuera; cada persona aprende a vigilarse a sí misma. En 2040, los
          sujetos miden sus pasos, emociones, horas de sueño, rendimiento
          académico y productividad laboral. La disciplina se vuelve íntima:
          aparece en la muñeca, en el celular, en la agenda digital y en la
          culpa de no estar haciendo suficiente.
        </p>

        <p>
          Althusser ayuda a ver que las plataformas funcionan como nuevos
          aparatos ideológicos. Así como la escuela o la familia enseñaban
          reglas de obediencia y normalidad, las aplicaciones enseñan ahora qué
          significa ser exitoso: estar disponible, responder rápido, producir
          más, mostrarse estable y convertir el cansancio en responsabilidad
          individual. La ideología del rendimiento se presenta como bienestar.
        </p>

        <p>
          Bourdieu permite comprender que no todos habitan este futuro de la
          misma manera. Quienes poseen más capital económico y social pueden
          pagar retiros de desconexión, cabinas de silencio, terapia privada y
          tiempo libre. Para ellos, desconectarse es autocuidado. Para otros,
          desconectarse es perder oportunidades, empleo o reconocimiento. Así,
          el descanso deja de ser una experiencia común y se convierte en signo
          de clase.
        </p>

        <p className="pull">
          Las imágenes de este fotoensayo muestran tres momentos de esa ciudad
          futura: la conexión solitaria (disciplina íntima), el silencio como
          privilegio (distinción de clase) y la presencia ausente (reproducción
          de un vínculo que ya no encuentra su forma). En conjunto, revelan una
          paradoja: la sociedad más conectada de la historia puede ser también
          una de las más aisladas.
        </p>

        <p>
          Este futuro es ambivalente. Para algunos, significa comodidad y
          control. Para otros, significa agotamiento, vigilancia y soledad. La
          pregunta que queda abierta, y que Kant y Foucault comparten, es si la
          tecnología nos liberó o si aprendimos a obedecer de manera más
          eficiente.
        </p>
      </div>
    </section>
  );
}
