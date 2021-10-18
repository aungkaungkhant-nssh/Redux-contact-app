import { ErrorMessage, Field, Form, Formik } from 'formik'
import React,{useState} from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { addUser } from '../redux/users/userAction'
import { useHistory } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const initialValues={
    name:"",
    email:"",
    phone:""
}
const validationSchema=Yup.object({
    name:Yup.string().required("Name field is required"),
    email:Yup.string().email("Invalid Format").required("Email field is required"),
    phone:Yup.string().required("Phone field is required")
})



function AddContact(props) {
    let history = useHistory();
    const onSubmit=values=>{
        const newUsers={...values,id:props.users.length+1};
        props.addUser(newUsers);
        history.push("/");
        toast.success("Add Contact Successfully!");
    }
    return (
        <div className="container mt-5">

             <Formik 
             initialValues={initialValues}
             validationSchema={validationSchema}
             onSubmit={onSubmit}
             >
                {
                    formik=>{
                        return (
                            <Form>
                                
                                <div className="form-group">  
                                    <label htmlFor="">Name</label>
                                    <Field name="name" className="form-control"></Field>
                                    <ErrorMessage name="name">
                                        {
                                            errorMsg=><span className="text-danger">{errorMsg}</span>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <Field name="email" className="form-control"></Field>
                                    <ErrorMessage name="email">
                                        {
                                            errorMsg=><span className="text-danger">{errorMsg}</span>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Phone</label>
                                    <Field name="phone" className="form-control"></Field>
                                    <ErrorMessage name="phone">
                                        {
                                            errorMsg=><span className="text-danger">{errorMsg}</span>
                                        }
                                    </ErrorMessage>
                                </div>
                                <input type="submit" className="btn btn-sm btn-primary btn-block" value="Add Contact"/>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
       
    )
}
const mapStateToProps=state=>{
    return {
        users:state.allusers.users
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        addUser:(newUser)=>dispatch(addUser(newUser))
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(AddContact)
