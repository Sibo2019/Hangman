//import some components required for the project 
import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.js';
import Button from 'react-bootstrap/Button';
import {EmojiFrown, EmojiSmile} from 'react-bootstrap-icons';

//import images 
import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";
import step7 from "./images/7.jpg";
import step8 from "./images/8.jpg";
import step9 from "./images/9.jpg";
import step10 from "./images/10.jpg";

class Hangman extends Component {

  // default prop to load images and  var for Maximum 'wrongs' for the guesses
  static defaultProps = {
    maxWrong: 10,
    images: [step0, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10]
  }

// state prop
  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  }

// Envent handler for guesses
  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    
  }

// split, array.Map() method and then  Generates buttons for each letter
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }
// resets game 
  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  }

  //render output
  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

  // uses if statement for win/lose 
    if (isWinner) {
      gameStat = <h2>Congratulations, You won< EmojiSmile color="blue" size={25}/></h2> 
    }

    if (gameOver) {
      gameStat = <h2>Sorry, you lost< EmojiFrown color="red" size={25}/></h2> 
      
    }
<br/>
    return (
      <div className="Hangman container">
        <h1 className='text-center'>Hangman</h1>
        <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt=""/>
        </div>
        
        <div className="text-center">
          <p>Guess the Country:</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          <br/>
          <Button className='btn btn-danger' onClick={this.resetButton}>Restart game</Button>
        </div>
      </div>
    )
  }
}

export default Hangman;

// Reference:
// watched this video tutorial for help and modified the code
// https://www.youtube.com/watch?v=82-Gnw-rBiQ