import React from "react";

const Person = (props)=> {
 //return <p>I am a person and I am {Math.floor(Math.random()*30)} years old</p>;
 return(
 <div>
 <p>I am {props.name} and my age is {props.age}</p> 
 <p>{props.children}</p>
 </div>
 );
}

export default Person;