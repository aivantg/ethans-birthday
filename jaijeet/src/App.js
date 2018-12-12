import React, { Component } from 'react';
import jaijeet from './img/jr-1.jpg';
import jaijeet_pre from './img/jr-2.png';
import da from './img/da.jpeg';
import './App.css';

import { createStore } from 'redux'
import jrApp from './reducers/main'
const store = createStore(jrApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.___0xjr = store;



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    store.dispatch({
      "type": "init",
      "callback": (function () { this.setState({jaijeetUnlocked: true}); }).bind(this)
    })

    this.hints = [
      <div className="hint">
        "To get a a better understanding before the lecture, please read the handwritten <a href="https://tinyurl.com/yb6es5o3" target="_blank">notes</a>, not just the slides."
      </div>
    ]
  }

  render() {
    const initial = this.state.jaijeetUnlocked ? null : (
      <header className="App-header">
            <p>
              In Store Now
            </p>
          <img src={da} onMouseOver={e => (e.currentTarget.src = jaijeet_pre)}
                        onMouseOut={e => (e.currentTarget.src = da)}/>
          <p>$49.99</p>
        </header>
    );
    const jaijeet_c = this.state.jaijeetUnlocked ? (
      <header className="App-header">
            <div className="Big">
              <p>Find me.</p>
            </div>
          <img src={jaijeet} />
        </header>
    ) : null;
    return (
      <div className="App">
        {initial}
        {jaijeet_c}
      </div>
    );
  }
}

export default App;
