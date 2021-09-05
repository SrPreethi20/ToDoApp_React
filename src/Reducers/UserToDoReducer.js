import { act } from "react-dom/test-utils"

export default function(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO' : {
            if(action.payload) {
                // console.log([...state,{id: state.length + 1,title: action.payload, completed : false}],"To DO added in store")
                // return [...state,{id: state.length + 1,title: action.payload, completed : false}]
                console.log([...state,{...action.payload,id: state.length + 1,completed:false}],"USER TO DO")
                return [...state,{...action.payload,id: state.length + 1,completed:false}]
            } else {
                return state
            }
        }
        case 'TOGGLE_TODO' : {
            return state.map(item => {
                if(item.id == action.payload) {
                    return {...item,completed : !item.completed}
                } else {
                    return item
                }
            })
        }
        case 'ALL' : {
            return state
        }
        case 'COMPLETED' : {
            return state.filter(item => item.completed)
        }
        case 'ACTIVE' : {
            return state.filter(item => item.completed == false)
        }

        default : {
            return state
        }
    }
}