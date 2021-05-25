import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = props=> {

    const assignedClasses = [];
    let buttonClass = '';

    if(props.showPersons){
        buttonClass = classes.Red;
    }

    if(props.persons.length<=2){
      assignedClasses.push(classes.red);

    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold);
    }

    return (
    <div className={classes.Cockpit}>
        <h1>Hiiiii Pooja</h1>
        <p className={assignedClasses.join(" ")}>Are you there??</p>
        <button className= {buttonClass}
            onClick= {props.clicked}>
            Switch Name
        </button>
    </div>
        
    );
        
};

export default cockpit;