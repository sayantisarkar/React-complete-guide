import React, { Component } from 'react';
import './App.css';
import Person from "./components/Person";
import Radium from 'radium';

// function App() {
//   return (
//     <div className="App">
//      <h1>Hiiiii Pooja</h1>
//      <p>Are you there??</p>
//      <Person name="Ria" age="29"/>
//      <Person name="Jia" age="21">My hobbies are cooking and dancing</Person>
//      <Person name="Tina" age="27"/>
//     </div>
//   );
// }

class App extends Component {
  //defining state
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
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    
    // this.setState({
    //   persons:[
    //     {id: "agdg1" , name:event.target.value , age:"29"},
    //     {id: "schc12" ,name:"Jia" , age:"21"},
    //     {id: "dijoj4" ,name:"Tina", age:"27"}
    //   ]
    // })

    //DYNAMIC CHANGE IN NAME & MODIFYING ARRAY //FLEXIBLE LISTS
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
   //const persons = this.state.persons;
   //const persons = this.state.persons.slice; // copies array
   const persons = [...this.state.persons]; //spread operator: ES6
   persons.splice(index,1);
   this.setState({
     persons : persons
   })
  }

  render () {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if(this.state.showPersons){
      persons = (
      <div>
       {this.state.persons.map((person,index)=>{
         return <Person click= {()=> this.deletePersonHandler(index)} 
         name = {person.name} 
         age={person.age} 
         key={person.id}
         changed = {(event)=>this.switchNamehandler(event,person.id)}
         />
       })}


      {/* <Person 
        name= {this.state.persons[0].name}
        age= {this.state.persons[0].age} />
      <Person 
        name= {this.state.persons[1].name}
        age= {this.state.persons[1].age} />
      <Person 
        name= {this.state.persons[2].name}
        age= {this.state.persons[2].age} /> */}
      </div>
      );
      style.backgroundColor ='red';
    }
    const classes = [];

    if(this.state.persons.length<=2){
      classes.push('red');
    }

    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return ( 
      <div className="App">
      <h1>Hiiiii Pooja</h1>
      <p className={classes.join(" ")}>Are you there??</p>
      <button style={style} 
      // onClick={()=>this.switchNamehandler('Sayanti')}
      onClick={this.togglePersonHadler}
      >
      Switch Name</button>
      {persons}
      
      {/* {this.state.showPersons?
      <div>
      <Person 
        name= {this.state.persons[0].name}
        age= {this.state.persons[0].age} />
      <Person 
        name= {this.state.persons[1].name}
        age= {this.state.persons[1].age} />
      <Person 
        name= {this.state.persons[2].name}
        age= {this.state.persons[2].age} />
      </div> : null} */}
    

      {/* <Person name="Ria" age="29"/>
      <Person name="Jia" age="21">My hobbies are cooking and dancing</Person>
      <Person name="Tina" age="27"/> */}
     </div>
     );
  }
   
  
}

export default Radium(App);
