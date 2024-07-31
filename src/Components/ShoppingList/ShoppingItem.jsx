import React from 'react';

export default function ShoppingItem(props) {
  return (
    <li>{props.item} ({props.quantity}) <button>DELETE</button></li>
  );
}
