import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

   state = {
      person : [
        {name:'sandy',msg:'am a programmer'},
         {name:'stark',msg:'am an inventor'}
      ],
      showPerson : false
    }

  toggleHandler = () =>{
    const doeshow = this.state.showPerson;
    this.setState({showPerson:!doeshow});
  }
  changeHandler = (event) =>{
    this.setState({
      person:[
        {name:event.target.value, msg:'am a programmer'},
        {name:'stark', msg:'am an inventor'}
      ]
    })
  }

  deleteHandler = (personindex) => {
    const persons=this.state.person;
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
                           changed={this.changeHandler}
          />
        }) }
        </div>

         
           /* <div>
            <Person name={this.state.person[0].name} msg={this.state.person[0].msg}
                    changed={this.changeHandler}/>
            <Person name={this.state.person[1].name} msg={this.state.person[1].msg}
                    changed={this.changeHandler}>I am an Avenger Do you ?</Person>
          </div>  */
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
