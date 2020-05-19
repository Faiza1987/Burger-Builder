import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      // JSX
      <div className="App">
        <h1>Hi, I am a React App </h1>
        <p> This is actually working </p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29"> 
          {/* 'child' of Person. Anything can go here (Components, plain text, other HTML elements, plain text, etc.) */}
          My Hobbies are: Drag racing 
        </Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'));
  }
}

export default App;
