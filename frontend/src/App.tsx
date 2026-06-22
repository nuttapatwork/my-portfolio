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
  const [profile, setProfile] = useState<Profile>(staticProfile);
  const [experiences, setExperiences] = useState<ExpType[]>(staticExp);
  const [projects, setProjects] = useState<Project[]>(staticProj);

  useEffect(() => {
    if (!API_URL) return;
    fetch(`${API_URL}/api/profile`).then(r => r.json()).then(setProfile).catch(()=>{});
    fetch(`${API_URL}/api/experiences`).then(r => r.json()).then(setExperiences).catch(()=>{});
    fetch(`${API_URL}/api/projects`).then(r => r.json()).then(setProjects).catch(()=>{});
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
