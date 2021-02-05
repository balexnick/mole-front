import React, { Component } from 'react';
import win from 'assets/win.jpg'

class WinGame extends Component {
  letsTryAgain = () => {
    const { setStartGame } = this.props
    setStartGame({ start: true, lose: false, win: false, score: 0, fail: 0, time: 1000 })
  }
  returnToMenu = () => {
    const { setStartGame } = this.props
    setStartGame({ start: false, lose: false, win: false, score: 0, fail: 0, time: 1000 })
  }
  render() {
    return (
      <div className="game-container game-win">
        <h1>YOOOHOOOOOOOOOOO!</h1>
        <img src={win} alt="" />
        <div className="lose-btns">
          <button onClick={this.letsTryAgain}>Try again</button>
          <button onClick={this.returnToMenu}>Return to menu</button>
        </div>
      </div>
    );
  }
}

export default WinGame;

