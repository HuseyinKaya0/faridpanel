export default function Home() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>🚀 Discord Bot Panel</h1>
      <p>Merhaba 👋 Bu panel Vercel üzerinde başarıyla çalışıyor.</p>
      <p>Buradan botuna ait özellikler ekleyebilirsin.</p>
    </div>
  );
}
import { useEffect, useState } from "react";

export default function Home() {
  const [apiMessage, setApiMessage] = useState("Yükleniyor...");

  useEffect(() => {
    fetch("https://seninbotun.up.railway.app/ping")
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(() => setApiMessage("❌ API’ye bağlanılamadı"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Discord Bot Panel</h1>
      <p>API’den gelen mesaj: {apiMessage}</p>
    </div>
  );
}
