import React, { Component } from 'react';
import './App.css';
import Temp from './Temp.js';
import Response from './data.json'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [],
      currentInput: ''
    }
  }
  onInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      currentInput: value
    });
  }
  onSubmit = () => {
    const updatelist = this.state.list;
    updatelist.push(this.state.currentInput);
    this.setState({
      list: updatelist,
      currentInput: ''
    });
  }
  onDelete = (index) => {
    const update = this.state.list;
    update.splice(index,1);
    this.setState({list: update});
  }
  render() {
    return (
      <div>
        <div>
          <Temp list={this.state.list} onDelete={() => this.onDelete()} />
        </div>
      <input type="text" value={this.state.currentInput} onChange={this.onInputChange} ></input>
      <button onClick={this.onSubmit}>XX</button>
      </div>
    );
  }
}

export default App;
