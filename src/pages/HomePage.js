import { connect } from 'react-redux'
import { setStartGame, setLoseGame, setWinGame } from 'actions/game'
import StartGame from 'components/gameLayaut/StartGame'
import PlayingField from 'components/gameLayaut/PlayingField'
import LoseGame from 'components/gameLayaut/LoseGame'
import WinGame from 'components/gameLayaut/WinGame'

const Homepage = (props) => {
  const func = () => {
    const { startGame, setStartGame, loseGame, setLoseGame, winGame, setWinGame } = props
    switch (true) {
      case startGame && !loseGame && !winGame:
        return (<PlayingField setLoseGame={setLoseGame} setWinGame={setWinGame} />)
      case startGame && loseGame && !winGame:
        return (<LoseGame setStartGame={setStartGame} />)
      case startGame && !loseGame && winGame:
        return (<WinGame setStartGame={setStartGame} />)
      default:
        return (<StartGame setStartGame={setStartGame} />)
    }
  }
  return (
    <div>
      {func()}
    </div>
  );
}

const mapStateToProps = store => ({
  startGame: store.startGame,
  loseGame: store.loseGame,
  winGame: store.winGame
})

const mapDispatchToProps = {
  setStartGame,
  setLoseGame,
  setWinGame
}
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

