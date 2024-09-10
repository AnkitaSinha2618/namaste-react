import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const number = 10000; //js code inside jsx
const element = <span>React Element</span> //React element in jsx
const Title = () => (<h1 id="heading" className="head">
    {element}
    Namaste React using JSX
    </h1>
    ); //React element inside jsx

//Functional component
const HeadingComponent = () =>(
    <div id="container">
        <Title/>
        <h2>{number * number}</h2>  
        {console.log(number)} 
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

