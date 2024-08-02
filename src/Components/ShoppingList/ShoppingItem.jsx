import React, { useState } from "react";

import ShoppingForm from "../ShoppingForm/ShoppingForm";
import './ShoppingItem.css';

import { Card, Button } from 'antd';

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
    <>
      <div className="item-description">
        <span className="item-name">{itemName}</span>
        <span className="item-quantity">Quantity: {quantity}</span>
      </div>
    </>
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
    <Card className="shopping-item-container" title={isEdit ? EditJsx : ReadOnlyJsx}>
      <div className="item-btn-row">
        <Button onClick={handleDelete} className="delete-btn" type="primary" danger>Delete</Button>
        <Button onClick={handleEdit} className="cancel-edit-btn" ghost>
          {isEdit ? "Cancel" : "Edit"}
        </Button>
      </div> 
    </Card>
  );
}
