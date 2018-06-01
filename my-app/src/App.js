import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Greeting} from './index.js';

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


const myDiv = (
  <div>
    <h1>Hello World!</h1>
  </div>
);

////


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

//////////////////////////////////////////////////////////////
//This is actually very important to my understanding of React.
export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map((page, i ) => {
      return (
        <a key={'page_' + i} href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

// Passing Props from one component to another
// Importing from index.js

export class ImportingProps extends React.Component{
  render(){
    return(
      <div>
        <h1>Welcome my guest what's his face...</h1>
        <Greeting name="Chris" />
        <h1>Welcome to the show....you.</h1>
      </div>
    )
  }
}

//ReactDOM.render(<RenderProps firstName='Christopher' />, document.getElementById('app-renderprops'));

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

          <div id="" className="row">
            {myDiv}
          </div>

          <div id="renderMe" className="row">

          </div>

          <div id="app-myList" className="row"></div>

          <div id="app-js-in-jsx" className="row"></div>
          <div id="app-js-math-in-jsx" className="row"></div>
          <div id="app-math-3" className="row"></div>
          <div id="app-variable-attributes" className="row"></div>
          <div id="app-event-listeners" className="row"></div>
          <div id="app-cointoss" className="row"></div>
          <div id="app-ampersands" className="row"></div>
          <div id="app-maps" className="row"></div>
          <div id="app-firstclass" className="row"></div>
          <div id="app-secondclass" className="row"></div>
          <div id="app-firstsoloclass" className="row"></div>
          <div id="app-owl" className="row"></div>
          <div id="app-friends" className="row"></div>
          <div id="app-tonightsplan" className="row"></div>
          <div id="app-usingthis" className="row"></div>
          <div id="app-button" className="row"></div>
          <div id="app-componentception" className="row"></div>

          <div id="app-accessprops" className="row"></div>
          <div id="app-renderprops" className="row"></div>
          <div id="app-importingprops" className="row"></div>

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

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
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
