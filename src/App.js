import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      hasPower: false,
      showResult: false,
      result: 0,
      invalid: false
    }
  }

  getPower = () => {
    let isInvalid = isNaN(this.state.number);

    this.setState(() => { return { invalid: isInvalid } });

    if (!isInvalid) {
      let result = this.state.number && (this.state.number & (this.state.number - 1)) === 0;
      this.setState(() => { return { result, showResult: true } });
    }
  }

  updateNumberValue = (value) => {
    this.setState(() => { return { number: value, showResult: false } });
  }

  componentDidMount() {
    if (this.props.match.params && this.props.match.params.number) {
      this.setState(() => { return { number: this.props.match.params.number } });
    }
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2>Supermax exercise</h2>
        </header>
        <div className="body">
          <input type="text" className="text-number" placeholder="Type a number" value={this.state.number} onChange={(e) => this.updateNumberValue(e.target.value)} />
          <button className="btn" onClick={() => this.getPower()}>Get Power</button>
          {(this.state.showResult && !this.state.invalid) && <h2>Number {this.state.number} has {!this.state.result && <span>no</span>} power!</h2>}
          {this.state.invalid && <h2>Invalid input</h2>}
        </div>
      </div>
    );
  }
}

export default App;
