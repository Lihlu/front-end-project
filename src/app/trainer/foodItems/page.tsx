"use client";

import React, { useEffect } from "react";
import type { TableColumnsType } from "antd";
import { Select, Table } from "antd";
import { useFoodItemActions, useFoodItemState } from "@/providers/foodItem";

interface DataType {
  key: string;
  name: string;
  category: string;
  servingSize: number;
}

const FoodItemsPage: React.FC = () => {
  let token = "";

  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
  }

  const { foodItems } = useFoodItemState();
  const { getAllFoodItems, getFoodItemsByCategory } = useFoodItemActions();

  useEffect(() => {
    getAllFoodItems(token);
  }, []);

  if (!foodItems) {
    return <h1>No food items found</h1>;
  }

  const dataSource: DataType[] = foodItems.map((foodItem, index) => {
    const data: DataType = {
      key: index.toString(),
      name: foodItem.name,
      category: foodItem.category,
      servingSize: foodItem.servingSize,
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
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Serving Size",
      dataIndex: "servingSize",
      key: "servingSize",
    },
  ];

  const handleCategoryChange = (value: string) => {
    if (value === "all") {
      getAllFoodItems(token);
    } else {
      getFoodItemsByCategory(token, value);
    }
  };

  return (
    <>
      <span>
        <p>Category: </p>
        <Select
          defaultValue="All"
          onChange={(value) => {
            handleCategoryChange(value);
          }}
          style={{ width: 200 }}
          options={[
            { label: <span>All</span>, value: "all" },
            { label: <span>Veg</span>, value: "veg" },
            { label: <span>Meat</span>, value: "meat" },
          ]}
        />
      </span>
      <Table<DataType> columns={columns} dataSource={dataSource} />
    </>
  );
};

export default FoodItemsPage;
