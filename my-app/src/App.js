import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

////
function formatName(user){
  return user.firstName + ' ' + user.lastName + '\'s';
}
const user = {
  firstName: 'Chris',
  lastName: 'Dunne'
};
const element = (
      <p>{formatName(user)} first react edit!</p>
);


//const name = 'Chris Dunne';
//const element = <p>{name}s First React Edit</p>;

///
function Welcome(props){
  return <p>Hello, {props.name}, you're {props.age}</p>
}
const newElement = <Welcome name="Chris Dunne" age="26" />;

////
function myApp(){
  return(
    <div>
      <Welcome name = "Chris Dunne" age="26" />
      <Welcome name = "John Smith" age="62" />
      <Welcome name = "Kris Dunn" age="32" />
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <div className="row">
            {element}
          </div>

          <div className="row">
            {newElement}
          </div>

          <div className="row">
            {myApp()}
          </div>

          <div id="root-2" className="row clock">
            {/* Clock Thingy */}
          </div>

        </div>
      </div>
    );
  }
}



class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <p>The current time is {this.state.date.toLocaleTimeString()}.</p>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock />,
  document.getElementById('root-2')
  );
}

setInterval(tick, 1000);



export default App;
