import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste react</h2>
            <User name={"Ankita Sinha function"}/>
            <UserClass name={"Ankita Sinha class"}/>
        </div>
    )
}

export default About;