import React, { useState } from "react";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [id,setID] = useState ("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleChange = (event) => {
    setID(event.target.value);
  }

  const handleSearch = () => {
    props.onSearch(searchTerm);
  };

  return (
    <div>
      <input type="search" value={searchTerm} onChange={handleInputChange} onKeyUp={handleChange} />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
