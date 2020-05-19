import React from 'react';

// ES6 syntax
const person = (props) => {
    const {name, age} = props;
    return (
        <div>
            <p>I am {name} and I am {age} years old! </p>
            {/* 'children' refers to any elements (including plain text) nested between the opening and closing tags of the Component */}
            <p>{props.children}</p>
        </div>
    );
}

export default person;