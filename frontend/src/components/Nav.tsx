import { useEffect, useState } from "react";

export default function Nav({ name }: { name?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <span className="nav__logo">{name?.split(" ")[0] ?? "Portfolio"}</span>
      <div className="nav__links">
        {["Experience", "Projects", "Contact"].map(s => (
          <a key={s} href={`#${s.toLowerCase()}`} className="nav__link">{s}</a>
        ))}
      </div>
    </nav>
  );
}
