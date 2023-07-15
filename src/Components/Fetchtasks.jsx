// import { useState,createContext } from "react";
// import { server } from "..";
// import { toast } from "react-hot-toast";

// export const TaskContext=createContext();

// const Fetchtasks = (props) => {
//   const IntialTask = []
//   const [Task, setTask] = useState(IntialTask)

  // Get all Notes
  // const getTask = async () => {
  //   // API Call 
  //   const response = await fetch(`${server}/task/getMyTask`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     }
  //   });
  //   const data = await response.json() 
  //   setTask(data)
  // }

  // Add a Note
  // const addTask = async (title, description) => {
  //   const response = await fetch(`${server}/task/new`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     },
  //     body: JSON.stringify({title, description})
  //   });
  //    const data= await response.json();
  //   if(data.success){
  //     toast.success(data.message);
  //   }
  //   else{
  //     toast.error(data.message);
  //   }

  // }

  // Delete a Note
  // const daleteTask = async (id) => {
  //   // API Call
  //   const response = await fetch(`${server}/task/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     }
  //   });
  // }

  // Edit a Note
  // const updateTask = async (id) => {
  //   // API Call 
  //   const response = await fetch(`${server}/task/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     },
  //     body: JSON.stringify({title, description})
  //   });
  //   const data = await response.json(); 

  //    let newTask = JSON.parse(JSON.stringify(Task))
    
  //   for (let index = 0; index < newTask.length; index++) {
  //     const element = newTask[index];
  //     if (element._id === id) {
  //       newTask[index].title = title;
  //       newTask[index].description = description;
  //       break; 
  //     }
  //   }  
  //   setTask(newTask);
  // }

//   return (
//     <TaskContext.Provider value={{ Task,getTask, addTask, daleteTask, updateTask }}>
//       {props.children}
//     </TaskContext.Provider>
//   )

// }
// export default Fetchtasks;