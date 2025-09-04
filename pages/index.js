import { useEffect, useState } from "react";

export default function Home() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/members`)
      .then(res => res.json())
      .then(data => {
        setMembers(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #6a0dad, #9b59b6)",
      minHeight: "100vh",
      color: "white",
      padding: "40px"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>💜 Discord Sunucu Üyeleri</h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Yükleniyor...</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {members.map(member => (
            <div key={member.id} style={{
              background: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
            }}>
              <img 
                src={member.avatar} 
                alt={member.username} 
                style={{ width: "80px", borderRadius: "50%", marginBottom: "10px" }}
              />
              <h3>{member.username}#{member.discriminator}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
