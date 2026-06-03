import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="mainNav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-brand">Teoría Social Contemporánea</div>
      <ul className="nav-links">
        <li>
          <a href="#presente">Presente</a>
        </li>
        <li>
          <a href="#imagenes">Imágenes</a>
        </li>
        <li>
          <a href="#futuro">Futuro</a>
        </li>
        <li>
          <a href="#ensayo">Ensayo</a>
        </li>
      </ul>
    </nav>
  );
}
