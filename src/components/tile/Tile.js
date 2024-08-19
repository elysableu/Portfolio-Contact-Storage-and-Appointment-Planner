import React from "react";

export const Tile = (props) => {
  let {value, key} = props;

  console.log(value.name + " " + key);
  const dataArray = Object.values(value);
  console.log(dataArray);
  return (
    <div className="tile-container">
      {dataArray.map((element, index) => {
        if(index === 0) {
          return <p className='tile-title tile' key={index}> {element} </p>
        } else {
          return <p className='tile' key={index}> {element} </p>
        }
      })}
    </div>
  );
};
