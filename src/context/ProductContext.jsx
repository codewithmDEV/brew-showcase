import { createContext } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
    const { products, loading, error } = useProducts();
    return (
        <ProductContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
}
export { ProductContext };
export default ProductContextProvider;