import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterArticles = () => {
    return articles.filter((article) => {
      const contentMatches = article.content
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const titleMatches = article.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return contentMatches || titleMatches;
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && filterArticles().length > 0 ? (
        filterArticles().map((article, index) => (
          <div key={index}>
            <h3>
              {article.title
                .split(new RegExp(`(${searchTerm})`, "gi"))
                .map((part, i) =>
                  part.toLowerCase() === searchTerm.toLowerCase() ? (
                    <span key={i} style={{ backgroundColor: "yellow" }}>
                      {part}
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
            </h3>
            <p>
              {article.content
                .split(new RegExp(`(${searchTerm})`, "gi"))
                .map((part, i) =>
                  part.toLowerCase() === searchTerm.toLowerCase() ? (
                    <span key={i} style={{ backgroundColor: "yellow" }}>
                      {part}
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
            </p>
          </div>
        ))
      ) : (
        <p>No matching articles found.</p>
      )}
    </div>
  );
};

export default SearchBar;
