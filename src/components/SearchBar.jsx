import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(value) {
        onSearch(value);
    }

    return (
        <input
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