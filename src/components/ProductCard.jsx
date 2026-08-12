import { Link } from "react-router-dom";

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h3>{product.name}</h3>
      <p>
        <strong>Origin:</strong> {product.origin}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Price:</strong> ${Number(product.price).toFixed(2)}
      </p>
      <Link to={`/products/${product.id}`} className="view-details-btn">
        View Details / Edit
      </Link>
    </div>
  );
}

export default ProductCard;
