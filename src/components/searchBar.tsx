import "../assets/searchBar.css";
import {useState} from "react";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState(""); 

    return (
        <div className="search-bar">
            <i className="bi bi-search"></i>
            <input type="text" id="SearchBar" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        </div>
    )
}