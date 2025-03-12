"use client";

import React, { useEffect } from "react";
import type { TableColumnsType } from "antd";
import { Table } from "antd";
import {
  useClientManagementActions,
  useClientManagementState,
} from "@/providers/clientManagement";
import { useAuthState } from "@/providers/auth";

interface DataType {
  key: string;
  name: string;
  email: string;
  contactNumber: string;
  sex: string;
}

const App: React.FC = () => {
    let token = "";
    useEffect(() => {
        if (typeof window !== "undefined"){

            token = sessionStorage.getItem("token") ;
        }

    }, [])
    
  const { user } = useAuthState();
  const { clients } = useClientManagementState();
  const { getClients } = useClientManagementActions();

  useEffect(() => {
    getClients(token, user.id);
  }, [clients]);

  if (!clients) {
    return <h1>No clients found</h1>;
  }

  const dataSource: DataType[] = clients.map((client, index) => {
    const data: DataType = {
      key: index.toString(),
      name: client.fullName,
      email: client.email,
      contactNumber: client.contactNumber,
      sex: client.sex,
    };

    return data;
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "contactNumber",
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
    },
  ];

  return <Table<DataType> columns={columns} dataSource={dataSource} />;
};

export default App;
