import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", 
{id:'heading', xyz:'abc'}, //to add attributes in H1 tag
"Hello world from React!");


const parent = React.createElement("div",{id:"parent"}, 
    [React.createElement("div", {id:"child"},
    [
        React.createElement("h1", {}, "This is namaste react "), 
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {id:"child"},
    [
        React.createElement("h1", {}, "I am h1 tag"), 
        React.createElement("h2", {}, "I am h2 tag")
    ])])

console.log(parent); //javascript objects
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);