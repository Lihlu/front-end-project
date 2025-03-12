"use client";

import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Segmented } from "antd";
import { useAuthActions } from "@/providers/auth";
import {
  IClientRegistrationData,
  IRegistrationData,
} from "@/providers/auth/context";

const RegistrationForm: React.FC = () => {
  const [value, setValue] = useState("Trainer");
  const { registerTrainer, registerClient } = useAuthActions();

  const onFinish = (values) => {
    if (value === "Trainer") {
      const registrationData: IRegistrationData = {
        ...values,
        role: "admin",
        planType: "base",
        activeState: true,
        trial: false,
      };

      console.log(registrationData);
      registerTrainer(registrationData);
    } else {
      const clientRegData: IClientRegistrationData = {
        ...values,
        role: "client",
        dateOfBirth: "",
      };

      registerClient(clientRegData);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSegmentedChange = (value: string) => {
    setValue(value);
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
      <Form.Item label="Role:" name="role">
        <Segmented
          options={["Trainer", "Client"]}
          value={value}
          onChange={handleSegmentedChange}
        />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact Number"
        name="contactNumber"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="policiesAccepted" valuePropName="checked" label={null}>
        <Checkbox>I accept MyGym&apos;s policies</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create Account
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
