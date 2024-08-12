"use client";
import React from "react";
import AuthProvider from "@/Service/AuthProvider";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 
  return (
    <AuthProvider>
      <section>{children}</section>
    </AuthProvider>
  );
};

export default Layout;
