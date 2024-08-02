import React from "react";
import ShoppingItem from "./ShoppingItem";

import "./ShoppingItem.css";

export default function ShoppingList({ items, deleteItem, updateItem }) {
  const ItemsJsx = items.map((listItem) => (
    <ShoppingItem
      key={listItem.id}
      id={listItem.id}
      itemName={listItem.item}
      quantity={listItem.quantity}
      deleteItem={deleteItem}
      updateItem={updateItem}
    />
  ));

  return <section className="shopping-list-container">{ItemsJsx}</section>;
}
