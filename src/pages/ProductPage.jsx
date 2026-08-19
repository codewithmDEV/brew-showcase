import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editPrice, setEditPrice] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const { isAdmin } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      setError(null);
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details.");
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: Number(editPrice) }),
      });
      if (!response.ok) throw new Error("Failed to update product price.");
      const updatedProduct = await response.json();
      setProduct(updatedProduct);
      setIsEditing(false);
      setUpdateMessage("✅ Price updated successfully!");
    } catch (err) {
      console.error("Error updating price:", err);
      setUpdateMessage("❌ Failed to update price.");
    }
  };

  if (error) return <p style={{ padding: "2rem", color: "#c0392b" }}>Error: {error}</p>;
  if (!product) return <p style={{ padding: "2rem" }}>Product not found.</p>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f3eb",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2.5rem",
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <Link
          to="/products"
          style={{
            display: "inline-block",
            marginBottom: "1.5rem",
            color: "#8b5a2b",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          ← Back to Products
        </Link>

        <h1
          style={{
            fontSize: "2.2rem",
            margin: "0 0 0.5rem 0",
            color: "#3e2c1b",
          }}
        >
          {product.name}
        </h1>

        <p style={{ margin: "0.5rem 0", color: "#5a4a3a" }}>
          <strong>Origin:</strong> {product.origin}
        </p>
        <p style={{ margin: "0.5rem 0", color: "#5a4a3a" }}>
          <strong>Description:</strong> {product.description}
        </p>
        <p
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            color: "#6f4620",
            margin: "1.5rem 0",
          }}
        >
          KES {Number(product.price).toFixed(2)}
        </p>

        {updateMessage && (
          <p
            style={{
              color: updateMessage.includes("success") ? "#2d7a4f" : "#c0392b",
              margin: "0.5rem 0",
            }}
          >
            {updateMessage}
          </p>
        )}

        {isAdmin && (
          <>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                style={{
                  padding: "0.7rem 1.5rem",
                  borderRadius: "12px",
                  border: "none",
                  background: "#8b5a2b",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#6f4620")}
                onMouseLeave={(e) => (e.target.style.background = "#8b5a2b")}
              >
                Edit Price
              </button>
            ) : (
              <form onSubmit={handlePatchPrice} style={{ marginTop: "1rem" }}>
                <label
                  style={{
                    fontWeight: "500",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  New Price (KES):
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  required
                  style={{
                    padding: "0.7rem",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    width: "100%",
                    marginBottom: "0.7rem",
                    fontSize: "1rem",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "0.7rem 1.5rem",
                    borderRadius: "12px",
                    border: "none",
                    background: "#2d7a4f",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                    marginRight: "0.5rem",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#1f5a3a")}
                  onMouseLeave={(e) => (e.target.style.background = "#2d7a4f")}
                >
                  Save Price
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  style={{
                    padding: "0.7rem 1.5rem",
                    borderRadius: "12px",
                    border: "none",
                    background: "#7a5a3a",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#5a3a2a")}
                  onMouseLeave={(e) => (e.target.style.background = "#7a5a3a")}
                >
                  Cancel
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPage;