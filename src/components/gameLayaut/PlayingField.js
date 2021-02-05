import React, { Component } from "react";
import StatusBar from "../StatusBar";
import {
  chargeMyScore,
  chargeFail,
  chargeComplexity,
  changeTime
} from "actions/game";
import { connect } from "react-redux";
import mole from "assets/mole.png";

class PlayingField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3, 4, 5, 6],
      point: 0,
      showMole: false,
      timeToCatch: null,
      timeToCatchDef: null,
      color: "#e5e5e5",
      colorError: null,
      miss: false,
    };
  }
  componentDidMount() {
    this.generate();
  }
  generate() {
    this.generatePoint();
    this.timeReduction();
  }
  generatePoint = () => {
    const { score, time, changeTime } = this.props;
    let interval = setInterval(() => {
      let generate = Math.floor(Math.random() * 6);
      this.setState({
        showMole: true,

        point: generate
      });

      if (score % 10 === 9) {
        changeTime();
      }

      clearInterval(interval);
    }, time);
  };

  timeReduction = () => {
    const { time, chargeFail, score } = this.props;
    this.setState({ timeToCatch: time, timeToCatchDef: time });

    setTimeout(() => {
      let reductionInterval = setInterval(() => {
        let decrease;

        if (score === 100) {
          clearInterval(reductionInterval);
          this.props.setWinGame({value: true, score});
        } else if (this.props.fail === 3) {
          clearInterval(reductionInterval);
          this.props.setLoseGame({value: true, score});
        } else if (this.state.timeToCatch === 0) {
          clearInterval(reductionInterval);
          if(!this.state.miss){
            chargeFail();
            this.setState({miss: false})
          }
          setTimeout(() => {
            decrease = this.state.timeToCatchDef;
            this.setState({ showMole: false, timeToCatch: decrease });
          }, 500);
          this.generate();
        } else {
          decrease = this.state.timeToCatch - 20;
          this.setState({ timeToCatch: decrease, reductionInterval });
        }
      }, 20);
    }, time);
  };
  catchOrMiss = (item, point) => {
    const { reductionInterval } = this.state;
    if (item !== point && this.state.showMole) {
      this.setState({ colorError: item });
      setTimeout(() => {
        this.setState({ color: "#e5e5e5", colorError: null });
      }, 500);
      this.props.chargeFail();
      this.setState({miss:true})
    } else if (item === point && this.state.showMole) {
      this.props.chargeMyScore();
      if (this.props.score % 10 === 9) {
        this.props.chargeComplexity();
      }
      this.setState({ color: "green" });
      clearInterval(reductionInterval);

      setTimeout(() => {
        this.setState({ showMole: false, color: "#e5e5e5" });
      }, 500);
      this.generate();
    }
  };
  render() {
    const { arr, point, showMole, timeToCatch, color, colorError } = this.state;
    const { score, fail, complexity } = this.props;
    const green = {
      background: color
    };
    const gray = {
      background: "#e5e5e5"
    };
    const red = {
      background: "red"
    };
    return (
      <div className="palying-field">
        <div className="game-container">
          {arr.map((item, i) => {
            return (
              <div
                className="mole-field"
                key={item}
                style={i === colorError ? red : i === point ? green : gray}
                onClick={() => this.catchOrMiss(i, point)}
              >
                {showMole && i === point && (
                  <img
                    className="mole"
                    src={mole}
                    alt=""
                  />
                )}
              </div>
            );
          })}
        </div>
        <StatusBar
          score={score}
          fail={fail}
          timeToCatch={timeToCatch}
          complexity={complexity}
        />
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    score: store.score,
    fail: store.fail,
    complexity: store.complexity,
    time: store.time
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chargeMyScore: () => dispatch(chargeMyScore()),
    chargeFail: () => dispatch(chargeFail()),
    chargeComplexity: () => dispatch(chargeComplexity()),
    changeTime: () => dispatch(changeTime())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayingField);
