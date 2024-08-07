'use client'
import React from 'react';
import { getServerSession } from "next-auth";
// import { Options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { useSession } from 'next-auth/react';
import AuthProvider from '@/Service/AuthProvider';

const Layout: React.FC<{ children: React.ReactNode }> =  ({ children }) => {

//    console.log(session)
    return (
        <AuthProvider>
        <section>
                {children}

        </section>
        </AuthProvider>
    );
};

export default Layout;