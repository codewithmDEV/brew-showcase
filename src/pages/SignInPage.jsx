import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Sign In</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          required
          style={{ display: "block", width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          style={{ display: "block", width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.7rem 1.5rem",
            background: "#8b5a2b",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignInPage;