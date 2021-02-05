import { useEffect } from 'react';
import { connect } from 'react-redux';
import startGame from 'assets/StartGame.jpg';
import { browserHistory } from "index";
import { getScore } from 'actions/game'


const StartGame = ({setStartGame, getScore}) => {
  useEffect(() => {
    getScore()
  }, []);
  const letsStartOurGame = () => {
    setStartGame({ start: true, lose: false, win: false, score: 0, fail: 0, time: 1000 })
  }
  return (
    <div>
      <div className="game-container container-start-game">
        <h1>Let's catch the mole</h1>
        <img src={startGame} alt="startgame" />
        <div className='btn-container'>
          <button onClick={() => letsStartOurGame()}>Start</button>
          <button onClick={() => browserHistory.push('/logout')}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {getScore})(StartGame)
