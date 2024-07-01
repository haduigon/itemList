// TODO: - render an item
//       - show name
//       - show price
//       - show count
//       - calculate and show amount
//       - call "onIncrement"
//       - call "onDecrement"

import { useState } from "react";
import React from "react";

//       - call "onDelete"
const Item = React.memo(
  ({
    item,
    onIncrement = () => {},
    onDecrement = () => {},
    onDelete = () => {},
  }: any) => {
    // TODO: don't delete this console.log!
    // console.log(`render item ${item?.id}`);
    const [count, setCount] = useState(false);
    console.log(`render item ${item?.id}`, count);

    function onPlusButton() {
      setCount(!count);
      onIncrement(item.id);
    }
    function MinussButton() {
      setCount(!count);
      onDecrement(item.id);
    }
    function onRemoveButton() {
      setCount(!count);
      onDelete(item.id);
    }
    return (
      <div className="cart-item">
        <div className="details-wrapper">
          {/* TODO: show name */}
          <span className="name">{item.name}</span>
          <span>
            {/* TODO: show price */}
            price: <span className="price">{item.price}</span>
          </span>
        </div>

        <dl className="counter-wrapper">
          <dt>count</dt>
          <dd>
            {/* TODO: call onDecrement */}
            <button className="decrement" onClick={MinussButton}>
              -
            </button>
            {/* TODO: show count */}
            <span className="count">{item.count}</span>
            {/* TODO: call onIncrement */}
            <button className="increment" onClick={onPlusButton}>
              +
            </button>
          </dd>
        </dl>

        <div className="amount-wrapper">
          <span className="label">amount:</span>
          {/* TODO: calculate and show amount */}
          <span className="amount">{item.count * item.price}</span>
        </div>

        {/* TODO: call onDeleteItem */}
        <button className="delete-item" onClick={onRemoveButton}>
          x
        </button>
      </div>
    );
  },
  // (prev, next) => {
  //   console.log(prev, next, "prev next");
  //   if (next.count !== prev.count) {
  //     console.log("next.count !== prev.count");

  //     return true;
  //   }
  //   console.log("!!!!!  next.count !== prev.count");
  //   return false;
  // },
);

// const Item = React.memo((item) => Item2(item));

export default Item;
