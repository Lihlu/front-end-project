"use client";

import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { ILoginData } from "@/providers/auth/context";
import { useAuthActions, useAuthState } from "@/providers/auth";
import { useRouter } from "next/navigation";
import {useStyles} from "./styles/style";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const { isSuccess } = useAuthState();
  const { loginUser } = useAuthActions();
  const router = useRouter();
  const {user} = useAuthState();
  const {styles} = useStyles();

  const onFinish: FormProps<FieldType>["onFinish"] = (values: ILoginData) => {
    console.log("Success:", values);

    loginUser(values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  
  if (isSuccess) {
    if (user.role === "admin"){
      router.push("/trainer");
    }else {
      router.push("/client");
    }
  }

  return (<div className={styles.landingContainer}>
    <h1 className={styles.header}>Login</h1>
    <Form
      name="basic"
      className={styles.loginForm}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" className={styles.loginButton}>
          Login
        </Button>
      </Form.Item>
    </Form></div>
  );
};
export default LoginForm;
