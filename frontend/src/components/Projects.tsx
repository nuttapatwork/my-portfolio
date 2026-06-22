import { useEffect, useRef } from "react";
import type { Project } from "../types";

export default function Projects({ projects }: { projects: Project[] }) {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <h2 className="section__title">
          <span className="section__label">Work</span>
          Selected Projects
        </h2>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="project-card fade-up"
              ref={el => { if (el) itemsRef.current[i] = el; }}
            >
              <div className="project-card__number">0{i + 1}</div>
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tech">
                {p.tech.map(t => (
                  <span key={t} className="skill-tag skill-tag--sm">{t}</span>
                ))}
              </div>
              <div className="project-card__links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    GitHub ↗
                  </a>
                )}
                {p.url && (
                  <a href={p.url} target="_blank" rel="noreferrer" className="project-link project-link--primary">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
