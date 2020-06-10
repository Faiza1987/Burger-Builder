import React, { PureComponent } from 'react';
import Person from './Person/Person';

class PersonsList extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log("PersonList.js getDerivedStateFromProps");
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("PersonList.js shouldComponentUpdate");
    //     if(
    //         nextProps.people !== this.props.people || 
    //         nextProps.changed !== this.props || 
    //         nextProps.clicked !== this.props.clicked){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("PersonList.js getSnapshotBeforeUpdate");
    }

    componentDidUpdate(){
        console.log("PersonList.js componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("PersonList.js componentWillUnmount");
    }
    render(){
        console.log("PersonList.js is rendering...");
        return(
            this.props.people.map((person, index) => {
                return(
                  <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    nameChange={(event) => this.props.changed(event, person.id)}
                  />
                )
            })
        );

    }
}

export default PersonsList;