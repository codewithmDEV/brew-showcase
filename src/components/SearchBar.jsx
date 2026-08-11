import { useState } from "react";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(value) {
        onSearch(value);
    }

    return (
        <input
        type="text"
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