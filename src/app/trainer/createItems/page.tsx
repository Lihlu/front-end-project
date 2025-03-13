"use client";

import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useFoodItemActions } from "@/providers/foodItem";
import { IFoodItemInput } from "@/providers/foodItem/context";

type FieldType = {
  name?: string;
  protein?: number;
  carbs?: number;
  sugar?: number;
  fat?: number;
  fiber?: number;
  sodium?: number;
  potassium?: number;
  category?: string;
  servingSize?: number;
  cholestorol?: number;
  energy?: number;
};


const App: React.FC = () => {
    let token = "";

    if (typeof window !== "undefined") {
      token = sessionStorage.getItem("token");
    }
    const { createFoodItem } = useFoodItemActions();


    const onFinish: FormProps<FieldType>["onFinish"] = (values: IFoodItemInput) => {
      console.log("Success:", values);
      createFoodItem(token, values);
    };
    
    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Protein"
        name="protein"
        rules={[{ required: true, message: "Please the protein value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Carbs"
        name="carbs"
        rules={[{ required: true, message: "Please input the carbs value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Sugar"
        name="sugar"
        rules={[{ required: true, message: "Please input the sugar value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Fat"
        name="fat"
        rules={[{ required: true, message: "Please input the fat value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Fiber"
        name="fiber"
        rules={[{ required: true, message: "Please input the fiber value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Sodium"
        name="sodium"
        rules={[{ required: true, message: "Please input the sodium value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Potassium"
        name="potassium"
        rules={[{ required: true, message: "Please input the potassium value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please input the category!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Serving Size"
        name="servingSize"
        rules={[{ required: true, message: "Please input the serving size!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Cholestorol"
        name="cholestorol"
        rules={[{ required: true, message: "Please input the cholestorol value!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Energy"
        name="energy"
        rules={[{ required: true, message: "Please input the energy value!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Create Item
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
