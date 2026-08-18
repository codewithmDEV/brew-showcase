import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <main>
      <div className="auth-container">
        <h1>Sign Up</h1>

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
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </main>
  );
}

export default SignUpPage;