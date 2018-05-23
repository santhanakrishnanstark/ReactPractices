import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

   state = {
      person : [
        {name:'sandy',msg:'am a programmer'},
         {name:'stark',msg:'am an inventor'}
      ]
    }

  reactHandler = () =>{
   
  }
  changeHandler = (event) =>{
    this.setState({
      person:[
        {name:event.target.value, msg:'am a programmer'},
        {name:event.target.value, msg:'am an inventor'}
      ]
    })
  }

  render() {
    return (
      <div className='container'>
        <h2 className='rc'>This is React Js</h2>
        <button onClick={this.reactHandler}>React</button>
        <Person name={this.state.person[0].name} msg={this.state.person[0].msg}
                changed={this.changeHandler}/>
        <Person name={this.state.person[1].name} msg={this.state.person[1].msg}
                changed={this.changeHandler}>I am an Avenger Do you ?</Person>
      </div>
    );
  }
}

export default App;
