// create a variable named React:
import React from 'react';
// evaluate this variable and get a particular, imported JavaScript object:
// The methods imported from 'react' don't deal with the DOM at all. They don't
// engage directly with anything that isn't part of React.

import ReactDOM from 'react-dom';
// The methods imported from 'react-dom' are meant for interacting with the DOM.
import './index.css';
import App from './App';
import {NavBar} from './App';
import {ImportingProps} from './App';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));

//CodeAcademy
ReactDOM.render(<p>render me</p>, document.getElementById('renderMe'));


const myList = (
  <ul>
    <li>Text</li>
    <li>Text</li>
    <li>Text</li>
  </ul>
)
ReactDOM.render(myList, document.getElementById('app-myList'));

//Curly Braces in JSX
ReactDOM.render(<h1>2+3</h1>, document.getElementById('app-js-in-jsx'));
ReactDOM.render(<h1>{2+3}</h1>, document.getElementById('app-js-math-in-jsx'));

const math = (
  <h1>2 + 3 = { 2 + 3 }</h1>
);
ReactDOM.render(math, document.getElementById('app-math-3'))

//Variable Attributes
const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';
const gooseImg = <img src={goose} alt="goose"/>
ReactDOM.render(gooseImg, document.getElementById('app-variable-attributes'));

//Event Listeners
function makeDoggy(e){
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
  <img
    onClick = {makeDoggy}
    src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
    alt="kitty"
  />
);
ReactDOM.render(kitty, document.getElementById('app-event-listeners'));

function coinToss(){
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty2: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  kittyAlt: 'Kitty',
  doggy2: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg',
  doggyAlt: 'Doggy'
};


const img = <img
              src={pics[coinToss() === 'heads' ? 'kitty2' : 'doggy2']}
              alt={pics[coinToss() === 'heads' ? 'kittyAlt' : 'doggyAlt']} />;


ReactDOM.render(img, document.getElementById('app-cointoss'));

//The && operator.
// Example -  A && B
    // B is only evaluated if A is true

const judgmental = Math.random() < 0.5;
const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Grapes</li>
      <li>Strawberries</li>
      {!judgmental && <li>Cheesecake</li>}
      <li>Banana</li>
    </ul>
  </div>
);

ReactDOM.render(favoriteFoods, document.getElementById('app-ampersands'));

// .maps
  // i can be anything, its just a variable that is declared,
  // set to 0 and then incremented +1 as the loop progresses

const people = ['Rowe', 'Prevost', 'Gare'];
const peopleList = people.map((person, i) => <li key={'person_' + i}> {person} </li>);
ReactDOM.render(<ul>{peopleList}</ul>, document.getElementById('app-maps'));

class MyComponentClass extends React.Component {
  render(){
    return <h1>My First Class</h1>;
  }
}
ReactDOM.render(<MyComponentClass />, document.getElementById('app-firstclass'))

//  Declaring a new class
//  class x extends React.Component{}

class ComponentFactory extends React.Component{
  //Instructions go here..
}
// There is only one property that you have to include in your instructions:
//  a render method.
//  A render method MUST contain a return statement.

class MySecondComponentClass extends React.Component{
  render(){
    return <h1>My Second Class</h1>;
  }
}
// How to make a class a React component
// To make a React component, you write a JSX element. Instead of naming your
// JSX element something like h1 or div, give it the same name as a component class.
// <MySecondComponentClass />

//How to render/show your component on the page
ReactDOM.render(<MySecondComponentClass />, document.getElementById('app-secondclass'));

// Multiline JSX expression
// a multi-line JSX expression should always be wrapped in parentheses!
class MyFirstSoloClass extends React.Component{
  render(){
    return(
      <blockquote>
        <p>I like turtles</p>
        <cite><a target="_blank" href="www.google.com">Skeleton Boy</a></cite>
      </blockquote>
    );
  }
}
ReactDOM.render(<MyFirstSoloClass />, document.getElementById('app-firstsoloclass'));


// Using Variable Attributes in a Component
const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

class Owl extends React.Component{
  render(){
    return(
    	<div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
      </div>
    )
  }
}
ReactDOM.render(<Owl />, document.getElementById('app-owl'));

//  Putting Logic in a render function
//  A render() function can also be a fine place to put simple calculations that
//  need to happen right before a component renders.
const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];


class Friends extends React.Component{
  render(){
    const friend = friends[1];
    return (
      <div>
        <p>Putting Logic in a render function</p>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
}
ReactDOM.render(<Friends />, document.getElementById('app-friends'));

// Use a Conditional in a Render Function
// !variable-name -- is variable-name false?
const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component{
  render(){
    //This is basically a var with different scope.
    let flipResult;

    if (!fiftyFifty) {
      flipResult = <h1>Heads</h1>
    }else {
      flipResult = <h1>Tails</h1>
    }
    // This is wrong...
    // return {flipResult}

    //This is Corrent...
    return  flipResult;
  }
}
ReactDOM.render(<TonightsPlan />, document.getElementById('app-tonightsplan'));


//Use *this* in a Component
// The less simple answer is that *this* refers to the object on which this's
// enclosing method, in this case .render(), is called.

// Why don't you need parentheses after this.name? Shouldn't it be this.name()?
// You don't need those parentheses because .name is a getter method. You can
// tell this from the get in the above class declaration body.

 class MyName extends React.Component{
   get name(){
     return 'Chris';
   }
   render(){
     return <h1>My name is {this.name}.</h1>;
   }
 }
ReactDOM.render(<MyName />, document.getElementById('app-usingthis'));

// Use an Event Listener in a Component
class Button extends React.Component{
  shout(){
    alert('Twist and Shout!!');
  }

  render(){
    return <button onClick={this.shout}>Baby Dont Hurt Me!!</button>;
  }
}
ReactDOM.render(<Button />, document.getElementById('app-button'));



///////////////////////////////////////////////////////////////////////////////
// This is a very importing section to my understanding of React.
// Apply a component in a render function

class ProfilePage extends React.Component{
  render(){
    return(
      <div>
        {/*this is being imported from app.js > class NavBar */}
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    )
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('app-componentception'));
// Exporting components
// export comes from ES6's module system, just like import does. export and
// import are meant to be used together, and you rarely see one without the other.
//  In this course, we will be using a style called "named exports."
// Here's how they work
//  In one file, place the keyword export immediately before something that you
//  want to export. That something can be any top-level var, let, const,
//  function, or class

//Access a Components Props
// Every component has something called props
// A component's props is an object. It holds information about that component.
// To see a component's props object, you use the expression this.props

class PropsDisplayer extends React.Component{
  render(){
    const stringProps = JSON.stringify(this.props);

    return(
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}
//ReactDOM.render(<PropsDisplayer />, document.getElementById('app-accessprops'));

//Pass Props to a Component
// You can pass information to a react component by giving it an attribute
// The attribute can be anything you want
// If you want to pass information that isn't a string, then wrap that information in curly braces.
// <MyComponent foo="bar" text={2} true={false} />

ReactDOM.render(<PropsDisplayer propsInfo="Hello" />, document.getElementById('app-accessprops'));

//How to Render a Components Props
// - Find the component class that is going to receive that information.
// - Include this.props.name-of-information in that component class's render
//   method's return statement.

class RenderProps extends React.Component{
  render(){
    return (
      /* Remember to wrap everything in a container like a div or you will get an error */
      <div>
        <p>Rendering Props</p>
        <h1>Hello, { this.props.firstName }</h1>
      </div>
    )
  }
}
ReactDOM.render(<RenderProps firstName='Christopher' />, document.getElementById('app-renderprops'));

//Pass props from component to component
// Exporting to app.js
export class Greeting extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>;
  }
}
ReactDOM.render(<ImportingProps />, document.getElementById('app-importingprops'));


// Put an event handler in a component class
class Talker extends React.Component{
  handleClick(){
    let speech = '';
    for(let i = 0; i<10000; i++){
      speech += 'blah ';
    }
    alert(speech);
  }

  render(){
    return <Button2 onClick={this.handleClick} />;
  }
}

class Button2 extends React.Component{
  render(){
    return(
      <div>
        <p>Put an Event Handler in a Component Class,</p>
        <p>Pass an Event Handler as a prop,</p>
        <p>Receive an Event Handler as a prop</p>
        <p>handleEvent, onEvent, and this.props.onEvent</p>
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
      </div>
    )
  }
}
ReactDOM.render(<Talker />, document.getElementById('app-eventhandlercomponentclass'));



// this.props.children
class ChildrenClass extends React.Component{
  render(){
    return(
      <div>
        <List type="Living Musician">
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>

        <List type="Living Cat Musician">
          <li>Nora the Piano Cat</li>        
        </List>
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <p>this.props.children</p>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
ReactDOM.render(<ChildrenClass />, document.getElementById('app-childrenprops'));

//default props
class DefaultPropsButton extends React.Component{
  render(){
    return(
      <div>
        <p>Default Props</p>
        <button>
          {this.props.text}
        </button>
      </div>
    );
  }
}
DefaultPropsButton.defaultProps = { text: 'I am a button!'};
ReactDOM.render(<DefaultPropsButton text="" />, document.getElementById('app-defaultprops'));


registerServiceWorker();
