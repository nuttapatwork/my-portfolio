import type { Profile, Experience, Project } from "./types";

// ============================================================
//  ✏️  แก้ไขข้อมูลของคุณที่นี่
// ============================================================

export const profile: Profile = {
    image: "https://avatars.githubusercontent.com/u/186155705?s=400&u=525948f23f9d5551f5f8b685a652cfc456f53899&v=4",
    name: "Nuttapat Tanatummathat",               // ← ชื่อของคุณ
    title: "FULL-STACK DEVELOPER",
    bio: "Enterprise Full-Stack Developer with 3+ years of hands-on experience designing and delivering mission-critical systems across industrial, laboratory, and gaming infrastructure domains. Proven expertise integrating IoT hardware (RFID, LPR, IP Cameras) with enterprise-grade web solutions. Consistently ensures 100% data integrity in high-stakes production environments while optimizing backend performance and automating complex workflows.",
    email: "nuttapat.work@gmail.com",
    phone: "0897724270",
    linkedin: "https://www.linkedin.com/in/nuttapat-tanatummathat-22b2ab320/",
    github: "https://github.com/nuttapatwork",
    cvUrl: "https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/cv/Nuttapat Tanatummathat_ENG_CV_Fullstack.pdf",
    location: "Pathumthani, Thailand (Static)",
    skills: [`Frontend : React, Vue, Css, Angular, Laravel, Bootstrap`,
        `Backend : TypeScript, Node.js, C#.Net, VB.Net, C, C++, JavaScript, Java, Python, Golang, Php, Restful API`,
        `Databases : SQL Server, Oracle Database, MySQL, Firebase, SQLite`,
        `Tools : Git, GitHub, Sourcetree, Ai, Docker, Postman, RDLC Reports, Crystal Reports, Power Bi`],
};

export const experiences: Experience[] = [
    {
        id: "1",
        company: "Hui’s braised duck noodle",
        role: "Restaurant Operations Assistant",
        period: "Dec 2025  – Present",
        description: `• Managed table turnover and food service efficiently in a high-volume, fast-paced environment to minimize customer wait times.
        • Coordinated closely with the kitchen staff to ensure seamless communication and timely delivery of orders.
        `,
        skills: ["Table Management & Serving", "Menu Knowledge", "Food Safety & Hygiene", "Effective Communication", "Anticipation of Needs", "Emotional Intelligence & Patience", "Problem Solving", "Service Mind", "Teamwork", "Time Management"],
        location: "Pathumthani, Thailand",
        type: "Full-time",
    },
    {
        id: "2",
        company: "THEO Engineering Co., Ltd.",
        role: "Full Stack Developer",
        period: "Aug 2024 – Nov 2025",
        description: `• Architected industrial weighbridge systems with real-time transaction processing and 100% data integrity.
        • Developed automated vehicle authentication using LPR, RFid, and IoT integration in production environments.
        • Optimized backend APIs and SQL queries, significantly enhancing system response time and reliability.
        • Implemented security best practices for hardware - software integration and system stability. 
        `,
        skills: ["C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"],
        location: "Bangkok, Thailand",
        type: "Full-time",
    },
    {
        id: "3",
        company: "Independent Contract - Game Infrastructure",
        role: "Technical System Administrator",
        period: "Aug 2023 – Jul 2024",
        description: `• Administered SQL databases and managed game assets exceeding 30GB, ensuring data integrity enforcement and user activity tracking at scale.
        • Engineered custom Lua scripts and event - driven logic to optimize game system mechanics, improving overall platform performance.
        • Collaborated closely with senior administration to deliver Tier 1 & 2 technical support, resolving complex user - facing issues.
        `,
        skills: ["Rua", "C", "C++", "GRF Editor", "Notepad++"],
        location: "Remote",
        type: "Full-time",
    },
    {
        id: "4",
        company: "SGS THAILAND LIMITED",
        role: "Lab System Developer",
        period: "Aug 2022 – Jul 2023",
        description: `• Developed S-LORD (Enterprise LMS), automating scientific calculations to eliminate manual errors.
        • Created data visualization and reporting modules for analytical validation and operational efficiency.
        • Translated complex laboratory workflows into scalable software architecture through cross - functional collaboration.
        `,
        skills: ["C#.net", "JavaScript", "bootstrap", "RDLC Reports", "Oracle Database"],
        location: "Bangkok, Thailand",
        type: "Full-time",
    },
    {
        id: "5",
        company: "GeniusSoft Co., Ltd.",
        role: "Full-Stack Developer Internship",
        period: "Nov 2021  – Mar 2022",
        description: `• Developed full-stack corporate and E-commerce websites using WordPress, WooCommerce, and modern web tools following professional UX/UI standards.
        • Customized E - commerce workflows, including product catalogs, shopping cart logic, and secure user authentication through WooCommerce ecosystem integration.
        `,
        skills: ["wordpress", "WooCommerce", "css"],
        location: "Bangkok, Thailand",
        type: "Full-time",
    },
];

export const projects: Project[] = [
    {
        id: "1",
        name: "S-LORD (Laboratory Management System)",
        description: "Report",
        tech: ["C#.net", "JavaScript", "bootstrap", "RDLC Report", "Oracle Database"],
        url: "https://drive.google.com/drive/folders/1doHkW8qxNa_C4icTes-RwGzEO561VKQf?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
        github: "https://github.com/nuttapatwork",
        images: ["https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/s-lord-img/Screenshot%202026-06-23%20004232.png?raw=true",
            "https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/s-lord-img/Screenshot%202026-06-23%20004314.png?raw=true",
            "https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/s-lord-img/WorksheetSugar5516794.pdf.png?raw=true",
        ], // URL ลิงก์รูปภาพ
    },
    {
        id: "2",
        name: "GuardianIndustryRayong",
        description: "Report",
        tech: ["C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"],
        url: "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
        github: "https://github.com/nuttapatwork",
        images: ["https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/GuardianIndustryRayong-img/IMG_5702.jpg?raw=true",
            "https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/GuardianIndustryRayong-img/IMG_5704.jpg?raw=true",
            "https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/GuardianIndustryRayong-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202024-10-08%20164532.png?raw=true",
        ], // URL ลิงก์รูปภาพ
    },
    {
        id: "3",
        name: "IngredionKalasin_SoilWeight",
        description: "Report",
        tech: ["C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"],
        url: "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
        github: "https://github.com/nuttapatwork",
        images: ["https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/IngredionKalasin_SoilWeight-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202025-04-23%20101258.png?raw=true",
        ], // URL ลิงก์รูปภาพ
    },
    {
        id: "4",
        name: "SCGP",
        description: "Report",
        tech: ["C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"],
        url: "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
        github: "https://github.com/nuttapatwork",
        images: ["https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/scgp-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202025-03-24%20172318.png?raw=true",
            "https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/scgp-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20messageImage_1727167661793.jpg?raw=true",
        ], // URL ลิงก์รูปภาพ
    },
    {
        id: "5",
        name: "TruckWeight",
        description: "Report",
        tech: ["C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"],
        url: "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
        github: "https://github.com/nuttapatwork",
        images: ["https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/TruckWeight-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202025-03-21%20144304.png?raw=true",
            "https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/TruckWeight-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202025-04-25%20085605.png?raw=true",
        ], // URL ลิงก์รูปภาพ
    },
    {
        id: "6",
        name: "WeightInd2",
        description: "Report",
        tech: ["C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"],
        url: "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
        github: "https://github.com/nuttapatwork",
        images: ["https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/WeightInd2-img/IMG_5751.jpg?raw=true",
            "https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/WeightInd2-img/IMG_7630.jpg?raw=true",
        ], // URL ลิงก์รูปภาพ
    },
];
