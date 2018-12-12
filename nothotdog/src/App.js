import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 1,
      showWinScreen: false,
      showLoseScreen: false
    };

    this.maxIndex = 34;

    this.correctAnswers = {
      1: false,
      2: true,
      3: false,
      4: true,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false,
      19: false,
      20: false,
      21: false,
      22: true,
      23: false,
      24: false,
      25: false,
      26: false,
      27: true,
      28: false,
      29: false,
      30: false,
      31: false,
      32: false,
      33: false,
      34: true
    };
  }

  vote = vote => {
    return () => {
      if (vote === this.correctAnswers[this.state.currentIndex]) {
        // Successful vote
        toast.success("Congrats! You're not a nerd!");
        if (this.state.currentIndex === this.maxIndex) {
          // Render victory
          this.setState({ currentIndex: 1, showWinScreen: true });
          return;
        }
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      } else {
        toast.error("Bad @<AW3XY03E>! I kick u, nerd.");
        // Unsuccessful, start over
        this.setState({ currentIndex: 1, showLoseScreen: true });
      }
    };
  };

  renderWinScreen() {
    return (
      <div className="screen win-screen">
        <p>Hey congrats, this is your clue: NERD hahaha</p>
        <button
          className="button win-reset-button"
          onClick={() => {
            this.setState({ showWinScreen: false });
          }}
        >
          Play Again
        </button>
      </div>
    );
  }

  renderLoseScreen() {
    return (
      <div className="screen lose-screen">
        <p>YOU LOSE. Try again, nerd.</p>
        <button
          className="button lose-reset-button"
          onClick={() => {
            this.setState({ showLoseScreen: false });
          }}
        >
          Try Again, Nerd
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <header className="App-header">
          <img
            id="main"
            src={`./images/file-${this.state.currentIndex}.jpg`}
            alt="nerd"
          />
          {this.state.showWinScreen && this.renderWinScreen()}
          {this.state.showLoseScreen && this.renderLoseScreen()}
          <div className="question">IS THIS A NERD</div>
          <div className="button-container">
            <button onClick={this.vote(true)} className="button nerd-button">
              NERD
            </button>
            <button
              onClick={this.vote(false)}
              className="button not-a-nerd-button"
            >
              NOT A NERD
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
