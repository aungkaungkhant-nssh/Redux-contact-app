import {ADD_USER, DELETE_USER,UPDATE_USER}from './userType'
const initialStates={
    loading:false,
    users:[
        {
            id:1,
            name:"Aung Kaung Khant",
            email:"akkgit0909@gmail.com",
            phone:"09261804445"
        },
        {
            id:2,
            name:"Nan Su San Htike",
            email:"nssh123@gmail.com",
            phone:"09453843347"
        },
        {
            id:3,
            name:"Mg Mg",
            email:"mgmg123@gmail.com",
            phone:"09000000"
        },
    ]
}

const userReducer=(state=initialStates,action)=>{
       switch(action.type){
           case ADD_USER:
               return {users:[...state.users,action.payload]};
            case DELETE_USER:
                const delUsers=state.users.filter((user)=>{
                    return user.id !==action.payload;
                })
                return {users:[...delUsers]};
            case UPDATE_USER:
              
                let updateUser=state.users.map((user)=>{
                    if(user.id == action.payload.id){
                        return user={...action.payload.data}

                    }
                    return user;
                })
                return {users:[...updateUser]}
           default:return state;
       }
}
export default userReducer;