
import { SessionProvider } from "next-auth/react";
import react, {ReactNode} from "react";

interface props{
    children:ReactNode;
}

export default function ({children}:props){
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    )
}