import AuthProvider from '@/Service/AuthProvider';
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {

    return (
      <AuthProvider>
        <section>
            
                {children}

        </section>
        </AuthProvider>
    );
};

export default Layout;

