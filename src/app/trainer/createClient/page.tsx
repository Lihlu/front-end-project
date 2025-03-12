"use client";

import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Select } from "antd";
import { useClientManagementActions } from "@/providers/clientManagement";
import { IClientInput } from "@/providers/clientManagement/context";
import { useAuthState } from "@/providers/auth";

type FieldType = {
  fullName: string;
  email: string;
  contactNumber: string;
  sex: string;
  dateOfBirth: string;
  activeState: boolean;
};

const CreateClientPage: React.FC = () => {
  let token = "";

  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
  }
  const { createClient } = useClientManagementActions();
  const { user } = useAuthState();

  const { Option } = Select;

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    const clientInput: IClientInput = { ...values, trainerId: user.id };
    createClient(token, clientInput);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
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
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please the protein value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Contact Number"
        name="contactNumber"
        rules={[{ required: true, message: "Please input the carbs value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="sex"
        label="Sex"
        rules={[{ required: true, message: "Please select sex!" }]}
      >
        <Select placeholder="select your sex">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item<FieldType>
        label="Date of Birth"
        name="dateOfBirth"
        rules={[{ required: true, message: "Please input the fat value!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Active State"
        name="activeState"
        rules={[{ required: true, message: "Please input the fiber value!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Create Client
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateClientPage;
