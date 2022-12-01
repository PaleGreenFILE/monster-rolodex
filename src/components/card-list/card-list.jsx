import React from "react";
import "./card-list.css";
import Card from "./../card/card";
const CardList = (props) => {
  const monster = props.monsters;
  return (
    <div className="card-list">
      {monster.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};
export default CardList;
