// import React from 'react';
import './App.scss';

import Title from "./Title";
import ItemList from "./ItemList";
import TotalAmount from "./TotalAmount";
import { useCallback, useEffect, useState } from "react";

// use the following CRUD API https://640f0073cde47f68db3e614c.mockapi.io/api/v1/cart

// API response example
// const initialState = [
//   { id: 1, price: 4700, name: "Printer", count: 1 },
//   { id: 2, price: 3800, name: "Motherboard", count: 2 },
//   { id: 3, price: 500, name: "Mouse", count: 5 },
// ];

// The user should be able:
// - to change the count for each item
// - to remove items from the array

// The shopping cart should:
// - calculate the amount for each item
// - calculate the total amount

// TODO: - finish the Shopping Cart.
//       - fetch data and set state
//       - create a "handleIncrement" function
//       - create a "handleDecrement" function
//       - create a "handleDeleteItem" function
//       - pass the items and functions to the components
const Cart = () => {
  const [items, setItems] = useState<any>([]);
  console.log(items.length);
  useEffect(() => {
    fetch("https://640f0073cde47f68db3e614c.mockapi.io/api/v1/cart").then(
      (response) => response.json().then((resp) => setItems(resp)),
    );
  }, []);

  // function setSetItem(resp) {
  //   setItems(resp);
  // }

  const onIncrement = useCallback(
    (id: any) => {
      // console.log(items);
      // if (items !== undefined) {
      const newItems = items.map((item: any) => {
        if (+item.id === +id) {
          item.count = +item.count + 1;
        }
        return item;
      });
      console.log(newItems, "newitems", items);
      setItems(newItems);
      // }
    },
    [items.length],
  );

  // const onIncrement = useCallback(onIncrement2, []);

  const onDecrement = useCallback(
    (id: any) => {
      const newItems = items.map((item: any) => {
        if (+item.id === +id) {
          item.count = +item.count - 1;
        }
        return item;
      });

      setItems(newItems);
    },
    [items.length],
  );

  const onDelete = useCallback(
    (id: any) => {
      const newItems = items.filter((item: any) => item.id !== id);
      setItems(newItems);
    },
    [items.length],
  );

  return (
    <div className="cart">
      <Title />

      {/* TODO: pass the items
          and functions to the component */}
      <ItemList
        items={items}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />

      {/* TODO: pass the items to the component */}
      <TotalAmount items={items} />
    </div>
  );
};

export default Cart;

