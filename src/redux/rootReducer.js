import { combineReducers } from "redux";

import userReducer from './users/userReducer'
const rootReducer=combineReducers({
    allusers:userReducer
})
export default rootReducer;