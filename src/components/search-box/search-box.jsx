import React from "react";
import "./search-box.css";
const SearchBox = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      className={`search-box ${props.className}`}
      type="search"
      onChange={props.onChangeHandler}
    />
  );
};

export default SearchBox;
