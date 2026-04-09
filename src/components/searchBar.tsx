import {useState} from "react";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState(""); 

    return (
        <div className="search-bar flex items-center bg-black/50 rounded-3xl text-white px-5 py-2.5 backdrop-blur-[1px] gap-4 border-2 border-white">
            <i className="bi bi-search"></i>
            <input type="text" className="focus-visible:outline-none" id="SearchBar" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        </div>
    )
}