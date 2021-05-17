import React from "react";
import './Person.css';

const Person = (props)=> {
 //return <p>I am a person and I am {Math.floor(Math.random()*30)} years old</p>;
 return(
 <div className="Person">
 <p onClick = {props.click}>I am {props.name} and my age is {props.age}</p> 
 <p>{props.children}</p>
 <input type= "text" onChange={props.changed} value={props.name} />
 </div>
 );
}

export default Person;