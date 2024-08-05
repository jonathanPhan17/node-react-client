import React, { useState } from "react";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Form, Input, InputNumber, Button } from "antd";
import "./ShoppingForm.css";

export default function ShoppingForm({
  submitItem,
  defaultItemName = "",
  defaultQuantity = "1",
  submitButtonText = "Add to List",
}) {
  const [item, setItem] = useState(defaultItemName);
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [itemError, setItemError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  function handleItemChange(event) {
    setItem(event.target.value);
    setItemError("");
  }

  function handleQuantityChange(value) {
    setQuantity(value);
    setQuantityError("");
  }

  function validateItem(item) {
    if (!item.trim()) {
      return "Item cannot be blank.";
    }
    if (item.length < 3 || item.length > 20) {
      return "Item must be between 3 and 20 chars.";
    }
    if (/[^a-zA-Z0-9 ]/.test(item)) {
      return "Item cannot contain special chars.";
    }
    return "";
  }

  function validateQuantity(quantity) {
    if (quantity !== 'number' || quantity < 1 || quantity > 100) {
      return "Quantity must be between 1 and 100.";
    }
    return "";
  }

  function handleSubmit() {
    const itemValidationError = validateItem(item);
    const quantityValidationError = validateQuantity(quantity);

    if (itemValidationError || quantityValidationError) {
      setItemError(itemValidationError);
      setQuantityError(quantityValidationError);
      return;
    }

    submitItem(item, quantity);
    setItem("");
    setQuantity("");
  }

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={handleSubmit} className="form">
        <Form.Item label="Item" required className="form-item">
          <Input
            status={itemError ? "error" : ""}
            type="text"
            value={item}
            onChange={handleItemChange}
            placeholder="Enter Item name"
          />
          <ErrorMessage message={itemError} />
        </Form.Item>
        <Form.Item label="Quantity" required className="form-item">
          <InputNumber
            status={quantityError ? "error" : ""}
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Enter quantity"
          />
          <ErrorMessage message={quantityError} />
        </Form.Item>
        <Form.Item className="form-item">
          <Button type="primary" htmlType="submit">
            {submitButtonText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}