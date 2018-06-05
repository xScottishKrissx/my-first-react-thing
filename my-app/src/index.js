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



//this.state
//  setting initial state
class MyState extends React.Component{
  constructor(props){
    super (props);
    this.state = {title: 'Best App'};
  }

  render(){
    return (
      <div>
        <p>Setting state, Accessing a components state</p>
        <h1>{this.state.title}</h1>
     </div>
  )
  }
}
ReactDOM.render(<MyState />, document.getElementById('app-settingstate'));

//Update state with this.setstate
//A component can do more than just read its own state. A component can also change its own state.
//A component changes its state by calling the function this.setState().
// whenever you define an event handler that uses this, you need to add 
//  this.methodName = this.methodName.bind(this) to your constructor function.
// you can't call this.setState() from inside of the render function! 

//Any time that you call this.setState(), this.setState() AUTOMATICALLY 
// calls .render() as soon as the state has changed.

//That is why you can't call this.setState() from inside of the .render() method! 
// this.setState() automatically calls .render(). If .render() calls this.setState(), 
// then an infinite loop is created.


const green = 'green';
const yellow = 'yellow';

class ToggleColour extends React.Component{
	constructor(props){
		super(props);
		this.state = {color: green};

		//this is important and completley arbitrary
		this.changeColour = this.changeColour.bind(this);
	}

	changeColour(){
		//const newColour = yellow;
		const newColour = this.state.color == yellow ? green : yellow;

		//this.state.color = newColour;
		this.setState({color: newColour});
	}

	render(){
		return (
			<div style={{background: this.state.color}}>
				<h1>Updating State</h1>
				<button onClick={this.changeColour} >Change Colour!</button>
			</div>
		)
	}
}
ReactDOM.render(<ToggleColour/>, document.getElementById('app-updatestate'));

// Stateful Components from Stateful Components
// Building a stateful component class
class StatefulParentComponent extends React.Component{

	constructor(props){
		super(props);
		this.state = {name: "Christopher"};
	}
	render(){
		return (
		<div>
			<p>Stateful and Stateless Components, Passing A Component State,</p>
			<StatelessChildComponent name={this.state.name} />
		</div>
		);
	}
}

// In the tutorial this is imported from another file, the only difference in code is lack of export
class StatelessChildComponent extends React.Component{
	render(){
		return <h1>Hey, my name is {this.props.name}!</h1>
	}
}

ReactDOM.render(<StatefulParentComponent />, document.getElementById('app-statefulcomponent'));

// Don't update props
//	A component can change its state by calling this.setState();
//  A component should never update this.props, props and state store dynamic info
//  Dynamic information can change
//  A react component should use **props** to store info that can be changes, 
//   but can only be changed by a different class
//  A React component should use **state** to store information that the component itself
//   can change.
class BadClass extends React.Component{
	render(){
		this.props.message = "yo"; // DON'T DO THIS, THIS IS BAD
		return <h1>{this.props.message}</h1>;
	}
}
//ReactDOM.render(<BadClass />, document.getElementById('app-badclass'));

//Child Components update their parents state
// Define an Event Handler
//Stateless components updating their parents' state is a React pattern that you'll see 
// more and more. Learning to recognize it will help you understand how React apps are 
//  organized.
class Child extends React.Component{

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		const name = e.target.value;
		this.props.onChange(name);
	}

	render(){
		return (
			<div>
				<p>Define an event handler, Receive the event handler</p>
				<h1>My name is {this.props.name} </h1>

				<select id="great-names" onChange={this.handleChange}>
					<option value="Chris">Chris</option>
					<option value="Kris">Kris</option>
					<option value="Smith">Smith</option>
				</select>
			</div>
		);
	}
}

class Parent extends React.Component{
	constructor(props){
		super(props);
		this.state = {name: 'Chris'};
		this.changeName = this.changeName.bind(this);

	}
	changeName(newName){
		this.setState({
			name: newName
		});
	}
	render(){
		return <Child name={this.state.name} onChange={this.changeName} />
	}
}
ReactDOM.render(<Parent/>, document.getElementById('app-updatingparentcomponentstate'));

// One Sibling to display, another to change
//	Components should only have one job
// 	Previous code(line 497) has 2
//	Code should be split up to ensure this

class Parent2 extends React.Component{
	constructor(props){
		super(props);
		this.state = {name: 'Chris'};
		this.changeName = this.changeName.bind(this);
	}
	
	changeName(newName){
		this.setState({
			name: newName
		});
	}

	render(){
		return(
			<div>
				<Child2 onChange={this.changeName} />
				<Sibling2 name={this.state.name} />
			</div>
		);
	}
}

// Child2s job is to offer a way to change the name, NOT display it.
class Child2 extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		const name = e.target.value;
		this.props.onChange(name);
	}

	render(){
		return(
			<div>
				<select id="great-names-2" onChange={this.handleChange}>
					<option value="Kris">Kris</option>
					<option value="Smith">Smith</option>
					<option value="Chris">Chris</option>
				</select>
			</div>
		);
	}
}

//Siblings2 job is ONLY to display the selected name, nothing else.
class Sibling2 extends React.Component{
	render(){
		const name = this.props.name;
		return (
			<div>
				<p>Hey, ny name is {name}</p>
				<p>Don't you thin {name} is the pretties name ever?</p>
				<p>Sure glad my parents picked {name}</p>
			</div>
		);
	}
}
ReactDOM.render(<Parent2 />, document.getElementById('app-updatesiblings'))


//Style
// Advanced React Techniques

//Inline Styles
const styleMe = <div><p>Inline Styles</p><h1 style={{background:'lightblue', color: 'darkred'}}>Please Style me I am so bland</h1></div>;
ReactDOM.render(styleMe, document.getElementById('app-reactstyling'));

//Make a Style Object Variable
const styles = {
	background: 'lightblue',
	color: 'darkred',
	fontSize: 50,
	marginTop: 100
}
const styleMe2 = 
	<div>
		<p>Style Object Variable</p>
		<h1 style={styles}>I am bland</h1>
	</div>;


ReactDOM.render(styleMe2, document.getElementById('app-reactstyling2'));

//React Styling 3
// Sharing Styles Across Multiple Components

const divStyle = {
	background: styles.background
}
class Home extends React.Component{
	render(){
		return(
			<div style={divStyle} >
				<AttentionGrabber />
				<footer>Sharing styles across multiple components!</footer>
			</div>
		);
	}
}
const h1Style = {
	color: styles.color,
	fontSize: styles.fontSize,
	fontFamily: styles.fontFamily,
	padding: styles.padding,
	margin: 0
}

class AttentionGrabber extends React.Component{
	render(){
		return <h1 style={h1Style}>Welcome to the pit!</h1>
	}
}

ReactDOM.render(<Home />, document.getElementById('app-reactstyling3'))

//Stateless Functional Components and Props
//Stateless functional components usually have props passed to them.

//To access these props, give your stateless functional component a parameter. 
// This parameter will automatically be equal to the component's props object.
//It's customary to name this parameter props.
//Not only are stateless functional components more concise, but they will subtly 
// influence how you think about components in a positive way. They emphasize the f
//  fact that components are basically functions! A component takes two optional inputs, 
//   props and state, and outputs HTML and/or other components.

//Normal Way of Displaying a prop using variables 
/*  export class GuineaPigs extends React.Component {
	render() {
	  let src = this.props.src;
	  return (
		<div>
		  <h1>Cute Guinea Pigs</h1>
		  <img src={src} />
		</div>
	  );
	}
  }
*/
//Statless functional component way to display a prop using a variable
export const GuineaPigs = (props) => {
	let src = props.src;
	return (
		<div>
			<h1>Cute Guinea Pigs</h1>
			<img src={src} />
		</div>
	)
}



/// Codeacademy are seperating their code across a bunch of different files now so it's harder
//   to replicate them here.
//propTypes
// proptypes are useful for validation and documenation




registerServiceWorker();
