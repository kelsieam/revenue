import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

       // the default export   // the non-default exports
// import myDefaultFunction, {anotherFunctionA, anotherFunctionB} from "myLibrary";


// function Nuh(props) {
//   let message;
//   if (props.sleepy === "true") {
//     message = "nuh is alive lol";
//   } else {
//     message = "he must be dead :(";
//   }

//   return <h1>{message}</h1>
// }


// any time a function is used as an event handler by react, it get passed a specific parameter called `event`
// another quirk of event handlers in react (and i think vanilla js too maybe?) is that their return values are never captured.
// we're totally AALLOWED technically to return something, but react is coded to ignore it

// all event handlers have to be inside of the component so they can read and write the state
function addSources(event) {
    console.log(event.target);
    
    // eventHandler();

//   const sourceName = document.getElementById("source-name").value;
//   console.log(document.getElementById("source-name"), document.getElementById("source-name").value)
//   return sourceName;
  // if (sourceName === none) {
  //   alert("add something dummy");
  // }
  
}


// function MonthForm(props) {
//   const jan = "jan-" + props.sourceName;

//   return (
//     <form>
//       look we are in a form
//       {jan}
//       <input type="text" id={jan} className="class" />
//     </form>
//   );
// }


function MonthFormReal(props) {

  const sourceName = props.sourceName;

  return (
    <form action="/calculate-income" method="POST" id="month-form" name="month-form" class="form-inline">
      <div class="row">
          <h4>$ per subscription</h4>
          <input type="number" id="sub-cost" name="sub-cost" placeholder="$$$" value="15" />
          <h4>enter year (optional)</h4>
          <input type="text" id="year" name="year" placeholder="2023" />
          <h4>subscriptions you expect per month</h4>
      </div>
      <div class="form-group">
          <label class="form-label">January:</label>
          <input type="number" id={`"january-${sourceName}"`} name="january" class="form-control" value="12" />
      </div>
      {/* <div class="form-group">
          <label class="form-label">February:</label>
          <input type="number" id={`"february-${sourceName}"`} name="february" class="form-control" value="18" />
      </div>
      <div class="mb-1">
          <label class="form-label">March:</label>
          <input type="number" id={`"march-${sourceName}"`} name="march" class="form-control" value="9" />
      </div>
      <div class="mb-1">
          <label class="form-label">April:</label>
          <input type="number" id={`"april-${sourceName}"`} name="april" class="form-control" value="10" />
      </div>
      <div class="mb-2">
          <label class="form-label">May:</label>
          <input type="number" id={`"may-${sourceName}"`} name="may" class="form-control" value="14" />
      </div>
      <div class="mb-2">
          <label class="form-label">June:</label>
          <input type="number" id={`"june-${sourceName}"`} name="june" class="form-control" value="20" />
      </div>
      <div class="mb-2">
          <label class="form-label">July:</label>
          <input type="number" id={`"july-${sourceName}"`} name="july" class="form-control" value="11" />
      </div>
      <div class="mb-2">
          <label class="form-label">August:</label>
          <input type="number" id={`"august-${sourceName}"`} name="august" class="form-control" value="12" />
      </div>
      <div class="mb-2">
          <label class="form-label">September:</label>
          <input type="number" id={`"september-${sourceName}"`} name="september" class="form-control" value="15" />
      </div>
      <div class="mb-2">
          <label class="form-label">October:</label>
          <input type="number" id={`"october-${sourceName}"`} name="october" class="form-control" value="19" />
      </div>
      <div class="mb-2">
          <label class="form-label">November:</label>
          <input type="number" id={`"november-${sourceName}"`} name="november" class="form-control" value="22" />
      </div>
      <div class="mb-2">
          <label class="form-label">December:</label>
          <input type="number" id={`"december-${sourceName}"`} name="december" class="form-control" value="8" />
      </div> */}
      <div class="mb-2">
          <input type="submit" id="month-form-submit" class="btn btn-secondary" value="Submit" />
      </div>
  </form>
  );

}


function handleSourceNameChange(event) {
  console.log(event.target.value);
  
}


function App() {
//   const stateArr = useState("Kelsie");

//   // read only value of the state
//   const stateValue = stateArr[0];
//   // "write-only" function setter to modify the state
//   const stateValueSetter = stateArr[1];

// array "destructuring assignment"
// (also exists for objects)
// any hook can only be called from inside another component, or inside a custom hook
// this hook is specificaly returning an array so that we can rename the values whatever we want
const [apple, banana] = useState("Kelsie");
const [currentCounter, setCurrentCounter] = useState(0);
const [currentIsLoading, setcurrentIsLoading] = useState(true);
// every state value and setter inside of the component are "globally" available within the component

// create state and seter for currentSourceName, which gets updated as you type in the input
// from there every other event handler or child can know what the current value is
// so then this sets us up to read the current value from teh component state when you click the add button

function eventHandler(event) {
    console.log("the old state value was", currentCounter);
    // you can "hard code" a new state just by passing the value
    // setCurrentCounter(10);
    // but if you want to base the new value off of the old value, there's a different pattern:
    // this is the same "feel" as the += 1 idea from vanilla js
    // the reason we can't just modify the currentcount is that it's read only
    setCurrentCounter((prevCurrentCounter) => {return prevCurrentCounter + 1})
    // ^ the reason fo rthis function being "required" even though it usually doesn't break without it,
    // when many state updates are happening in quick succession, technically setState takes a little bit of time to update
    // so it can get out of date if we don't use the function form
}
    // what if my child component wants to know about the state and how to change it?
    // you can pass these values as props to new child components and that give the children "permission" to read and write the state
    // <childComponent counterValueProp={currentCounter} onClickIncrememtCounter={setCurrentCounter} />

    // kids with allowance: they have props of their currentBalance, and the setter to spend some of that allowance

  return (
    <div className="App" onClick={eventHandler}>
      <header className="App-header">
        counter: {currentCounter}
        <input onChange={handleSourceNameChange} type="text" id="source-name"></input>
        <button onClick={addSources}>add Source</button>
        <MonthFormReal sourceName={addSources} />
      </header>
    </div>
  );
}

export default App;


