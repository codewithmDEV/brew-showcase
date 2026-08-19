import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Check if user already exists
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      if (users.find((u) => u.email === email)) {
        setError("User with this email already exists.");
        return;
      }

      // Create new user
      const newUser = { email, password };
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      setSuccess("Account created! Redirecting to sign in...");
      setTimeout(() => {
        navigate("/signin");
      }, 1500);
    } catch (err) {
      setError("Failed to create account. Try again.");
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
          Create Account
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
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
            Sign Up
          </button>

          {error && (
            <p style={{ color: "#c0392b", marginTop: "1rem", fontSize: "0.9rem" }}>
              ⚠️ {error}
            </p>
          )}
          {success && (
            <p style={{ color: "#2d7a4f", marginTop: "1rem", fontSize: "0.9rem" }}>
              ✅ {success}
            </p>
          )}
        </form>

        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Already have an account? <Link to="/signin" style={{ color: "#8b5a2b" }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;