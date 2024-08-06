import NextAuth, { Awaitable } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const Options = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_Secret!,
            
            profile(profile) {
              let userRole = "Google User";
              return {
                ...profile,
                id: profile.sub,
                role: userRole,
              };
            },
          }),
          CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: "Username", placehlder:'enter your email',type: "text"},
                password: {label: "Password", placeholder:'enter your password',type: "password"}
            },
            async authorize (credentials: {email: string, password: string}, req)  {
                    const res  = await fetch ('https://akil-backend.onrender.com/login',{
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: {'Content-Type': 'application/json'}
                    })
                    const user = await res.json();
                    if (user){
                        return user
                    }
                    else return null
            }

        })
        
    ],
    callbacks: {
        async jwt ({token, user}: { token: any, user: any }) {
            if (user) token.role = user.role;
            
            return token
        },
        async session({session, token}){

            if (session?.user) session.user.role = token.role
            return session
        }
    },
    pages:{
        signIn:'/signin'
    }
}