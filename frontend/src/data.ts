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
    location: "Pathumthani, Thailand",
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
        skills: ["C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman"],
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
        skills: ["C#.net", "JavaScript", "bootstrap"],
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
//   {
//     id: "1",
//     name: "CloudMetrics Dashboard",
//     description: "Real-time infrastructure monitoring platform with 50+ integrations and custom alerting rules.",
//     tech: ["Go", "React", "InfluxDB", "Grafana", "WebSocket"],
//     github: "https://github.com/yourname/cloudmetrics",
//   },
//   {
//     id: "2",
//     name: "OrderFlow API",
//     description: "High-throughput order processing system handling 100K+ transactions per day with 99.9% uptime.",
//     tech: ["Go", "gRPC", "PostgreSQL", "Redis", "Kafka"],
//     github: "https://github.com/yourname/orderflow",
//   },
//   {
//     id: "3",
//     name: "DevPortal",
//     description: "Developer portal with API documentation, sandbox environment, and usage analytics.",
//     tech: ["React", "typeScript", "Next.js", "Prisma", "Stripe"],
//     url: "https://devportal.example.com",
//     github: "https://github.com/yourname/devportal",
//   },
];
