import lose from 'assets/lose.png'

const LoseGame = (props) => {
  const letsTryAgain = () => {
    const { setStartGame } = props
    setStartGame({ start: true, lose: false, win: false, score: 0, fail: 0, time: 1000 })
  }
  const returnToMenu = () => {
    const { setStartGame } = props
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

export default LoseGame

