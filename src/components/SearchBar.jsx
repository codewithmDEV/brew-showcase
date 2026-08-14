import { useState, useRef, useEffect } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);

    function handleSearch(value) {
        onSearch(value);
    }

    useEffect(() => {
        inputRef.current.focus()
    }, []);
    
    return (
        <input
        ref={inputRef}
        type="text"
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
        }}
        placeholder="Search products..."
        />
    );
}
export default SearchBar;