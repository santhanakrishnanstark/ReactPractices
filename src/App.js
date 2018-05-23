import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className='rc'>This is React Js</h2>
        <Person name='Sandy' msg='Am a Programmer'/>
        <Person name='Stark' msg='Am an Inventor'>I am an Avenger Do you ?</Person>
      </div>
    );
  }
}

export default App;
