import React from 'react'
import Link from 'next/link'
import {FaSearch} from 'react-icons/fa'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link href='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>

                <span className='text-slate-500'>Eden</span>
                <span className='text-slate-700'>Estates</span>

            </h1>
            </Link>

            <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='Search...' className='bg-transparent text-black focus:outline-none w-24 sm:w-64' />
                <button>
                    <FaSearch className='text-slate-600' />
                </button>
            </form>
            <ul className='flex gap-4'>
                <Link href='/'>
                    <li className='hidden md:inline text-slate-700 hover:underline'>
                        Home
                    </li>
                </Link>
                <Link href='/about'>
                    <li className='hidden md:inline text-slate-700 hover:underline'>
                        About
                    </li>
                </Link>
                <Link href='/signin'>
                    <li className='hidden md:inline text-slate-700 hover:underline'>
                        Sign in
                    </li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header