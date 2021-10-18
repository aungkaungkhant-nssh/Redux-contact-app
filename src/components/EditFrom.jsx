
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import {  useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { useHistory, useParams } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from '../redux/users/userAction';

toast.configure();

const validationSchema=Yup.object({
    name:Yup.string().required("Name field is required"),
    email:Yup.string().email("Invalid Format").required("Email field is required"),
    phone:Yup.string().required("Phone field is required")
})
function EditFrom({id,name,email,phone}) {
    let history=useHistory();
    const dispatch=useDispatch()
    const onSubmit=data=>{
        dispatch(updateUser(id,data))
        history.push('/')
        toast.success("Update Contact Successfully!");
    }
    return (
        <div>
              <Formik 
             initialValues={
                 {
                     id,
                     name,
                     email,
                     phone
                 }
             }
             validationSchema={validationSchema}
             onSubmit={onSubmit}
             >
                {
                    formik=>{
                        return (
                            <Form>    
                                <div className="form-group">  
                                    <label htmlFor="">Name</label>
                                    <Field name="name" className="form-control">
                                    </Field>
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
                                    <Field name="phone" className="form-control" ></Field>
                                    <ErrorMessage name="phone">
                                        {
                                            errorMsg=><span className="text-danger">{errorMsg}</span>
                                        }
                                    </ErrorMessage>
                                </div>
                                <input type="submit" className="btn btn-sm btn-primary btn-block" value="Edit Contact"/>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default EditFrom
