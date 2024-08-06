import Image from "next/image";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Options } from "./api/auth/[...nextauth]/options";
export default async function page() {
  const session = await getServerSession(Options);
  return (
    <main className="m-0">
      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/">logout</Link>
      ) : (
        <>
          <Link href="/api/auth/signin">sign in</Link>
          <Link href="/api/auth/signup"> sign up</Link>
        </>
      )}
    </main>
  );
}
