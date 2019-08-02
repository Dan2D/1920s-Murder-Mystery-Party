import React from "react";
import charData from "./CharData";
import Character from "./Character";

const CharList = props => {
  return (
    <div>
      {charData.map(charProps => (
        props.status === charProps.status ? 
        <Character key={charProps.name} {...charProps} onClick={() => props.onClick()} /> : null
      ))}
    </div>
  );
};

export default CharList;
