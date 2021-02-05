import { useEffect } from 'react';
import { connect } from 'react-redux'
import lose from 'assets/lose.png'
import { setScore } from 'actions/game'

const LoseGame = ({setStartGame, bestScore, currentScore, setScore}) => {
  useEffect(() => {
    console.log(currentScore, bestScore.count)
    if(currentScore > bestScore.count){
      setScore({id: bestScore._id, count: currentScore})
    }
  },[currentScore, currentScore])

  const letsTryAgain = () => {
    setStartGame({ start: true, lose: false, win: false, score: 0, fail: 0, time: 1000 })
  }
  const returnToMenu = () => {
    setStartGame({ start: false, lose: false, win: false, score: 0, fail: 0, time: 1000 })
  }
  return (
    <div className="game-container game-lose">
      <h1>LOOOOSER</h1>
      <img src={lose} alt="" />
      <div className="btn-container lose-btns">
        <button onClick={() => letsTryAgain()}>Try again</button>
        <button onClick={() => returnToMenu()}>Return to menu</button>
      </div>
    </div>
  )
}

const mapStateToProps = store => ({
  bestScore: store.bestScore,
  currentScore: store.currentScore
})

export default connect(mapStateToProps, {setScore})(LoseGame)

