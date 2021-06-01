import React,{createContext,useState,useEffect} from 'react'
import {firebase} from './firebase';
export const MyContext=createContext({user:'',setUser:''}) 

function AuthContext(props) {
    const [user,setUser]=useState('');
    useEffect(()=>{
    initialLoad();
    },[])
    const initialLoad=()=>{
        firebase.auth().onAuthStateChanged(async(user)=>{
            setUser(user)

        })
    }
    return (
        <MyContext.Provider value={{user,setUser}}>
            {props.children}

        </MyContext.Provider>
    )
}

export  {AuthContext}
