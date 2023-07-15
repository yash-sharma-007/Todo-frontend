import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
export const server = "https://todo-qqd5.onrender.com/api/v1";
export const Context=createContext();
const Temp = () =>{

  const [token,settoken]=useState("");
  const [user,setuser]=useState({});
  return (
    <Context.Provider value={{user,setuser,token,settoken}}>
       <App />
    </Context.Provider>
  )
}
root.render(
  <React.StrictMode>
     <Temp/>
  </React.StrictMode>
);

