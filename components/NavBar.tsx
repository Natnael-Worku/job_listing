import { Options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react'

const NavBar = async () => {
    
  const session = await getServerSession(Options);
return (
    <div className='flex justify-between py-6'>

        <div className='tetx-4xl font-bold text-[#4640DE] px-3'>
            Akil
        </div>

        <div className='flex gap-4'>
            {session ? (
                <Link className='border border-[#4640DE] rounded-xl py-2 px-4  transition duration-300 hover:bg-[#4640DE] hover:text-white' href="/api/auth/signout?callbackUrl=/">logout</Link>
            ) : (
                <>
                    <Link className='hover:bg-[#4640DE] hover:text-white py-2 px-4 rounded-xl transition duration-300' href="/signin">sign in</Link>
                    <Link className='border border-[#4640DE] rounded-xl py-2 px-4  hover:bg-[#4640DE] hover:text-white transition duration-300' href="/signup"> sign up</Link>
                </>
            )}
        </div>

    </div>
)
}

export default NavBar