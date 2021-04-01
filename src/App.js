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

class App extends Component(){
  //defining state
  state = {

  }

  render () {
    return ( 
      <div className="App">
      <h1>Hiiiii Pooja</h1>
      <p>Are you there??</p>
      <Person name="Ria" age="29"/>
      <Person name="Jia" age="21">My hobbies are cooking and dancing</Person>
      <Person name="Tina" age="27"/>
     </div>
     );
  }
   
  
}

export default App;
