import { useState } from "react";
import "./App.css";

// function App() {
//   let [counter, setCounter] = useState(75);
//   // let counter = 5;
//   const addvalue = () => {
//     // console.log("value added", Math.random());

//     console.log("clicked", counter);
//     // counter = counter + 1;
//     setCounter(counter + 1);
//   };

//   const decvalue = () => {
//     // decvalue = counter - 1;
//     // console.log("clicked", decvalue);
//     setCounter(counter - 1);
//   };

//   return (
//     <>
//       <h1>chai aur react</h1>
//       <h2>counter value: {counter}</h2>

//       <button onClick={addvalue}>Add value</button>
//       <br />
//       <br />
//       <button onClick={decvalue}>dcrease value</button>
//     </>
//   );
// }

// export default App;

function App() {
  // Initialize the counter state with 75
  const [counter, setCounter] = useState(14);

  // Function to increase the counter value
  const addvalue = () => {
    // Check if the counter is less than 20 before incrementing
    if (counter < 20) {
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
    }
  };

  // Function to decrease the counter value
  const decvalue = () => {
    // Check if the counter is greater than 0 before decrementing
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <br />
      <button onClick={decvalue}>Decrease value</button>
    </>
  );
}

export default App;
