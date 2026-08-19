import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { ProductContext } from "../context/ProductContext";
import styles from "./AddProductPage.module.css";

function AddProductPage() {
  const [message, setMessage] = useState("");
  const { refetchProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleAddProduct = async (product) => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const newProduct = await response.json();
      console.log("Product added:", newProduct);

      await refetchProducts();

      setMessage("✅ Product added successfully!");

      setTimeout(() => {
        navigate("/products");
      }, 1000);
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage("❌ Failed to add product.");
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Add Product</h1>
        <p className={styles.subtitle}>
          Add a new coffee product to the Brew Showcase collection.
        </p>
        <div className={styles.formCard}>
          <ProductForm onAddProduct={handleAddProduct} />
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    </main>
  );
}

export default AddProductPage;