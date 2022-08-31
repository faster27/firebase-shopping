import React from 'react'

const Home = () => {
  return (
    <div className='items-center flex flex-col'>
        <h1 className='text-4xl font-semibold text-sky-700'>Bienvenido a FireTasks</h1>
        <div className='shadow bg-sky-300 rounded-lg py-3 px-3 mt-5'>
          <p className='font-semibold text-center'>Bienvenido a la pagina web donde podras administrar tus tareas, en FireTasks podras añadir y eliminar tus tareas y asi 
          tener un control sobre ellas para que nunca te olvides de que debes hacer.</p>
        </div>
    </div>
  )
}

export default Home