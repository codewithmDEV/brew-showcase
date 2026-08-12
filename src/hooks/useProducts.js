import {useEffect, useState} from "react";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch("http://localhost:3000/products");
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {

                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
}
