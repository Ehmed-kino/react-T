import React, { Component } from 'react';
import Response from './data.json';


class Temp extends Component {

  render () {
    const list = this.props.list;
    // const surname = this.props.surname;
    return (<ul> {
      list.map((l, key) => {
        return <li onClick={this.props.onDelete} key={key}>{l}</li>
      })}
    </ul>);
  }
}

export default Temp;
