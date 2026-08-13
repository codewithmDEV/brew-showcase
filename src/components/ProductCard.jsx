import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="product-card">
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

      {/* Dynamic route linking to the individual product page in db.json */}
      <Link to={`/products/${product.id}`} className="view-details-btn">
        View Details / Edit
      </Link>
    </div>
  );
}

export default ProductCard;
