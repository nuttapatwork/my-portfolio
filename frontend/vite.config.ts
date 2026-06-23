import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: "/my-portfolio/",
//   plugins: [react()],
//   server: {
//     port: 5173,
//     proxy: {
//        "/api": "http://localhost:8080"
//     }
//   }
// });
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // 🛡️ เช็คเงื่อนไข: ถ้าเป็นคำสั่ง build ให้ใส่ชื่อ Repo แต่ถ้าเป็น dev (รันในเครื่อง) ให้ใช้ '/' ปกติ
    base: command === 'build' ? '/my-portfolio/' : '/',
    server: {
      port: 5173,
      proxy: {
        "/api": "http://localhost:8080"
      }
    }
  }
})