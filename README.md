# 🚀 Portfolio Web App — React + Go

เว็บ Portfolio ที่หรูหราและทันสมัย สร้างด้วย **React (TypeScript)** + **Go**

## 📁 โครงสร้างโปรเจค

```
portfolio/
├── backend/               # Go API Server
│   ├── main.go            # handlers + data
│   ├── go.mod
│   └── Dockerfile
├── frontend/              # React App
│   ├── src/
│   │   ├── components/    # Hero, Nav, Experience, Projects, Contact
│   │   ├── types/         # TypeScript interfaces
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css      # Dark gold theme
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── Dockerfile
└── docker-compose.yml
```

---

## 🛠️ วิธีติดตั้งและรัน

### ข้อกำหนดเบื้องต้น

| เครื่องมือ | เวอร์ชัน | ดาวน์โหลด |
|-----------|---------|-----------|
| Go        | 1.21+   | https://go.dev/dl |
| Node.js   | 20+     | https://nodejs.org |
| Git       | ล่าสุด   | https://git-scm.com |
| Docker *(ตัวเลือก)* | 24+ | https://docker.com |

---

### วิธีที่ 1: รันบน Local (แนะนำสำหรับพัฒนา)

#### ขั้นที่ 1 — รัน Go Backend

```bash
cd portfolio/backend

# ดาวน์โหลด dependencies
go mod tidy

# รัน server (port 8080)
go run main.go
```

ทดสอบว่า backend ทำงาน:
```bash
curl http://localhost:8080/api/profile
```

#### ขั้นที่ 2 — รัน React Frontend

เปิด terminal ใหม่:

```bash
cd portfolio/frontend

# ติดตั้ง packages
npm install

# รัน dev server (port 5173)
npm run dev
```

เปิดเบราว์เซอร์: **http://localhost:5173**

---

### วิธีที่ 2: รันด้วย Docker Compose (แนะนำสำหรับ production)

```bash
cd portfolio

# Build และรันทุกอย่างในคำสั่งเดียว
docker-compose up --build
```

เปิดเบราว์เซอร์: **http://localhost:3000**

---

## ✏️ แก้ไขข้อมูลส่วนตัว

เปิดไฟล์ `backend/main.go` และแก้ไขส่วนต่างๆ:

### 1. ข้อมูลส่วนตัว (Profile)

```go
func profileHandler(w http.ResponseWriter, r *http.Request) {
    profile := Profile{
        Name:     "ชื่อของคุณ",          // ← แก้ไขที่นี่
        Title:    "ตำแหน่งงานของคุณ",     // ← แก้ไขที่นี่
        Bio:      "เกี่ยวกับคุณ...",       // ← แก้ไขที่นี่
        Email:    "email@example.com",    // ← แก้ไขที่นี่
        LinkedIn: "https://linkedin.com/in/yourname",
        GitHub:   "https://github.com/yourname",
        Location: "กรุงเทพฯ, ประเทศไทย",
        Skills:   []string{"Go", "React", "Python"},  // ← แก้ไขที่นี่
    }
}
```

### 2. ประสบการณ์การทำงาน (Experience)

```go
func experienceHandler(w http.ResponseWriter, r *http.Request) {
    experiences := []Experience{
        {
            ID:          "1",
            Company:     "ชื่อบริษัท",
            Role:        "ตำแหน่งงาน",
            Period:      "2022 – ปัจจุบัน",
            Description: "สิ่งที่คุณทำในงานนี้...",
            Skills:      []string{"Go", "Docker"},
            Location:    "กรุงเทพฯ",
            Type:        "Full-time",
        },
        // เพิ่ม experience อื่นๆ ต่อได้เลย
    }
}
```

### 3. โปรเจค (Projects)

```go
func projectsHandler(w http.ResponseWriter, r *http.Request) {
    projects := []Project{
        {
            ID:          "1",
            Name:        "ชื่อโปรเจค",
            Description: "คำอธิบายโปรเจค",
            Tech:        []string{"React", "Go", "PostgreSQL"},
            GitHub:      "https://github.com/yourname/project",
            URL:         "https://yourproject.com",  // optional
        },
    }
}
```

---

## 🎨 แก้ไขสีและ Design

ไฟล์ `frontend/src/index.css` มี CSS variables ที่ด้านบน:

```css
:root {
  --gold: #C9A84C;        /* สีทอง หลัก */
  --gold-light: #E2C47A;  /* สีทอง อ่อน */
  --navy: #0A0F1E;        /* พื้นหลัง หลัก */
  --navy-2: #0F1628;      /* พื้นหลัง section สลับ */
  --navy-card: #111827;   /* พื้นหลัง card */
}
```

**เปลี่ยนธีม เช่น ธีม Emerald (สีเขียว):**
```css
--gold: #4CAF84;
--gold-light: #6ED4A2;
```

---

## 🌐 Deploy บน Vercel + Render (ฟรี!)

### Backend บน Render.com

1. Push โค้ดขึ้น GitHub
2. ไปที่ [render.com](https://render.com) → New → Web Service
3. เลือก repo → เลือก folder `backend`
4. ตั้งค่า:
   - **Build Command:** `go build -o server .`
   - **Start Command:** `./server`
5. Deploy! ได้ URL เช่น `https://portfolio-api.onrender.com`

### Frontend บน Vercel.com

1. ไปที่ [vercel.com](https://vercel.com) → New Project
2. เลือก repo → **Root Directory:** `frontend`
3. เพิ่ม Environment Variable:
   - Key: `VITE_API_URL`
   - Value: `https://portfolio-api.onrender.com`
4. Deploy!

---

## 📡 API Endpoints

| Method | Endpoint | คำอธิบาย |
|--------|----------|---------|
| GET | `/api/profile` | ข้อมูลส่วนตัว |
| GET | `/api/experiences` | ประวัติการทำงาน |
| GET | `/api/projects` | รายการโปรเจค |

---

## 🔧 เพิ่มฟีเจอร์ในอนาคต

- **PostgreSQL** — เก็บข้อมูลใน database แทน hardcode
- **Admin Panel** — แก้ไขข้อมูลผ่าน UI
- **Blog** — เพิ่ม Markdown blog posts
- **Dark/Light Mode** — toggle สลับธีม
- **i18n** — รองรับหลายภาษา

---

## 📞 สอบถามเพิ่มเติม

หากติดปัญหาขั้นตอนไหน สามารถถามได้เลย!
