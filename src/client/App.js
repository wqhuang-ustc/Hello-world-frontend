import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Button from '@material-ui/core/Button';
import LineCharts from './components/LineCharts.js';

export default class App extends Component {
  state = { uptime: null };

  componentDidMount() {
    fetch('/api/getUptime')
      .then(res => res.json())
      .then(user => this.setState({ uptime: user.uptime }));
  }

  handleClick = () => {
    fetch('/api/getUptime')
      .then(res => res.json())
      .then(user => this.setState({ uptime: user.uptime }));
  }

  render() {
    const { uptime } = this.state;
    return (
      <div>
        {uptime ? <h1>{`Hello World! The system's uptime is ${uptime}`}</h1> : <h1>Loading.. please wait!</h1>}
        <Button size="small" variant="contained" color="primary" onClick={this.handleClick}>update data</Button>
        <LineCharts />
        {/* <div><img src={ReactImage} alt="react" /></div> */}
      </div>
    );
  }
}
