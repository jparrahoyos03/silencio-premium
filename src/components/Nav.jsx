import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav id="mainNav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-brand">Teoría Social Contemporánea</div>
      <button
        type="button"
        className={`nav-toggle ${open ? "open" : ""}`}
        aria-label="Menú"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a href="#presente" onClick={close}>
            Presente
          </a>
        </li>
        <li>
          <a href="#imagenes" onClick={close}>
            Imágenes
          </a>
        </li>
        <li>
          <a href="#futuro" onClick={close}>
            Futuro
          </a>
        </li>
        <li>
          <a href="#ensayo" onClick={close}>
            Ensayo
          </a>
        </li>
      </ul>
    </nav>
  );
}
