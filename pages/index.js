import { useEffect, useState } from "react";


export default function Home() {
const [apiMessage, setApiMessage] = useState("Yükleniyor...");
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; // .env.local ile gelecek


useEffect(() => {
fetch(`${API_BASE}/ping`)
.then((res) => res.json())
.then((data) => setApiMessage(data.message))
.catch(() => setApiMessage("❌ API’ye bağlanılamadı"));
}, [API_BASE]);


return (
<div style={{
fontFamily: "Arial, sans-serif",
maxWidth: 720,
margin: "80px auto",
textAlign: "center",
padding: 24,
borderRadius: 16,
boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
}}>
<h1>🚀 Discord Bot Panel</h1>
<p>Merhaba 👋 Bu panel Vercel üzerinde başarıyla çalışıyor.</p>
<p>
API’den gelen mesaj: <strong>{apiMessage}</strong>
</p>
<p style={{opacity: 0.7, fontSize: 14}}>
(API adresi: <code>{API_BASE}/ping</code>)
</p>
</div>
);
}
