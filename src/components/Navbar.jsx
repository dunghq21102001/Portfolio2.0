import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/img/logo.png'

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <menu className={open
                ? 'fixed top-0 bottom-0 left-0 right-auto h-[100vh] w-[80%] md:w-[20%] bg-[#141414] text-white ease-in-out duration-200 transition-all z-50'
                : 'fixed left-[-100%] md:left-0 top-0 bottom-0 right-auto h-[100vh] w-[20%] bg-[#141414] text-white ease-in-out duration-200 transition-all z-50'}>
                <ul className='w-full h-[80%] sm:h-[60%] flex flex-col justify-around items-center'>
                    <Link to={'/'}>
                        <li className='w-full rounded-[44%] overflow-hidden' onClick={() => setOpen(!open)}>
                            <img src={logo} className='' alt='home Logo' />
                        </li>
                    </Link>
                    <Link to={'/about'}>
                        <li className='hover:text-red-400 lg:hover:translate-x-2 ease-out duration-75' onClick={() => setOpen(!open)}>
                            <h1>About</h1>
                        </li>
                    </Link>
                    <Link to={'/my-skills'}>
                        <li className='hover:text-red-400 lg:hover:translate-x-2 ease-out duration-75' onClick={() => setOpen(!open)}>
                            <h1>My Skills</h1>
                        </li>
                    </Link>
                    <Link to={'/experience'}>
                        <li className='hover:text-red-400 lg:hover:translate-x-2 ease-out duration-75' onClick={() => setOpen(!open)}>
                            <h1>Experience</h1>
                        </li>
                    </Link>
                    <Link to={'/contact'}>
                        <li className='hover:text-red-400 lg:hover:translate-x-2 ease-out duration-75' onClick={() => setOpen(!open)}>
                            <h1>Contact</h1>
                        </li>
                    </Link>
                </ul>
            </menu>
            <div onClick={() => setOpen(!open)} className='sm:hidden fixed right-3 top-3 z-50'>
                {open
                    ? <AiOutlineCloseCircle className='text-2xl text-white' />
                    : <AiOutlineMenu className='text-2xl text-white' />
                }
            </div>


        </>
    )
}

export default Navbar