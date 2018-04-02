import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation/Validation';
import CharComponent from './components/Char/Char';

class App extends Component {
  state =  {
    userInput: ''
  }

  inputChangeHandler = (event) => {

    this.setState({
      userInput: event.target.value
    });
  }

  removeLetterHandler = (id) => {
    const text = this.state.userInput.split('');
    text.splice(id, 1);
    const newText = text.join('');

    this.setState({userInput: newText});
  }

  render() {
    const characterList = this.state.userInput.split('').map( (character, index) => {
      return <CharComponent letter={character} key={index} remove={() => this.removeLetterHandler(index)}/>
    })

    return (
      <div className="App">
        <input type="text" value={this.state.userInput} onChange={(event) => this.inputChangeHandler(event)} />
        <p>{this.state.length}</p>
        <Validation length={this.state.userInput.length}/>
        { characterList }
      </div>
    );
  }
}

export default App;