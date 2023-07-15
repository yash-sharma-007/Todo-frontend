import { useContext } from 'react';
import {Context} from '../index'
export const Profile = ()=>{  
    const {user}=useContext(Context) 
    return (
        <div>
        <h1 style={{textAlign:'center', margin:'20px auto'}} >  {user.name} </h1>
        </div>
    );
};