import {ADD_USER, UPDATE_USER,DELETE_USER}from './userType'

export const addUser=(newUsers)=>{
    return {
        type:ADD_USER,
        payload:newUsers,
    }
}
export const deleteUser=(id)=>{
    return {
        type:DELETE_USER,
        payload:id
    }
}
export const updateUser=(id,data)=>{
    return {
        type:UPDATE_USER,
        payload:{id,data},
    }
}