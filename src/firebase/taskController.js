// Aqui se crearan las operaciones del CRUD
import { db } from './index';
import { doc, collection, addDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

export const addNewTask = async (task, user) => {
    await addDoc(collection(db, `tasks ${user.email}`), {
        title: task.title,
        description: task.description
    });
}

export const getTasks = async (user) => {
    const querySnapshot = await getDocs(collection(db, `tasks ${user.email}`))
    const tasks = querySnapshot.docs.map(doc => {
        return{ ...doc.data(), id:doc.id }
    });
    return tasks;
}

export const updateTask = async (task) => {
    await setDoc(doc(db, 'tasks', task.id), {
        title: task.title,
        description: task.description
    })
}

export const deleteTask = async (id) => {
    await deleteDoc(doc(db,'tasks', id))
}
