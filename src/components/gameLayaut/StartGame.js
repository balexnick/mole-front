import React, { Component } from 'react';
import startGame from 'assets/StartGame.jpg';
import { browserHistory } from "index";

class StartGame extends Component {
  letsStartOurGame = () => {
    this.props.setStartGame({ start: true, lose: false, win: false, score: 0, fail: 0, time: 1000 })
  }
  render() {
    return (
      <div>
        <div className="game-container container-start-game">
          <h1>Let's catch the mole</h1>
          <img src={startGame} alt="startgame" />
          <div className='btn-container'>
            <button onClick={this.letsStartOurGame}>Start</button>
            <button onClick={() => browserHistory.push('/logout')}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}
export default StartGame;
