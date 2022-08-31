import React, { useState, useContext } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import { AppContext } from '../App';
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

const auth = getAuth();

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRoute, setUser } = useContext(AppContext);
  const creaUsuario = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('user', user)
        toast(`Usuario ${email} registrado correctamente`)
        setUser(user);
        setRoute("home")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
  }
  const handleSubmit = e => {
    e.preventDefault();
    creaUsuario();
  }
  return (
    <div className="flex flex-col gap-4 items-center">
        <h1 className="text-sky-600 font-semibold text-center">
            Registrate para obtener acceso a la mejor app de tareas del mundo
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
            
          <div className="relative mb-1">
            <div className="flex absolute inset-y-0 left-0 items-center p-1">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-500 dark:text-gray-400 pt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><MdEmail/></svg>
            </div>
            <input type="text"  className="border border-gray-500 rounded py-1 px-2 outline-none pl-8 pb-1" placeholder="Email"/>
          </div>

          {/* <input className='border border-gray-500 rounded py-1 px-2 outline-none' placeholder='Email' type="email" value={email} onChange={e => setEmail(e.target.value)}/>  */}
          {/* <input className='border border-gray-500 rounded py-1 px-2 outline-none' placeholder='Password' type="text" value={password} onChange={e => setPassword(e.target.value)}/> */}
          <div className="relative mb-1">
            <div className="flex absolute inset-y-0 left-0 items-center p-1">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-500 dark:text-gray-400 pt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><RiLockPasswordFill/></svg>
            </div>
            <input type="text"  className="border border-gray-500 rounded py-1 px-2 outline-none pl-8 pb-1" placeholder="Password"/>
          </div>
          
          <button className='bg-sky-400 py-1 text-white rounded shadow'>Registrarse</button>
            
        </form>
    </div>
  )
}

export default Register