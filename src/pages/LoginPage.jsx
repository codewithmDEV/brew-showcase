import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      navigate("/products");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f3eb",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2.5rem",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>☕</div>
        <h1 style={{ fontSize: "1.8rem", fontWeight: "600", margin: "0 0 0.25rem" }}>
          Brew Showcase
        </h1>
        <p style={{ color: "#6b5a4a", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
          Admin Login
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.9rem",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              marginBottom: "1rem",
              outline: "none",
              transition: "border 0.2s",
            }}
            onFocus={(e) => (e.target.style.border = "2px solid #8b5a2b")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.9rem",
              borderRadius: "12px",
              border: "none",
              background: "#8b5a2b",
              color: "white",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#6f4620")}
            onMouseLeave={(e) => (e.target.style.background = "#8b5a2b")}
          >
            Login
          </button>

          {error && (
            <p style={{ color: "#c0392b", marginTop: "1rem", fontSize: "0.9rem" }}>
              ⚠️ {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;