import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isAdmin, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <span className={styles.brand}>Brew Showcase</span>

        <div className={styles.links}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/products" className={styles.link}>Products</Link>
          {isAdmin && (
            <Link to="/add-product" className={styles.link}>Add Product</Link>
          )}
          <Link to="/checkout" className={styles.link}>Checkout</Link>
        </div>

        <div className={styles.authLinks}>
          {isAdmin ? (
            <button
              onClick={() => {
                logout();
                window.location.href = "/login";
              }}
              className={styles.logoutButton}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className={styles.link}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;