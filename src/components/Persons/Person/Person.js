import React from 'react';
import classes from './Person.css';

// ES6 syntax
class Person extends React.Component {
    render(){
        console.log("Person.js is rendering...");
        const {name, age} = this.props;
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click} >I am {name} and I am {age} years old! </p>
                {/* 'children' refers to any elements (including plain text) nested between the opening and closing tags of the Component */}
                <p>{this.props.children}</p>
                <input 
                    type="text"
                    value={this.props.name}
                    onChange={this.props.nameChange}
                />
            </div>
        );
    }
}

export default Person;