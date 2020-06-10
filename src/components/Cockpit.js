import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log("Cockpit: ", authContext.authenticated);

    // ComponentDidMount and ComponentDidUpdate combined
    useEffect(() => {
        console.log("Cockpit.js useEffect");
        // Http request...
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        // return () => {
            //     clearTimeout(timer);
            //     console.log("Cockpit.js cleanup work in useEffect");
            // }
            toggleBtnRef.current.click();
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
            ref={toggleBtnRef}
            className={btnClass}
            onClick={props.toggle}
            >   
            Show People 
            </button>
            {/* <AuthContext.Consumer>
                {(context) =><button onClick={context.login}> Log In </button>}
            </AuthContext.Consumer> */}
            {/* OR */}
            <button onClick={authContext.login}> Log In </button>
           
        </div>
    );
}

export default React.memo(Cockpit);