import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

const App = () => {
  const [state, setstate] = useState([]);
  const [data, setData] = useState([]);

  const handleChangeSearch = (e) => {
    if (e.target.value === "") {
      setData(state);
    } else {
      const filteredMonsters = state.filter((users) =>
        users.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      setData(filteredMonsters);
    }
  };

  const getAllUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((users) => {
        setData(users);
        setstate(users);
      });
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={handleChangeSearch}
        placeholder="Search Monster..."
      />
      <CardList monsters={data} />
    </div>
  );
};

export default App;
