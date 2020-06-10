import React, { Component } from 'react';
import classes from './App.css';
import PersonsList from '../components/Persons/PersonList';
import Cockpit from '../components/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

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
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

    // recommended if not depending on previous state
    // this.setState({
    //   people: persons
    // });

    // when you need previous state
    this.setState((prevState, props) => {
      return {
        people: persons,
        changeCounter: prevState.changeCounter + 1
      };
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

  loginHandler = () => {
    this.setState({
      authenticated: true
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
            // isAuthenticated={this.state.authenticated}
          />
    };

    return (
      <Auxiliary>
        <button 
          onClick={
            () => { 
              this.setState({ 
                showCockpit: !this.state.showCockpit 
              })
          }}> 
          Hide Cockpit 
        </button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            peopleLength={this.state.people.length}
            toggle={this.togglePersonsHandler}
            // login={this.loginHandler}
          /> : null}
          { persons }
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
