import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ items }) {
  const ItemsJsx = items.map((listItem) => (
    <ShoppingItem
      key={listItem.id}
      id={listItem.id}
      itemName={listItem.item}
      quantity={listItem.quantity}
    />
  ));

  return <ul>{ItemsJsx}</ul>;
}
