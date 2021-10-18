
import React,{useEffect} from 'react'
import { connect } from 'react-redux'

import { updateUser } from '../redux/users/userAction'
import { useHistory, useParams } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import EditFrom from './EditFrom'
toast.configure();



function EditContact(props) {
    let [editUser,setEditUser]=useState({});

    let history = useHistory();
    let {id}=useParams();
    useEffect(()=>{
       let edit= props.users.find((user)=>{
            return user.id==id;
        })
        setEditUser({...edit})
         
    },[id])
    
  
    return (
        <div className="container mt-5">
           {
               editUser.name && <EditFrom {...editUser}/>
           }
        </div>
       
    )
}
const mapStateToProps=state=>{
    return {
        users:state.allusers.users
    }
}

export default  connect(mapStateToProps)(EditContact)
