import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import ApiStatus from "./components/ApiStatus";
import { profile as staticProfile, experiences as staticExp, projects as staticProj } from "./data";
import type { Profile, Experience as ExpType, Project } from "./types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
type DataSource = "checking" | "api" | "static";

export default function App() {
  const [profile, setProfile] = useState<Profile | null>( staticProfile );
  const [experiences, setExperiences] = useState<ExpType[]>(staticExp);
  const [projects, setProjects] = useState<Project[]>(staticProj);
  const [dataSource, setDataSource] = useState<DataSource>("checking");

  useEffect(() => {
     const checkAndFetch = async () => {
      try {
        // 1. เช็คสถานะ backend ก่อนผ่าน /health
        const health = await fetch(`${API_URL}/health`, { signal: AbortSignal.timeout(5000) });
        if (!health.ok) throw new Error("health check failed");

        // 2. Backend ตอบสนอง → ดึงข้อมูลจริง
        const [profileRes, expRes, projRes] = await Promise.all([
          fetch(`${API_URL}/api/profile`),
          fetch(`${API_URL}/api/experiences`),
          fetch(`${API_URL}/api/projects`),
        ]);

        if (!profileRes.ok || !expRes.ok || !projRes.ok) throw new Error("data fetch failed");

        const [profileData, expData, projData] = await Promise.all([
          profileRes.json(),
          expRes.json(),
          projRes.json(),
        ]);

        setProfile(profileData);
        setExperiences(expData);
        setProjects(projData);
        setDataSource("api");

      } catch {
        // Backend ไม่ตอบสนอง → ใช้ static data ใน data.ts แทน
        setDataSource("static");
      }
    };

    checkAndFetch();
  }, []);

  return (
    <div className="app">
      <Nav name={profile?.name} />
      <ApiStatus source={dataSource} apiUrl={API_URL} />
      <Hero profile={profile} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact profile={profile} />
    </div>
  );
}