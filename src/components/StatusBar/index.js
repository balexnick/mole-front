import { connect } from 'react-redux';

const StatusBar = ({score, fail, complexity, timeToCatch, bestScore}) => (
  <div className='game-container'>
    <div className='status-bar'>
      <h1>Status Bar</h1>
      <p>Game difficult:{complexity}</p>
      <p>Score:{score}</p>
      <p>Best Score: {bestScore.count}</p>
      <p>Your failed: {fail} / 3</p>
      <p>Time: {timeToCatch} ms</p>
    </div>
  </div>
)

const mapStateToProps = store => ({
  bestScore: store.bestScore
})

export default connect(mapStateToProps)(StatusBar);
