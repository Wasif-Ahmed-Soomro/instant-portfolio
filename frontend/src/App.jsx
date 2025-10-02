import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [name, setName] = useState("Your Name");
  const [tagline, setTagline] = useState("A short tagline that tells people who you are.");
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "linear-gradient(to bottom right, #eef2ff, #e0f2fe)", // soft gradient
        fontFamily: "Inter, sans-serif",
        color: "#1e293b",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 320,
          background: "#ffffff",
          padding: "28px 22px",
          boxShadow: "4px 0 20px rgba(0,0,0,0.05)",
          borderRight: "1px solid #e5e7eb",
        }}
      >
        <h2 style={{ fontSize: 22, marginBottom: 28, fontWeight: "700", color: "#1e3a8a" }}>
          Portfolio Builder
        </h2>

        {/* Tabs (UI only for now) */}
        <div style={{ marginBottom: 32 }}>
          {["About Me", "Projects", "Contact", "Theme", "Share"].map((tab) => (
            <button key={tab} style={tabStyle}>
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <div>
          <h3 style={{ marginBottom: 14, fontWeight: "600", fontSize: 16, color: "#334155" }}>
            About Me
          </h3>

          <label style={labelStyle}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <label style={labelStyle}>Bio / Tagline</label>
          <textarea
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            style={{ ...inputStyle, height: 70 }}
          />

          <label style={labelStyle}>Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            style={{ marginBottom: 20, fontSize: "14px" }}
          />
        </div>
      </aside>

      {/* Preview */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "48px 60px",
            borderRadius: "20px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
            maxWidth: 520,
            width: "100%",
            textAlign: "center",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              width: 130,
              height: 130,
              borderRadius: "50%",
              background: "#f9fafb",
              margin: "0 auto 20px",
              overflow: "hidden",
              border: "4px solid #3b82f6",
              boxShadow: "0 4px 10px rgba(59,130,246,0.25)",
            }}
          >
            {photo ? (
              <img src={photo} alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span style={{ lineHeight: "130px", color: "#94a3b8" }}>Photo</span>
            )}
          </div>

          <h1 style={{ fontSize: 28, fontWeight: "800", color: "#111827" }}>{name}</h1>
          <p style={{ marginTop: 10, fontSize: 16, color: "#475569" }}>{tagline}</p>

          <hr style={{ margin: "28px auto", width: "70%", borderColor: "#e2e8f0" }} />

          <button style={buttonStyle}>Get In Touch</button>
        </div>
      </main>
    </div>
  );
}

const tabStyle = {
  display: "block",
  width: "100%",
  padding: "12px 16px",
  marginBottom: "10px",
  background: "#f1f5f9",
  border: "1px solid #e2e8f0",
  borderRadius: "10px",
  color: "#1e293b",
  textAlign: "left",
  fontSize: "15px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  background: "#f8fafc",
  color: "#1e293b",
  fontSize: "14px",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#334155",
};

const buttonStyle = {
  padding: "14px 28px",
  border: "none",
  borderRadius: "12px",
  background: "linear-gradient(to right, #3b82f6, #6366f1)",
  color: "#fff",
  fontSize: "15px",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: "0 6px 15px rgba(99,102,241,0.25)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};
