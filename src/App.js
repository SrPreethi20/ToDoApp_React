import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AddToDo from "./Components/AddToDo";
import ListToDo from "./Components/ListToDo";
import Home from "./Components/Home";

import './CSS/App.css'

function App(props) {

  return (
    <div className="mainDiv" >
      <BrowserRouter>
      <div className="subDiv" >
        <div >User ToDo App</div>
        <Link to="/" ><div className="link" >Home</div></Link>
      </div>
          <Route exact path="/" component={Home} />
          <Route path="/userToDo" render={ (routeProps) => <AddToDo {...routeProps} />} />
          <Route path="/userToDo" render={ (routeProps) => <ListToDo {...routeProps} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
