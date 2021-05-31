import React from "react";
import classes from '../Person/Person.module.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import PropTypes from "prop-types";




const Person = (props)=> {
 return(
//  <div className={classes.Person}>
    <Aux>
    <p onClick = {props.click}>I am {props.name} and my age is {props.age}</p> 
    <p>{props.children}</p>
    <input type= "text" onChange={props.changed} value={props.name} />
    </Aux>
//  </div>
 );
}

Person.propTypes = {
   click:PropTypes.func,
   name:PropTypes.string,
   age:PropTypes.number,
   changed:PropTypes.func
};

export default withClass(Person,classes.Person);