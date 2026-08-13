import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>

        <Link to="/" className={styles.brand}>
          Brew Showcase
        </Link>

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