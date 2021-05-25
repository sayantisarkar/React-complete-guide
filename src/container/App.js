import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  state = {
    persons:[
      {id: "agdg1",name:"Ria" , age:"29"},
      {id: "schc12",name:"Jia" , age:"21"},
      {id: "dijoj4",name:"Tina", age:"27"}
    ],
    otherState:'some other value',
    showPersons: false
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

  }

  togglePersonHadler = ()=>{
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
      <div className={classes.App}>
        <Cockpit 
          clicked ={this.togglePersonHadler}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
        />
        {persons}
      </div>
      );     
  } 
  
}

export default App;
