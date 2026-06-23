import type { Profile } from "../types";

export default function Hero({ profile }: { profile: Profile | null }) {
  if (!profile) return <section className="hero"><div className="hero__loader" /></section>;

  return (
    <section className="hero" id="hero">
      {/* Background Orbs */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      {/* Main Container แยกเป็น 2 ฝั่ง */}
      <div className="hero__container">
        
        {/* ฝั่งที่ 1: ข้อความและปุ่ม Call to Action */}
        <div className="hero__text-side">
          <p className="hero__eyebrow">
            <span className="hero__dot" />
            {profile.location}
          </p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__title">
            {/* ลูกเล่น: ไฮไลต์คำว่า Full-Stack ให้เด่นขึ้น */}
            <span>{profile.title.split(" ")[0]}</span>{" "}
            <span className="text-gradient">{profile.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="hero__bio">{profile.bio}</p>
          
          <div className="hero__skills">
            {profile.skills.map((s, index) => (
              <span 
                key={s} 
                className="skill-tag"
                style={{ animationDelay: `${index * 0.1}s` }} 
              >
                {s}
              </span>
            ))}
          </div>
          
          <div className="hero__cta">
            <a href="#experience" className="btn btn--primary">View Experience</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
              GitHub ↗
            </a>
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--cv"
                download
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:"6px"}}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            )}
          </div>
        </div>

        {/* ฝั่งที่ 2: รูปโปรไฟล์พร้อมลูกเล่นการ์ดและแสงด้านหลัง */}
        {profile.image && (
          <div className="hero__visual-side">
            <div className="hero__image-wrapper">
              <div className="hero__image-glow" />
              <div className="hero__image-card">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="hero__image" 
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}