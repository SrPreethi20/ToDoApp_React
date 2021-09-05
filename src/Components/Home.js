import { useState } from "react"
import { connect } from 'react-redux'
import '../CSS/Home.css'

function Home(props) {
  const { userDetails } = props ;
  const[userName,setUserName] = useState("")

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const updateUserDetails = (e) => {
      e.preventDefault() ;
      userDetails(userName)
  }

  console.log(userName,"DATA")

  return (
    <div>
      <h2 className="heading" >Add User</h2>
          
      <form onSubmit={(e) => {updateUserDetails(e) ; props.history.push(`/userToDo`)}}>

        <label>User Name : </label><input type="text" name="username" onChange={handleUserName}></input><br></br>
        <button >Add User</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    userDetails : payload => dispatch({ type : "ADD_USER", payload})
  }
}

export default connect(null,mapDispatchToProps)(Home) ;
