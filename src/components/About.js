import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

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
            <h2>This is Namaste react</h2>
            <User />
            {/* <UserClass name={"1st class"} location={"Hyderabad class"}/> */}
            </div>  
        )
    }
}


export default About;