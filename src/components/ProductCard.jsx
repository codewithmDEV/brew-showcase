import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className={styles.productCard}>
      <h3 className={styles.name}>{product.name}</h3>
      <p><strong>Origin:</strong> {product.origin}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p className={styles.price}>
        <strong>Price:</strong> KES {Number(product.price).toLocaleString("en-KE")}
      </p>
      <Link to={`/products/${product.id}`} className={styles.viewDetailsBtn}>
        View Details / Edit
      </Link>
    </div>
  );
}

export default ProductCard;