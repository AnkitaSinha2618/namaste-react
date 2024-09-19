import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
        
    }

    componentDidMount(){
        console.log("parent componentDidMount");
        
    }

    render(){
        console.log("Parent render");
        
        return(
            <div>
            <h1>About</h1>
            <h2>This is Namaste react</h2>
            {/* <User name={"Ankita Sinha function"}/> */}
            <UserClass name={"1st class"} location={"Hyderabad class"}/>
            <UserClass name={"2nd class"} location={"Hyderabad class"}/>
            <UserClass name={"3rd class"} location={"Hyderabad class"}/>
            </div>  
        )
    }
}

// const About = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste react</h2>
//             {/* <User name={"Ankita Sinha function"}/> */}
//             <UserClass name={"Ankita Sinha class"} location={"Hyderabad class"}/>
//         </div>
//     )
// }

export default About;