import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

// ES6 syntax
class Person extends React.Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
    //     this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log("Person: ", this.context.authenticated);
    }

  

    render(){
        console.log("Person.js is rendering...");
        const {name, age} = this.props;
        return (
            // <div className={classes.Person}>
            <Auxiliary>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p> Authenticated </p> : <p> Please log in </p>}
                </AuthContext.Consumer> */}
                 {/* OR */}
                 {this.context.authenticated ? ( <p> Authenticated </p> ) : ( <p> Please log in </p> )}
                {/* {this.props.isAuth ? <p> Authenticated </p> : <p> Please log in </p>} */}
                <p onClick={this.props.click} >I am {name} and I am {age} years old! </p>
                {/* 'children' refers to any elements (including plain text) nested between the opening and closing tags of the Component */}
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}} // special property that can be passed into any component
                    ref={this.inputElementRef}
                    type="text"
                    value={this.props.name}
                    onChange={this.props.nameChange}
                />
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    nameChange: PropTypes.func
};

export default withClass(Person, classes.Person);