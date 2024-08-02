import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./ShoppingForm.css";

export default function ShoppingForm({
  submitItem,
  defaultItemName = "",
  defaultQuantity = "1",
  submitButtonText = "Add to Cart",
}) {
  const [item, setItem] = useState(defaultItemName);
  const [quantity, setQuantity] = useState(defaultQuantity);

  function handleItemChange(event) {
    setItem(event.target.value);
  }

  function handleQuantityChange(value) {
    setQuantity(value);
  }

  function handleSubmit() {
    submitItem(item, quantity);
    setItem("");
    setQuantity("");
  }

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={handleSubmit} className="form">
        <Form.Item label="Item" required className="form-item">
          <Input
            type="text"
            value={item}
            onChange={handleItemChange}
            placeholder="Enter Item name"
          />
        </Form.Item>
        <Form.Item label="Quantity" required className="form-item">
          <InputNumber
            type="number"
            min={1}
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Enter quantity"
          />
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
