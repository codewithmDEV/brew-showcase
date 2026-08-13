import { useState } from "react";// we import useState from react bcz we need to store our data somewhere
import styles from "./SearchBar.module.css";//import styles to style the searchbar

function SearchBar({ onSearch }) {// we create a Searchbar component that takes a parameter onSearch which is destructed
    const [searchTerm, setSearchTerm] = useState("");// searchTerm is the currentvalue while setSearchTerm will be used to update it

    function handleSearch(value) {//this lives in a child components
        onSearch(value);
    }

    return (
        <input
        type="text"
        className={styles.searchInput}
        value={searchTerm}//searchTerm is the state variable that holds the current tex It ensures the input always shows what's in searchTerm.
        onChange={(e) => {
            setSearchTerm(e.target.value);//updates the local state
            handleSearch(e.target.value);//calls handleSearch which the calls the parant onSearch
        }}
        placeholder="Search products..."
        />
    );
}
export default SearchBar;//export so the file can be used