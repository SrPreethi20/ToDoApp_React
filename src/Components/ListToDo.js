import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import '../CSS/ToDo.css'

function ListToDo(props) {
    const { ToDos,toggleToDo } = props ;

    const [toDoList, setToDoList] = useState([])
    const [filter,setFilter] = useState("noFilter")

    useEffect(() => {
        setToDoList(ToDos)
    },[ToDos])

    console.log(toDoList,"TO DO List")

    return(
        <div>
            <div>
                {toDoList.length > 0 && 
                <ul>
                    {filter == "noFilter" && toDoList.map((item,ind) => <div className="div">
                        <li key={ind} >
                            <input type="checkbox" checked={item.completed} onChange={() => toggleToDo(item.id)} ></input> {item.title}
                        </li>
                    </div>)}
                    {filter == "All" && toDoList.map((item,ind) => <div className="div">
                        <li key={ind} >
                            <input type="checkbox" checked={item.completed} onChange={() => toggleToDo(item.id)} ></input> {item.title}
                        </li>
                    </div>)}
                    {filter == "Active" && toDoList.filter(item => !item.completed).map((item,ind) => <div className="div">
                        <li key={ind} >
                            <input type="checkbox" checked={item.completed} onChange={() => toggleToDo(item.id)} ></input> {item.title}
                        </li>
                    </div>)}
                    {filter == "Completed" && toDoList.filter(item => item.completed).map((item,ind) => <div className="div">
                        <li key={ind} >
                            <input type="checkbox" checked={item.completed} onChange={() => toggleToDo(item.id)} ></input> {item.title}
                        </li>
                    </div>)}
                </ul>}

                <div className="filterDiv" >
                    <button onClick={(e) => setFilter("All")} >All</button>
                    <button onClick={(e) => setFilter("Active")} >Active</button>
                    <button onClick={(e) => setFilter("Completed")} >Completed</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ToDos : state.userToDo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleToDo : id => dispatch({ type: "TOGGLE_TODO",payload : id }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListToDo)