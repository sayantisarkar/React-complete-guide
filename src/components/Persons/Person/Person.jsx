import React, {useRef, useContext} from "react";
import classes from '../Person/Person.module.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import PropTypes from "prop-types";
import AuthContext from '../../context/auth-context';





const Person = (props)=> {
   //Refernce in functional
   const inputElementRef = useRef(null);
   const authContext = useContext(AuthContext); //functional component style

   // class Person extends Component {
   //    constructor(props){
   //       super(props);
   //       this.inputElementRef = React.createRef();
   //    }

   //    static contextType = AuthContext; // new way
   // }

 return(
//  <div className={classes.Person}>
    <Aux>
    <AuthContext.Consumer>
        { (context)=>
          context.authenticated? <p>Authenticated</p>: <p>Please log in again !</p>
        }
    </AuthContext.Consumer>
    {/* {this.context.authenticated}? //new way */}
    <p onClick = {props.click}>I am {props.name} and my age is {props.age}</p> 
    <p>{props.children}</p>
    <input ref={inputElementRef} type= "text" onChange={props.changed} value={props.name} />
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