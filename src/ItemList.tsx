/* eslint-disable */
import Item from "./Item";
import React from "react";

// TODO: - render the items list
//       - pass the necessary props to the items
const ItemList = React.memo(
  ({
    items = [],
    onIncrement = () => {},

    onDecrement = () => {},

    onDelete = () => {},
  }: any) => {
    // const copyItems = [...items];
    console.log("render list");
    // const newItems = useMemo(() => {
    //   copyItems;
    // });
    return (
      <div className="item-list">
        {items.map((item: any) => (
          <Item
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            key={item.id}
          />
        ))}
      </div>
    );
  },
  // (prev, next) => {
  //   if (prev.items === next.items) {
  //     return true;
  //   }

  //   return false;
  // },
);

export default ItemList;
