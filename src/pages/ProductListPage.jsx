import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import styles from "./ProductListPage.module.css";

function ProductListPage() {
    const { products, loading, error } = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    function handleSearch(searchTerm) {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Product List</h1>
            <div className={styles.searchWrapper}>
                <SearchBar onSearch={handleSearch} />
            </div>
            {loading && <p className={styles.statusText}>Loading...</p>}
            {error && <p className={styles.errorText}>Error: {error}</p>}
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