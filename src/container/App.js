import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClass from '../hoc/withClass';
import withClass from '../hoc/withClass';



class App extends Component {

  state = {
    persons:[
      {id: "agdg1",name:"Ria" , age:"29"},
      {id: "schc12",name:"Jia" , age:"21"},
      {id: "dijoj4",name:"Tina", age:"27"}
    ],
    otherState:'some other value',
    showPersons: false,
    showCockpit: true,
    counter:0

  }

  switchNamehandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id 
    });
    const person ={...this.state.persons[personIndex]};
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons :persons
    });

    this.setState((prevState, props)=>{
      return {
          persons :persons,
          counter: prevState+1 // this.state.counter + 1 -->incorrect
      };
    });

  }

  togglePersonsHandler = ()=>{
    console.log('Toggled');
    const doShow = this.state.showPersons;
    this.setState({
      showPersons: !doShow
    })
  }

  deletePersonHandler =(index)=>{
   const persons = [...this.state.persons];
   persons.splice(index,1);
   this.setState({
     persons : persons
   })
  }

  render () {

    let persons = null;
    if(this.state.showPersons){
      persons = (
      <div>
       <Persons 
       persons= {this.state.persons}
       clicked= {this.deletePersonHandler}
       changed= {this.switchNamehandler} />
      </div>
      );
    }
     

    return ( 
      // <WithClass className={classes.App}>
      <div className={classes.App}>
      <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}> Remove Cockpit
      </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      {/* </WithClass> */}
      </div>
      );     
  } 
  
}

export default App;
