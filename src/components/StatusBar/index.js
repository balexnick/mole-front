import React, { Component } from 'react';
class StatusBar extends Component {
  render() {
    const { score, fail, complexity, timeToCatch } = this.props
    return (
      <div className='game-container'>
        <div className='status-bar'>
          <h1>Status Bar</h1>
          <p>Game difficult:{complexity}</p>
          <p>Score:{score}</p>
          <p>Your failed: {fail} / 3</p>
          <p>Time: {timeToCatch} ms</p>
        </div>
      </div>
    )
  }
}

export default StatusBar;
