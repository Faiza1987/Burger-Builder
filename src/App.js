import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    people: [
      {id: 25435, name: "Max", age: 28},
      {id: 85785, name: "Manu", age: 29},
      {id: 78967, name: "Stephanie", age: 26},
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameAgeHandler = (event, id) => {
    const personAtIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.people[personAtIndex]
    }
    // OR
    // const person = Object.assign({}, this.state.people[personAtIndex]);

    person.name = event.target.value;
    const persons = [...this.state.people];
    persons[personAtIndex] = person;

    this.setState({
      people: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // makes a copy of people array in state
    const persons = [...this.state.people];
    persons.splice(personIndex, 1);
    this.setState({
      people: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.people.map((person, index) => {
              return(
                <Person 
                  key={person.id}
                  name={person.name} 
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  nameChange={(event) => this.switchNameAgeHandler(event, person.id)}
                />
              )
            })
          }
        </div>
      );
    };

    let classes = [];
    if(this.state.people.length <= 2){
      classes.push('red'); // classes = ['red']
    }

    if(this.state.people.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App! </h1>
        <p className={classes.join(' ')}> This is really working! </p>
        <button
          className='buttonStyle'
          onClick={this.togglePersonsHandler}
        >   
          Show People 
        </button>
        { persons }
      </div>
    );
  }
}

export default App;
