import React,{ useState, useEffect, useContext } from 'react'
import { AppContext } from '../App';
import { addNewTask, getTasks, updateTask, deleteTask } from '../firebase/taskController'
import { motion, AnimatePresence } from "framer-motion"
import toast from 'react-hot-toast';

const TaskList = () => {
  const [task, setTask] = useState( {title:"", description:""} )
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState("add");

  const { user } = useContext(AppContext)

  const createNewTask = async () => {
    if(task.title === "" ) return toast(`La tarea debe tener un titulo`);
    await addNewTask(task, user).catch(e => console.log("Error"));
    setTask({title:"", description:""})
    initializeTasks();
  }

  const updateExistingTask = async () => {
    if(task.title === "" || (task.title === "" && task.description === "")) return toast(`Los campos estan vacios o le falta un titulo a la tarea`);
    await updateTask(task, user);
    setTask({title:"", description:""})
    initializeTasks();
    setMode("add");
  }

  const initializeTasks = () => {
    if(user){
      getTasks(user)
          .then(t => setTasks([...t]))
          .catch((e) => console.error(e));
    }
  }

  const editTask = (id) => {
    setMode("update");
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask({...taskToEdit})
  }

  const removeTask = async (id) => {
    await deleteTask(id,user)
    initializeTasks();
  }

  useEffect(() => {
    initializeTasks();
  }, [])
   
  return (
    <div>
        <h1 className='text-sky-700 font-semibold text-lg'>Bienvienido a tu lista de tareas</h1>
        <div className='flex flex-col gap-4'>
            <h2>Introduce una nueva tarea</h2>
            <input 
                type="text" 
                value={task.title}
                placeholder="Titulo"
                disabled={!user}
                className='border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1
                w-full'
                onChange={e => setTask({ ...task,title: e.target.value })}
            />
            <textarea 
                type="text" 
                rows={3}
                value={task.description}
                placeholder="Descripción"
                disabled={!user}
                className='border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1
                w-full'
                onChange={e => setTask({...task,
                description: e.target.value
                })}

            />
            <button 
              className='bg-sky-400 disabled:bg-sky-200 text-white shadow rounded py-1 hover:bg-sky-500 transition font-semibold'
              disabled={!user}
              onClick={() => 
                mode === "add" ? createNewTask() : updateExistingTask()
              }
            >
              {mode === "add" ? "Añadir" : "Actualizar"}
            </button>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                {tasks.map((task) => (
                  <AnimatePresence
                    mode='wait'
                    >
                    <motion.div 
                      key={task.id} 
                      className='rounded-lg border border-sky-300 p-4 flex flex-col gap-2'
                      layout
                      initial={{opacity:0, scale:0.5}}
                      animate={{opacity:5, scale:1}}
                      transition={{ type: "spring" }}
                    >
                        <h1 className='font-semibold'>{task.title}</h1>
                        <div className='border-t border-sky-300'></div>
                        <p>{task.description}</p>
                        <div className='flex justify-between'>
                            <button 
                                className='bg-sky-400 text-white py-1 px-2 rounded hover:bg-sky-500 transition'
                                onClick={() => editTask(task.id)}
                            >
                                Editar
                            </button>
                            <button 
                                className='bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700 transition'
                                onClick={() =>
                                  toast((t) => (
                                    <span>
                                      <h2>¿Esta seguro de eliminar esta tarea?</h2>
                                      <div className='flex justify-between mt-3'>
                                        <button 
                                          className='bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700 transition' 
                                          onClick={() => removeTask(task.id)}
                                        >
                                          Si
                                        </button>
                                        <button 
                                          className='bg-sky-400 text-white py-1 px-2 rounded hover:bg-sky-500 transition' 
                                          onClick={() => toast.dismiss(t.id)}
                                        >
                                          No
                                        </button>
                                      </div>
                                      
                                    </span>
                                  ))
                                
                                 }
                            >
                                Eliminar
                            </button>
                        </div>
                        
                    </motion.div>
                  </AnimatePresence>
                ))}
            </div>
        </div>
        {!user && (
          <p className='text-red-600'>
            Necesitas estar logueado para poder leer y añadir tareas
          </p>
        )}
    </div>
  )
}

export default TaskList