import React, { useContext } from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import { BsCartFill, BsList } from 'react-icons/bs'
import { AppContext } from '../App'

const Footer = () => {
  const { setRoute } = useContext(AppContext)  
  return (
    <footer className='flex justify-evenly items-center fixed h-16 w-full bg-sky-400 bottom-0'>
        <div className='hover:bg-sky-50 transition bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer'
            onClick={() => setRoute("home")}>
            <IoHomeSharp />
        </div>
        <div className='hover:bg-sky-50 transition bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer'
            onClick={() => setRoute("shopping")}>
            <BsCartFill />
        </div>
        <div className='hover:bg-sky-50 transition bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer'
            onClick={() => setRoute("taskList")}>
            <BsList />
        </div>
    </footer>

  )
}

export default Footer