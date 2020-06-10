import React, { Component } from 'react';
import classes from './App.css';
import PersonsList from '../components/Persons/PersonList';
import Cockpit from '../components/Cockpit';

class App extends Component {
  constructor(props){
    super(props);

    console.log("App.js constuctor");
  }
  state = {
    people: [
      {id: 25435, name: "Max", age: 28},
      {id: 85785, name: "Manu", age: 29},
      {id: 78967, name: "Stephanie", age: 26},
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  // will be deprecated
  static getDerivedStateFromProps(props, state){
    console.log("App.js getDerivedStateFromProps", props);
    return state;
  }

  // deprecated
  // componentWillMount(){
  //   console.log("App.js componentWillMount");
  // }

  // will be deprecated
  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("App.js shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(){
    console.log("App.js componentDidUpdate");
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
    console.log("App.js render");
    let persons = null;

    if(this.state.showPersons){
      persons = <PersonsList
            people={this.state.people}
            clicked={this.deletePersonHandler}
            changed={this.switchNameAgeHandler}
          />
    };

    return (
      <div className={classes.App}>
        <button 
          onClick={
            () => { 
              this.setState({ 
                showCockpit: !this.state.showCockpit 
              })
          }}> 
          Hide Cockpit 
        </button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          peopleLength={this.state.people.length}
          toggle={this.togglePersonsHandler}
        /> : null}
        { persons }
      </div>
    );
  }
}

export default App;
