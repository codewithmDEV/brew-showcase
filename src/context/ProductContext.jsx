import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const refetchProducts = async () => {
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error, refetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;