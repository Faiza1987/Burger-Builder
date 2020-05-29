import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv =  styled.div`
    width: 60%;
    margin: 16px auto;
    border: 2px solid #eee;
    box-shadow: 0 3px 4px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: '450px'
    }
`

// ES6 syntax
const person = (props) => {
    const {name, age} = props;
    return (
        <StyledDiv>
            <p onClick={props.click} >I am {name} and I am {age} years old! </p>
            {/* 'children' refers to any elements (including plain text) nested between the opening and closing tags of the Component */}
            <p>{props.children}</p>
            <input 
                type="text"
                value={props.name}
                onChange={props.nameChange}
            />
        </StyledDiv>
    );
}

export default person;