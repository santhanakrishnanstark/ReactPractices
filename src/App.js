import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

   state = {
      person : [
        {id:'01', name:'sandy',msg:'am a programmer'},
        {id:'02',name:'stark',msg:'am an inventor'}
      ],
      showPerson : false
    }

  toggleHandler = () =>{
    const doeshow = this.state.showPerson;
    this.setState({showPerson:!doeshow});
  }
  changeHandler = (event,id) =>{
    
    const personindex = this.state.person.findIndex(p=>{
      return p.id === id;
    });
    const person = {
      ...this.state.person[personindex]
    };

    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personindex] = person;

    this.setState({  person: persons })
  }

  deleteHandler = (personindex) => {
    //const persons=this.state.person;
    const persons = [...this.state.person] // it will create a new array of elements 
    persons.splice(personindex,1);
    this.setState({ person : persons});
  }

  render() {

    let person = null; 
    if(this.state.showPerson){
      person = (
        <div>
        { this.state.person.map((person,index) =>{
          return <Person click={()=>this.deleteHandler(index)}
                           name={person.name} msg={person.msg} 
                           changed={(event)=> this.changeHandler(event,person.id)}
                           key={person.id}
          />
        }) }
        </div>
      );
    }

    return (
      <div className='container'>
        <h2 className='rc'>This is React Js</h2>
        <button onClick={this.toggleHandler}>React</button>
        {person}
         
      </div>
    );
  }
}

export default App;
