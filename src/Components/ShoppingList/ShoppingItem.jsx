import React, { useState } from "react";

import ShoppingForm from "../ShoppingForm/ShoppingForm";
import './ShoppingItem.css';

import { Button } from 'antd';

export default function ShoppingItem({
  id,
  itemName,
  quantity,
  deleteItem,
  updateItem,
}) {
  const [isEdit, setEdit] = useState(false);

  function handleDelete(event) {
    event.preventDefault();
    deleteItem(id);
  }

  function handleEdit(event) {
    event.preventDefault();
    setEdit((oldEditBoolean) => !oldEditBoolean);
  }

  const ReadOnlyJsx = (
    <span>
      {itemName} ({quantity})
    </span>
  );

  function handleUpdate(itemName, quantity) {
    updateItem(id, itemName, quantity);
    setEdit(false);
  }

  const EditJsx = (
    <ShoppingForm
      submitItem={handleUpdate}
      defaultItemName={itemName}
      defaultQuantity={quantity}
      submitButtonText="Update"
    />
  );

  return (
    <li>
      {isEdit ? EditJsx : ReadOnlyJsx}  
      <Button onClick={handleDelete} className="delete-btn">Delete</Button>
      <Button onClick={handleEdit} className="cancel-edit-btn">{isEdit ? "Cancel" : "Edit"}</Button>
    </li>
  );
}
