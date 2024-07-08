import React, { useState } from 'react';
import SearchIcon from "../../assets/search.png";
import FilterIcon from "../../assets/filter.png";

function SearchBar(props: any) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempArray = [];
    const { origValue, setVal } = props;
    
    if (event.target.value === "") {
      setVal(origValue);
      return;
    }
    
    for (let i = 0; i < origValue.length; i++) {
      for (const key in origValue[i]) {
        let temp = origValue[i][key];
        if (typeof origValue[i][key] === "object") {
          temp = origValue[i][key].props.children;
        }
        if (temp.toString().includes(event.target.value)) {
          tempArray.push(origValue[i]);
          break;
        }
      }
    }
    setVal(tempArray);
  }

  return (
    <div className="relative">
      <input 
        type="text" 
        className="form-control search-bar pl-10 pr-4 py-2 border rounded" 
        aria-label="Search input" 
        aria-describedby="inputGroup-sizing-sm" 
        onChange={handleInputChange} 
        placeholder="Search" 
      />
      <img className="absolute left-2 top-2 h-6 w-6" src={SearchIcon} alt="Search" />
    </div>
  );
}

function FilterBar(props: any) {
  const [filterActive, setFilterActive] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tempArray = [];
    const { origValue, setVal } = props;
    
    if (event.target.value === "") {
      setVal(origValue);
      setFilterActive(false);
      return;
    }
    
    for (let i = 0; i < origValue.length; i++) {
      for (const key in origValue[i]) {
        let temp = origValue[i][key];
        if (typeof origValue[i][key] === "object") {
          temp = origValue[i][key].props.children;
        }
        if (temp.toString().includes(event.target.value)) {
          tempArray.push(origValue[i]);
          break;
        }
      }
    }
    setVal(tempArray);
    setFilterActive(true);
  }

  return (
    <div className="relative">
      <select 
        className="form-control filter-bar pl-10 pr-4 py-2 border rounded w-40" 
        aria-label="Filter select" 
        onChange={handleInputChange}
        defaultValue=""
      >
        <option value="" disabled hidden>{filterActive ? "Filter" : "Filter"}</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
        {/* Add your filter options here */}
      </select>
      <img className="absolute left-2 top-2 h-6 w-6" src={FilterIcon} alt="Filter" />
    </div>
  );
}

export { SearchBar, FilterBar };
