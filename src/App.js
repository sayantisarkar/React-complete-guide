import React, { Component } from 'react';
import './App.css';
import Person from "./components/Person";

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
      {name:"Ria" , age:"29"},
      {name:"Jia" , age:"21"},
      {name:"Tina", age:"27"}
    ],
    otherState:'some other value',
    showPersons: false
  }

  switchNamehandler = (newName)=>{
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons:[
        {name:newName , age:"29"},
        {name:"Jia" , age:"21"},
        {name:"Tina", age:"27"}
      ]
    })
  }

  togglePersonHadler = ()=>{
    console.log('Toggled');
    const doShow = this.state.showPersons;
    this.setState({
      showPersons: !doShow
    })
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if(this.state.showPersons){
      persons = (
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
      </div>
      );
    }

    return ( 
      <div className="App">
      <h1>Hiiiii Pooja</h1>
      <p>Are you there??</p>
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

export default App;
