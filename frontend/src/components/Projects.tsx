import { useEffect, useRef, useState } from "react";
import type { Project } from "../types";

export default function Projects({ projects }: { projects: Project[] }) {
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
            <ProjectCardItem
              key={p.id}
              project={p}
              index={i}
              itemsRef={itemsRef}
              setActiveImage={setActiveImage}
            />
          ))}
        </div>
      </div>

      {/* 🖼️ หน้าต่างป๊อปอัปดูรูปภาพขนาดเต็ม (Lightbox) */}
      {activeImage && (
        <div 
          className="image-modal" 
          onClick={() => setActiveImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(10, 10, 12, 0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999999,
            cursor: "zoom-out"
          }}
        >
          <div 
            className="image-modal__close"
            style={{
              position: "absolute",
              top: "20px",
              right: "35px",
              color: "#ffffff",
              fontSize: "44px",
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            &times;
          </div>
          <img 
            src={activeImage} 
            alt="Enlarged view" 
            className="image-modal__content" 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "85%",
              objectFit: "contain",
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.6)"
            }}
          />
        </div>
      )}
    </section>
  );
}

/* ============================================================
   📦 Component ย่อยสำหรับการ์ดแต่ละใบ (ช่วยให้เก็บ State แยกกันได้)
   ============================================================ */
function ProjectCardItem({ 
  project, 
  index, 
  itemsRef, 
  setActiveImage 
}: { 
  project: Project; 
  index: number; 
  itemsRef: React.MutableRefObject<HTMLDivElement[]>; 
  setActiveImage: (url: string | null) => void;
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.images) {
      setCurrentImgIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.images) {
      setCurrentImgIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return (
    <div
      className="project-card fade-up"
      ref={el => { if (el) itemsRef.current[index] = el; }}
    >
      {project.images && project.images.length > 0 && (
        /* 📦 เปลี่ยนชื่อคลาสกล่องนอกสุด เพื่อล็อกสัดส่วน 16:9 และซ่อนรูปส่วนเกิน */
        <div className="project-card__slider-container">
          
          {/* 🚂 แทร็กสไลด์แนวนอน - ใช้ Inline Style ควบคุมการเลื่อนด้วยการขยับแกน X */}
          <div 
            className="project-card__slider-track"
            style={{
              transform: `translateX(-${currentImgIndex * 100}%)`
            }}
          >
            {project.images?.map((imgUrl, imgIndex) => (
              <div 
                key={imgIndex} 
                className="project-card__img-slide"
                onClick={() => setActiveImage(imgUrl)} // คลิกที่รูปไหน ก็เปิดรูปเต็มของรูปนั้น
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={imgUrl}
                  alt={`${project.name} screenshot ${imgIndex + 1}`}
                  className="project-card__img"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = "0.3";
                  }}
                />
                <div className="project-card__zoom-hint">🔍 คลิกเพื่อขยายดูรูปเต็ม</div>
              </div>
            ))}
          </div>

          {/* 🏹 ปุ่มควบคุมลูกศรซ้าย-ขวา */}
          {project.images.length > 1 && (
            <>
              <button className="slider-btn slider-btn--prev" onClick={prevImage} aria-label="Previous image">
                &#10094;
              </button>
              <button className="slider-btn slider-btn--next" onClick={nextImage} aria-label="Next image">
                &#10095;
              </button>
              
              <div className="slider-indicator">
                {currentImgIndex + 1} / {project.images.length}
              </div>
            </>
          )}

        </div>
      )}

      <div className="project-card__number">0{index + 1}</div>
      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__tech">
        {project.tech.map(t => (
          <span key={t} className="skill-tag skill-tag--sm">{t}</span>
        ))}
      </div>
      <div className="project-card__links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
            GitHub ↗
          </a>
        )}
        {project.url && (
          <a href={project.url} target="_blank" rel="noreferrer" className="project-link project-link--primary">
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );

}
