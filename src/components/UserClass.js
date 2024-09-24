import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.name + "Child Constructor");   
        this.state = {
            userInfo:{
                name : "Dummy",
                location : "Default"
            }
        } 
    }

    async componentDidMount(){
        // console.log("parent componentDidMount");  
        const data = await fetch("https://api.github.com/users/ankitasinha2618");
        const json = await data.json()
        this.setState({
            userInfo : json,
        })
        
        console.log(json);    
    }

    componentDidUpdate(){
        console.log("Componet Did Update called")
    }
    componentWillUnmount(){
        console.log("componentWillunmount called");
        
    }
    render(){
        // console.log(this.props.name+"Child render");
        const {name, location, avatar_url} = this.state.userInfo;
        return(
        <div className="user-card">
            <img src={avatar_url} style={{height:"200px"}}/> 
           <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @ankita2618</h4>
        </div>
        )
    }
}
export default UserClass;

/**
 * <----Mounting Phase--->
 * constructor called
 * render (dummy data)
 * <html (dummy data)>
 * componentdidMount called
 *   <API called>
 *   <this.state>
 * 
 * <----Update Phase--->
 * render(API data)
 * <html (api data)>
 * componentDidUpdate() called
 * 
 * <---Unmounting Phase--->
 * componentWillUnmount() called
 */