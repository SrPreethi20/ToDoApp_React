export default function UserReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_USER' : {
            console.log(action.payload)
            return action.payload
        }
        default : {
            return state
        }
    }
}