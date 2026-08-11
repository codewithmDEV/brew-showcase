import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
    const { products, loading, error } = useProducts();
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
    <div>
        <h1>Product List</h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="product-list">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    </div>
);
}
export default ProductListPage;