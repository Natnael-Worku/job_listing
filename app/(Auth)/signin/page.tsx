import React from "react";
import { Col, Row } from "antd";
import Login from "@/components/Login";

const page = () => {
  return (
    <Row justify={"center"} align={"middle"} className="h-screen">
      <div className="w-[55%]">
        {" "}
        <Login />
      </div>
    </Row>
  );
};

export default page;
