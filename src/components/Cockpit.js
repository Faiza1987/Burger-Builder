import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.people.length <= 2){
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }

    if(props.people.length <= 1){
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a React App! </h1>
            <p className={assignedClasses.join(' ')}> This is really working! </p>
            <button
            className={btnClass}
            onClick={props.toggle}
            >   
            Show People 
            </button>
        </div>
    );
}

export default Cockpit;