import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component {

   // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  //equivalent to memo in functional component
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
    // return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

render() {
    return <AuthContext.Consumer>
    { (context)=> this.props.persons.map((person,index)=>{
        return (
        <Person click= {()=> this.props.clicked(index)} 
         name = {person.name} 
         age={person.age} 
         key={person.id}
         changed = {(event)=>this.props.changed(event,person.id)}/>
        );
     })
   }
    </AuthContext.Consumer>
   
  }
}

export default Persons;