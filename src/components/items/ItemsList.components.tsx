import React from "react";
//import references to our interface

import { IItem } from "../../models/items/IItem";
export const ItemsListComponent: React.FC<{
  items: IItem[];
}> = (props) => {
  return (
    <div>
      <h3>
        Items:
        {props.items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </h3>
    </div>
  );
};
