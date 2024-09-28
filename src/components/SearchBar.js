import React, { useState } from 'react';

function SearchBar({ setCity }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
      setInput(''); // Clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
