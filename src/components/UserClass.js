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
        this.state = {
            count : 0,
        }
        this.state = {
            timer : 0
        }
    }

    componentDidMount(){
       this.timer = setInterval(()=>{
        console.log("Namaste react OP"); 
       },1000);
    }

    componentDidUpdate(prevprops, prevState){
        //After every update
        if(this.state.count === prevState.count){
            //
        }
        if(this.state.count === prevState.count){
            //
        }
        console.log("Componet Did Update called")
    }
    componentWillUnmount(){
        console.log("componentWillunmount called");
        clearInterval(this.timer);    
    }
    render(){
        // console.log(this.props.name+"Child render");
        // const {name, location, avatar_url} = this.state.userInfo;
        const {count} = this.state;
        return(
        <div className="user-card">
            {/* <img src={avatar_url} style={{height:"200px"}}/> 
           <h2>Name: {name}</h2>
            <h3>Location: {location}</h3> */}
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