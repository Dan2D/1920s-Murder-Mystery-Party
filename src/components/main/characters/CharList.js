import React from "react";
import charData from "./CharData";
import Character from "./Character";
// import "../../css/pageStyles.css";


const CharList = props => {
  return (
    <div>
      {charData.map(char => (
        props.status === char.status ? <Character {...char} /> : null
      ))}
    </div>
  );
};

export default CharList;
