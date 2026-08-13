import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>

        {/* Coffee shop brand */}
        <Link to="/" className={styles.brand}>
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e"
            alt="Coffee beans"
            className={styles.bean}
          />

          <span>Brew Showcase</span>

          <img
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e"
            alt="Coffee beans"
            className={styles.bean}
          />
        </Link>

        {/* Navigation links */}
        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            Home
          </Link>

          <Link to="/products" className={styles.link}>
            Products
          </Link>

          <Link to="/add-product" className={styles.link}>
            Add Product
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;