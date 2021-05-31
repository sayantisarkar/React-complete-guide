import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';


const Cockpit = props=> {

  useEffect(() => {
    //ref.current.click  //reference
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

    const assignedClasses = [];
    let buttonClass = '';

    if(props.showPersons){
        buttonClass = classes.Red;
    }

    if(props.personLength<=2){
      assignedClasses.push(classes.red);

    }
    if(props.personsLength<=1){
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
        <AuthContext.Consumer>
          { (context)=>{
            <button onClick={context.login}>
              Login
            </button>
            }
          }
        </AuthContext.Consumer>
       
    </div>
        
    );
        
};

export default React.memo(Cockpit);