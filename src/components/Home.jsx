import React from 'react'
import {Link} from 'react-router-dom'
import { FaEdit,FaTrash } from "react-icons/fa";
import {connect} from 'react-redux'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { deleteUser } from '../redux/users/userAction';
toast.configure();
function Home(props) {
    const {users,delUsers}=props;
    // const alert = useAlert()
    const deleteContact=(userid)=>{
        confirmAlert({
            title: 'Are you want to delete!',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    delUsers(userid)
                    toast.success("Delete Contact Successfully!")
                }
              },
              {
                label: 'No',
         
              }
            ]
          });
    }
    return (
        <div className="container mt-5">
             <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return (
                                    <React.Fragment key={user.id}>
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                                <Link to={`/editcontact/${user.id}`} className="btn btn-warning btn-sm mr-2 ">
                                                    <div className="d-flex align-items-center">
                                                        <FaEdit size={15}/>
                                                        <p className="mb-0 ml-1">Edit</p>
                                                    </div>
                                                    
                                                </Link>
                                                <button className="btn btn-danger btn-sm mr-2" onClick={()=>deleteContact(user.id)}>
                                                    <div className="d-flex align-items-center">
                                                        <FaTrash size={15}/>
                                                        <p className="mb-0 ml-1">Delete</p>
                                                    </div>
                                                    
                                                </button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                   
                                )
                            })
                        }
                       
                    </tbody>
            </table>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        users:state.allusers.users
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        delUsers:(userId)=>dispatch(deleteUser(userId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
