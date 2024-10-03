import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor");  
    }

    componentDidMount(){
        // console.log("parent componentDidMount");     
    }

    render(){
        // console.log("Parent render");
        return(
            <div>
            <h1>About</h1>
            <div>LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser})=>(<p>{loggedInUser}</p>)}
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste react</h2>
            <User />
            {/* <UserClass name={"1st class"} location={"Hyderabad class"}/> */}
            </div>  
        )
    }
}


export default About;