import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    // ComponentDidMount and ComponentDidUpdate combined
    useEffect(() => {
        console.log("Cockpit.js useEffect");
        // Http request...
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log("Cockpit.js cleanup work in useEffect");
        }
    }, []);

    useEffect(() => {
        console.log("Cockpit.js 2nd useEffect");
        return () => {
            console.log("Cockpit.js cleanup work in 2nd useEffect");
        }
    });
    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.peopleLength <= 2){
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }

    if(props.peopleLength <= 1){
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
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

export default React.memo(Cockpit);