import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  let {data} = props;

  return (
    <div>
      {data.map((element, index) => (
          //console.log(element.email + ' ' + index);
          <Tile 
            value={element} key={index}
          />
      ))}
    </div>
  );
};
