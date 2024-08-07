import React from 'react';
import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
    const session = await getServerSession(Options)
  if (!session){
    redirect('/api/auth/signin?callbackUrl=/jobs')
  }
   console.log(session)
    return (
        <section>
            
                {children}

        </section>
    );
};

export default Layout;