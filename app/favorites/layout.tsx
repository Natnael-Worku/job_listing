"use client";
import React from "react";
import { redirect } from "next/navigation";
import AuthProvider from "@/Service/AuthProvider";
import { useSession } from "next-auth/react";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 
  return (
    <AuthProvider>
      <section>{children}</section>
    </AuthProvider>
  );
};

export default Layout;
