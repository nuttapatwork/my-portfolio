import { useEffect, useRef } from "react";
import type { Experience } from "../types";

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.15 }
    );
    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [experiences]);

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section__title">
          <span className="section__label">Career</span>
          Work Experience
        </h2>
        <div className="timeline">
          <div className="timeline__line" />
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="timeline__item fade-up"
              ref={el => { if (el) itemsRef.current[i] = el; }}
            >
              <div className="timeline__node" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">{exp.company}</p>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{exp.period}</span>
                    <span className="timeline__location">{exp.location}</span>
                  </div>
                </div>
                <p className="timeline__desc">{exp.description}</p>
                <div className="timeline__skills">
                  {exp.skills.map(s => (
                    <span key={s} className="skill-tag skill-tag--sm">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
