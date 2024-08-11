import NextAuth, { Awaitable, RequestInternal } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const Options = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_Secret!,
            
            profile(profile) {
              let userRole = "user";
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
            async authorize (credentials) {
                    const res  = await fetch ('https://akil-backend.onrender.com/login',{
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: {'Content-Type': 'application/json'}
                    })
                    const user = await res.json();
                    console.log(user)
                    if (user && res.ok){

                        // user['role'] = 'user'
                        return user
                    }
                    else return null
            }

        })
        
    ],
    callbacks: {
        async jwt ({token, user}: { token: any, user: any }) {
            if (user) {
                token.role = user.role;
                token.accessToken = user.data.accessToken;
                token.refreshToken = user.refreshToken;
                token.name = user.name;
              }
            
            return token
        },
        async session({session, token}:{session:any, token:any}){

            if (session?.user){ 
              session.user.role = token.role
              session.accessToken = token.accessToken
              session.refreshToken = token.refreshToken
              session.name = token.name
            }
            return session
        }
      // console.log(session, "when sesssion called");
      // return session;
    },
    pages:{
        signIn:'/signin',
        signUp:'/signup',
    }
}