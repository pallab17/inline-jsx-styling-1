import React from "react";
import ReactDOM from "react-dom";

// using js object to style instead of inline styling -->
 const customStyle = {
   color:"yellow",
   fontSize:"20px",
   border : "1px solid red"


 };

 // now suppose we want to change the color pf h1 using js object we have created i.e. customStyle --> sudden iccha holo
customStyle.color = "red";


 ReactDOM.render(<h1 style={customStyle}
>Hello World!</h1>, document.getElementById("root"));


// using inline css to color h1
// ReactDOM.render(<h1 style={{color:"red"}}
// >Hello World!</h1>, document.getElementById("root"));
 
/*  style={{color:"red"}}
eikhane {color:"red"} hocche ekta js object/value jeta style ke dite hobe/required by style property

and that js object

in order for it to be interpreted correctly inside

an HTML element, has to have a set of curly braces around it. 

{ 
  key: value 
  value ta inverted comma r modhe thakbe
  i.e. "red"
  color :"red"   --> js object 
}


eibar ekta jsn object r modhe 
css property use korte chaile
we have to use camelcasing

eg .. font-size : 20px; --> font-size take kebab style bole
we can write this in css file

but if we want to use this css property in js object
we have to write like -->
fontSize : "20px";





*/
