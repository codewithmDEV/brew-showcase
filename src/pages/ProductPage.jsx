import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] =useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] =useState(false);
  const [editPrice, setEditPrice] = useState("");
  const [updateMessage, setUpdateMessage] =useState("");

  useEffect(() => {
    const fetchProduct = async () => {
       setError(null);
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }
        const data = await response.json();
        setProduct(data);
        setEditPrice(data.price);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchProduct();
  }, [id]);
  const handlePatchPrice = async (e) => {
    e.preventDefault();
    setUpdateMessage("");

    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: Number(editPrice) }),
      });

      if (!response.ok) {
        throw new Error("Failed to update product price.");
      }

      const updatedProduct = await response.json();
      setProduct(updatedProduct);
      setIsEditing(false);
      setUpdateMessage("Price updated successfully!");
    } catch (err) {
      console.error("Error updating price:", err);
      setUpdateMessage("Failed to update price.");
    }
  };
  if (error) return <p style={{ padding: "20px" }}>Error: {error}</p>;
  if (!product) return <p style={{ padding: "20px" }}>Product not found.</p>;

  return (
    <main
      className="product-page"
      style={{ padding: "50px", color: "#4a2c2a", backgroundColor: "#e7d3b4" }}
    >
      <Link to="/products">← Back to Products</Link>
      <h1>{product.name}</h1>
      <p>
        <strong>Origin:</strong> {product.origin}</p>
      <p>
        <strong>Description:</strong> {product.description}</p>
      <p>
        <strong>Current Price:</strong> KES{Number(product.price).toFixed(2)} </p>

      {updateMessage && <p className="status-message">{updateMessage}</p>}
      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>Edit Price</button>
      ) : (
        <form onSubmit={handlePatchPrice} style={{ marginTop: "15px" }}>
          <div>
            <label htmlFor="edit-price">New Price (KES): </label>
            <input
              id="edit-price"
              type="number"
              step="0.01"
              min="0"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              required
            />
          </div> 
          <button
            type="submit"
            style={{marginRight: "10px", marginTop: "10px", backgroundColor: "#8b3a3a",
            }}
          >
            Save Price
          </button>
          <button
            type="button" onClick={() => setIsEditing(false)} style={{ backgroundColor: "#8b3a3a" }}
          >
            Cancel
          </button>
        </form>
      )}
    </main>
  );
}

export default ProductPage;
