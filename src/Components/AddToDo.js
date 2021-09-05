import { useState } from 'react';
import { connect } from 'react-redux'
import '../CSS/ToDo.css'

function AddToDo(props) {

    let { user, addToDo } = props ;
    console.log(props)

    const [toDo,setToDo] = useState("")

    const handleToDo = e => {
        setToDo(e.target.value)
    }

    const handleAddToDo = () => {
        addToDo({title:toDo,user:user});
        setToDo("");
    } 

    return(
        <div>
            {user && <div className="container" >User : {user} </div>}
            <div>
                <h2 className="header" >Things To Do !!!</h2>
                <div>
                    <input className="input" type="text" placeholder="Enter ToDo Here ..." value={toDo} onChange={handleToDo}></input>
                    <input style={{float: "right",width: "17%"}} type="date" ></input> 
                    <input className="button" type="button" value="ADD" onClick={(e) => { handleAddToDo(e)}}></input>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user : state.userDetails ,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToDo : payload => dispatch({ type : "ADD_TODO", payload})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddToDo)
