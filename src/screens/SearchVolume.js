import React, { useState } from "react";
import "./SearchVolume.css"; // Import the CSS file for styling

function SearchVolume() {
  const [keyword, setKeyword] = useState("");
  const [searchVolume, setSearchVolume] = useState(null);

  const fetchSearchVolume = async () => {
    if (!keyword) return;

    try {
      const response = await fetch(
        `https://youtube-search-volume-server.onrender.com/search-volume?keyword=${keyword}`
      );
      const data = await response.json();
      setSearchVolume(data.search_volume);
    } catch (error) {
      console.error("Error fetching search volume:", error);
    }
  };

  return (
    <div className="search-volume">
      <h1>YouTube Keyword Search Volume</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Enter a keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="search-button" onClick={fetchSearchVolume}>
        Fetch Search Volume
      </button>

      {searchVolume !== null && (
        <div className="search-volume-result">
          <h2>Search Volume for "{keyword}"</h2>
          <p>Volume: {searchVolume}</p>
        </div>
      )}
    </div>
  );
}

export default SearchVolume;
