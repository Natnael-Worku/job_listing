import React from 'react';
import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
    const session = await getServerSession(Options)
   
    console.log(session,"session from layout")
  if (!session){
    redirect('/api/auth/signin?callbackUrl=/jobs')
  }
    return (
        <section>
            
                {children}

        </section>
    );
};

export default Layout;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjI2MTZhZDdjYTkwYjVlNGViNDI2YSIsInJvbGUiOiJVc2VyIiwicHJvZmlsZVN0YXR1cyI6ImluY29tcGxldGUiLCJleHAiOjE3MjM0ODEyMzF9.JF9Fi1gVZkrgLhd-HkO0TvtiCxnJti17QdXjb0uyMKM

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjI2MTZhZDdjYTkwYjVlNGViNDI2YSIsInJvbGUiOiJVc2VyIiwicHJvZmlsZVN0YXR1cyI6ImluY29tcGxldGUiLCJleHAiOjE3MjM0ODEyMzF9.JF9Fi1gVZkrgLhd-HkO0TvtiCxnJti17QdXjb0uyMKM