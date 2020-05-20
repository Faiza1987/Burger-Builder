import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    people: [
      {name: "Max", age: "28"},
      {name: "Manu", age: "29"},
      {name: "Stephanie", age: "26"},
    ],
    otherState: 'some other value'
  }

  switchNameAgeHandler = (newName) => {
    this.setState({
      people: [
        {name: "Maximillian", age: 28},
        {name: "Manu", age: 29},
        {name: newName, age: 27},
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      people: [
        {name: "Maximillian", age: 28},
        {name: event.target.value, age: 29},
        {name: "Stephanie", age: 26},
      ]
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: '#fffafa',
      font: 'inherit',
      border: '2px solid red',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      // JSX
      <div className="App">
        <h1>Hi, I am a React App </h1>
        <p> This is actually working </p>

        <button 
          onClick={() => this.switchNameAgeHandler()}
          style={buttonStyle}
        > 
          Switch Name 
        </button>

        <Person 
          name={this.state.people[0].name} 
          age={this.state.people[0].age} 
        />
        <Person 
          name={this.state.people[1].name} 
          age={this.state.people[1].age}
          click={this.switchNameAgeHandler.bind(this, "STEPHANIE")}
          nameChange={this.nameChangeHandler}
        > 
          {/* 'child' of Person. Anything can go here (Components, plain text, other HTML elements, plain text, etc.) */}
          My Hobbies are: Drag racing 
        </Person>
        <Person 
          name={this.state.people[2].name} 
          age={this.state.people[2].age}
        />
      </div>
    );
  }
}

export default App;
