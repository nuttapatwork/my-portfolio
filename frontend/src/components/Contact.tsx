import type { Profile } from "../types";

export default function Contact({ profile }: { profile: Profile | null }) {
  return (
    <section className="section" id="contact">
      <div className="container container--narrow">
        <h2 className="section__title">
          <span className="section__label">Connect</span>
          Get In Touch
        </h2>
        <p className="contact__lead">
          I'm always open to discussing new opportunities.
        </p>
        <div className="contact__links">
          {profile?.email && (
            <a href={`mailto:${profile.email}`} className="contact__item">
              <span className="contact__icon">✉</span>
              <span>{profile.email}</span>
            </a>
          )}
          {profile?.phone && (
            <a href={`tel:${profile.phone}`} className="contact__item">
              <span className="contact__icon">📞</span>
              <span>{profile.phone}</span>
            </a>
          )}
          {profile?.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__item">
              <span className="contact__icon">in</span>
              <span>LinkedIn</span>
            </a>
          )}
          {profile?.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact__item">
              <span className="contact__icon">⌥</span>
              <span>GitHub</span>
            </a>
          )}
        </div>
        <p className="contact__footer">
          Designed & built with React + Go · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
