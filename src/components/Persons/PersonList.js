import React from 'react';
import Person from './Person/Person';

const PersonsList = (props) => {
    return(
        props.people.map((person, index) => {
            return(
              <Person 
                key={person.id}
                name={person.name} 
                age={person.age}
                click={() => props.clicked(index)}
                nameChange={(event) => props.changed(event, person.id)}
              />
            )
        })
    );
}

export default PersonsList;