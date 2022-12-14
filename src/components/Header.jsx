import React, { useContext } from 'react'
import { FaTasks } from 'react-icons/fa'
import { AppContext } from '../App';
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth();


const Header = () => {
  const { setRoute, user, setUser } = useContext(AppContext);
  const hazLogout = () => {
    signOut(auth).then(() => {
        setRoute("login")
        setUser(null)
        toast("Usuario ha hecho logout") 
      }).catch((error) => {
        console.error(error);
      });
  }
  return (
    <header className='fixed top-0 h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8'>
        <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute("home")}>
          <FaTasks className='text-2xl text-pink-600' />
          <span className='text-xl font-semibold text-pink-600'>FireTasks</span>
        </div>
        <div className='flex gap-2'>
            {user ? 
              <>
                <p>{user.email}</p>
                <button className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'
                          onClick={hazLogout}>Logout</button>
              </>
            :
            <>
                <button 
                    className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'
                    onClick={() => setRoute("login")}
                >
                    Login
                </button>
                <button
                    className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'
                    onClick={() => setRoute("register")}
                >
                    Register
                </button>
            </>
            }
        </div>
    </header>
  )
}

export default Header