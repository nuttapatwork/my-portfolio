package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/rs/cors"
)

type Experience struct {
	ID          string   `json:"id"`
	Company     string   `json:"company"`
	Role        string   `json:"role"`
	Period      string   `json:"period"`
	Description string   `json:"description"`
	Skills      []string `json:"skills"`
	Location    string   `json:"location"`
	Type        string   `json:"type"`
}

type Project struct {
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Tech        []string `json:"tech"`
	URL         string   `json:"url,omitempty"`
	Github      string   `json:"github,omitempty"`
	Images      []string `json:"image,omitempty"`
}

type Profile struct {
	Image    string   `json:"image,omitempty"`
	Name     string   `json:"name"`
	Title    string   `json:"title"`
	Bio      string   `json:"bio"`
	Email    string   `json:"email"`
	Phone    string   `json:"phone"`
	LinkedIn string   `json:"linkedin"`
	Github   string   `json:"github"`
	Location string   `json:"location"`
	Skills   []string `json:"skills"`
	CvURL    string   `json:"cvUrl,omitempty"`
}

func jsonResponse(w http.ResponseWriter, data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func profileHandler(w http.ResponseWriter, r *http.Request) {
	profile := Profile{
		Image:    "https://avatars.Githubusercontent.com/u/186155705?s=400&u=525948f23f9d5551f5f8b685a652cfc456f53899&v=4",
		Name:     "Nuttapat Tanatummathat",
		Title:    "FULL-STACK DEVELOPER",
		Bio:      "Enterprise Full-Stack Developer with 3+ years of hands-on experience designing and delivering mission-critical systems across industrial,laboratory, and gaming infrastructure domains. Proven expertise integrating IoT hardware (RFID, LPR, IP Cameras) with enterprise-grade web solutions. Consistently ensures 100% data integrity in high-stakes production environments while optimizing backend performance and automating complex workflows.",
		Email:    "nuttapat.work@gmail.com",
		Phone:    "0897724270",
		LinkedIn: "https://www.linkedin.com/in/nuttapat-tanatummathat-22b2ab320/",
		Github:   "https://Github.com/nuttapatwork",
		Location: "Pathumthani, Thailand (server)",
		CvURL:    "https://github.com/nuttapatwork/my-portfolio/blob/main/frontend/cv/Nuttapat Tanatummathat_ENG_CV_Fullstack.pdf",
		Skills: []string{`Frontend : React, Vue, Css, Angular, Laravel, Bootstrap`,
			`Backend : TypeScript, Node.js, C#.Net, VB.Net, C, C++, JavaScript, Java, Python, Golang, Php, Restful API`,
			`Databases : SQL Server, Oracle Database, MySQL, Firebase, SQLite`,
			`Tools : Git, Github, Sourcetree, Ai, Docker, Postman, RDLC Reports, Crystal Reports, Power Bi`},
	}
	jsonResponse(w, profile)
}

func experienceHandler(w http.ResponseWriter, r *http.Request) {
	experiences := []Experience{
		{
			ID:      "1",
			Company: "Hui’s braised duck noodle",
			Role:    "Restaurant Operations Assistant",
			Period:  "Dec 2025  – Present",
			Description: `• Managed table turnover and food service efficiently in a high-volume, fast-paced environment to minimize customer wait times. 
			• Coordinated closely with the kitchen staff to ensure seamless communication and timely delivery of orders.`,
			Skills:   []string{"Table Management & Serving", "Menu Knowledge", "Food Safety & Hygiene", "Effective Communication", "Anticipation of Needs", "Emotional Intelligence & Patience", "Problem Solving", "Service Mind", "Teamwork", "Time Management"},
			Location: "Pathumthani, Thailand",
			Type:     "Full-time",
		},
		{
			ID:      "2",
			Company: "THEO Engineering Co., Ltd.",
			Role:    "Full Stack Developer",
			Period:  "Aug 2024 – Nov 2025",
			Description: `• Architected industrial weighbridge systems with real-time transaction processing and 100% data integrity. 
			• Developed automated vehicle authentication using LPR, RFID, and IoT integration in production environments. 
			• Optimized backend APIs and SQL queries, significantly enhancing system response time and reliability. Implemented security best practices for hardware-software integration and system stability. 
			`,
			Skills:   []string{"C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"},
			Location: "Bangkok, Thailand",
			Type:     "Full-time",
		},
		{
			ID:      "3",
			Company: "Independent Contract - Game Infrastructure",
			Role:    "Technical System Administrator",
			Period:  "Aug 2023 – Jul 2024",
			Description: `• Administered SQL databases and managed game assets exceeding 30GB, ensuring data integrity enforcement and user activity tracking at scale. 
			• Engineered custom Lua scripts and event-driven logic to optimize game system mechanics, improving overall platform performance. 
			• Collaborated closely with senior administration to deliver Tier 1 & 2 Technical support, resolving complex user-facing issues.
			`,
			Skills:   []string{"Rua", "C", "C++", "GRF Editor", "Notepad++"},
			Location: "Remote",
			Type:     "Full-time",
		},
		{
			ID:      "4",
			Company: "SGS THAILAND LIMITED",
			Role:    "Lab System Developer",
			Period:  "Aug 2022 – Jul 2023",
			Description: `• Developed S-LORD (Enterprise LMS), automating scientific calculations to eliminate manual errors. 
			• Created data visualization and reporting modules for analytical validation and operational efficiency. 
			• Translated complex laboratory workflows into scalable software architecture through cross-functional collaboration.
			`,
			Skills:   []string{"C#.net", "JavaScript", "bootstrap", "RDLC Report", "Oracle Database"},
			Location: "Bangkok, Thailand",
			Type:     "Full-time",
		},
		{
			ID:      "5",
			Company: "GeniusSoft Co., Ltd.",
			Role:    "Full-Stack Developer Internship",
			Period:  "Nov 2021  – Mar 2022",
			Description: `• Developed full-stack corporate and E-commerce websites using WordPress, WooCommerce, and modern web tools following professional UX/UI standards. 
			• Customized E-commerce workflows, including product catalogs, shopping cart logic, and secure user authentication through WooCommerce ecosystem integration.
			`,
			Skills:   []string{"wordpress", "WooCommerce", "css"},
			Location: "Bangkok, Thailand",
			Type:     "Full-time",
		},
	}
	jsonResponse(w, experiences)
}

func projectsHandler(w http.ResponseWriter, r *http.Request) {
	projects := []Project{
		{
			ID:          "1",
			Name:        "S-LORD (Laboratory Management System)",
			Description: "Report",
			Tech:        []string{"C#.net", "JavaScript", "bootstrap", "RDLC Report", "Oracle Database"},
			URL:         "https://drive.google.com/drive/folders/1doHkW8qxNa_C4icTes-RwGzEO561VKQf?usp=sharing",
			Github:      "https://Github.com/nuttapatwork",
			Images: []string{
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/s-lord-img/Screenshot%202026-06-23%20004232.png?raw=true",
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/s-lord-img/Screenshot%202026-06-23%20004314.png?raw=true",
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/s-lord-img/WorksheetSugar5516794.pdf.png?raw=true",
			},
		},
		{
			ID:          "2",
			Name:        "GuardianIndustryRayong",
			Description: "Report",
			Tech:        []string{"C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"},
			URL:         "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
			Github:      "https://Github.com/nuttapatwork",
			Images: []string{
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/GuardianIndustryRayong-img/IMG_5702.jpg?raw=true",
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/GuardianIndustryRayong-img/IMG_5704.jpg?raw=true",
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/GuardianIndustryRayong-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202024-10-08%20164532.png?raw=true",
			}, // URL ลิงก์รูปภาพ
		},
		{
			ID:          "3",
			Name:        "IngredionKalasin_SoilWeight",
			Description: "Report",
			Tech:        []string{"C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"},
			URL:         "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
			Github:      "https://Github.com/nuttapatwork",
			Images:      []string{"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/IngredionKalasin_SoilWeight-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202025-04-23%20101258.png?raw=true"}, // URL ลิงก์รูปภาพ
		},
		{
			ID:          "4",
			Name:        "SCGP",
			Description: "Report",
			Tech:        []string{"C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"},
			URL:         "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
			Github:      "https://Github.com/nuttapatwork",
			Images: []string{
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/scgp-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202025-03-24%20172318.png?raw=true",
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/scgp-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20messageImage_1727167661793.jpg?raw=true",
			}, // URL ลิงก์รูปภาพ
		},
		{
			ID:          "5",
			Name:        "TruckWeight",
			Description: "Report",
			Tech:        []string{"C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"},
			URL:         "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
			Github:      "https://Github.com/nuttapatwork",
			Images: []string{
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/TruckWeight-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202025-03-21%20144304.png?raw=true",
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/TruckWeight-img/%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20Screenshot%202025-04-25%20085605.png?raw=true",
			}, // URL ลิงก์รูปภาพ
		},
		{
			ID:          "6",
			Name:        "WeightInd2",
			Description: "Report",
			Tech:        []string{"C#.Net", "Node.js", "VB.Net", "Python", "SQLSERVER", "MySQL", "SQLite", "Postman", "Crystal Reports"},
			URL:         "https://drive.google.com/drive/folders/1EnsjDKNJNHorIsXQXZdI7w29PPBfuRwq?usp=sharing", // ใส่ลิงก์หน้าเว็บโปรเจกต์จริง (ถ้ามี ถ้าไม่มีปล่อยว่างไว้ ระบบจะซ่อนอัตโนมัติ)
			Github:      "https://Github.com/nuttapatwork",
			Images: []string{
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/WeightInd2-img/IMG_5751.jpg?raw=true",
				"https://Github.com/nuttapatwork/my-portfolio/blob/main/frontend/projects/Theo/WeightInd2-img/IMG_7630.jpg?raw=true",
			}, // URL ลิงก์รูปภาพ
		},
	}
	jsonResponse(w, projects)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/profile", profileHandler)
	mux.HandleFunc("/api/experiences", experienceHandler)
	mux.HandleFunc("/api/projects", projectsHandler)
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(200)
		w.Write([]byte("ok"))
	})

	// อ่าน ALLOWED_ORIGIN จาก env (ใส่ URL ของ Github Pages)
	allowedOrigin := os.Getenv("ALLOWED_ORIGIN")
	if allowedOrigin == "" {
		allowedOrigin = "http://localhost:5173"
	}

	c := cors.New(cors.Options{
		AllowedOrigins: []string{allowedOrigin, "http://localhost:5173", "http://localhost:3000"},
		AllowedMethods: []string{"GET", "OPTIONS"},
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server running on :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, c.Handler(mux)))
}
