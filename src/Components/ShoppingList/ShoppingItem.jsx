import React, { useState } from "react";

import ShoppingForm from "../ShoppingForm/ShoppingForm";

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
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>{isEdit ? "Cancel" : "Edit"}</button>
    </li>
  );
}
