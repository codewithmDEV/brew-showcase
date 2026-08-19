import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignInPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const success = login(password);

    if (success) {
      navigate("/products");
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <main>
      <div className="auth-container">
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p>{error}</p>}

          <button type="submit">Sign In</button>
        </form>

        <p>
          Don't have an account?{" "}
          <a href="/signup">Sign Up</a>
        </p>
      </div>
    </main>
  );
}

export default SignInPage;