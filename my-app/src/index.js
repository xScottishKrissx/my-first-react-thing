import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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


registerServiceWorker();
