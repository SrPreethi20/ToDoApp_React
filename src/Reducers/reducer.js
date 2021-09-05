import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import UserToDoReducer from './UserToDoReducer'

export default combineReducers({
    userDetails : UserReducer ,
    userToDo : UserToDoReducer ,
})