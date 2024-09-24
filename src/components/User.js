import { useEffect, useState } from "react";

const User = (props) =>{
    const [count, setCount] = useState(0);    
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Namaste react OP"); 
        },1000);
        console.log("use effect");
        
        //to destroy or cleanup setinterval after changed the page
        return ()=>{
            clearInterval(timer)
            console.log("use effect return");
            
        }

    },[count]);
    return(
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Location: Hyderabad</h3>
            <h4>Contact: @ankita2618</h4>
        </div>
    )
}

export default User;