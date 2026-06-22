import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import { profile as staticProfile, experiences as staticExp, projects as staticProj } from "./data";
import type { Profile, Experience as ExpType, Project } from "./types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function App() {
  const [profile, setProfile] = useState<Profile|null>(staticProfile);
  const [experiences, setExperiences] = useState<ExpType[]>(staticExp);
  const [projects, setProjects] = useState<Project[]>(staticProj);

  useEffect(() => {
    if (!API_URL) return;

    // 🛡️ สร้างฟังก์ชัน Helper เพื่อคัดกรองข้อมูลอย่างปลอดภัย
    const fetchData = async (endpoint: string, setter: (data: any) => void) => {
      try {
        const response = await fetch(`${API_URL}${endpoint}`);
        
        // 1. ดักจับกรณี Server ล่ม (500, 502, 404)
        if (!response.ok) {
          throw new Error(`Server error with status: ${response.status}`);
        }
        
        const data = await response.json();
        setter(data); // อัปเดตข้อมูลเมื่อมั่นใจว่าก้อนข้อมูลถูกต้อง
      } catch (error) {
        // 2. ถ้าล่ม ไม่ว่าจากเน็ตหลุด หรือ Server ยิง 500 จะตกมาที่นี่ทั้งหมด
        // ไม่ต้องสั่ง setter() ใดๆ เพื่อปล่อยให้ตัวแปรยึดค่า staticData ชุดเดิมที่เซ็ตไว้ตั้งแต่แรก
        console.error(`Failed to fetch ${endpoint}:`, error);
      }
    };

    // เรียกใช้งานแบบขนาน
    fetchData("/api/profile", setProfile);
    fetchData("/api/experiences", setExperiences);
    fetchData("/api/projects", setProjects);
  }, []);

  return (
    <div className="app">
      <Nav name={profile?.name} />
      <Hero profile={profile} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact profile={profile} />
    </div>
  );
}