

import { useState } from "react";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleClick = () => {
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />

            <button onClick={handleClick}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;