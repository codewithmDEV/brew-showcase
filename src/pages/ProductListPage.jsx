import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import styles from "./ProductListPage.module.css";
import { useAuth } from "../context/AuthContext";

function ProductListPage() {
  const { products, loading, error } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const auth = useAuth();
  const isAdmin = auth?.isAdmin ?? false;

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  function handleSearch(searchTerm) {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  if (loading) return <p className={styles.statusText}>Loading...</p>;
  if (error) return <p className={styles.errorText}>Error: {error}</p>;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Product List</h1>

      {isAdmin && (
        <Link to="/add-product">
          <button className={styles.addButton}>Add Product</button>
        </Link>
      )}

      <div className={styles.searchWrapper}>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.statusText}>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductListPage;