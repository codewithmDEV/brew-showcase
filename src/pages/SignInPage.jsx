import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <main>
      <div className="auth-container">
        <h1>Sign In</h1>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit">Sign In</button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </main>
  );
}

export default SignInPage;