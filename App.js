import Todo from "./Todo"
//import Effect from "./uEffect"
//import { useState } from "react"
//import Form from "./Form"
// import KeyPad from "./KeyPad"
// import "./App.css"
// import { useState } from "react"
// import { evaluate } from "mathjs"

function App() {
  // const [showProfile, setShowProfile] = useState(true);
  // return (
  //   <>
  //     <button onClick={() => setShowProfile(!showProfile)}>{showProfile ? "UnMount" : "Mount"}</button>
  //     {showProfile && <Effect/>}
  //   </>
  // )
  // function getData(data) {
  //   console.log(data)
  // }
  // return (
  //   <>
  //     <Form onSubmit={getData} />
  //   </>
  // )
  return <Todo/>
  // const [input, setInput] = useState("");
  // function handleClick(value) {
  //   setInput(input+value)
  // }
  // function handleEvaluate() {
  //   try {
  //     const result = evaluate(input);  // Safely evaluates the input
  //     setInput(result.toString());
  //   } catch (error) {
  //     setInput("Error");
  //   }
  // }
  // function handleClear() {
  //   setInput("");
  // }
  // return (
  //   <div className="container">
  //     <h1>Calculator App</h1>
  //     <div className="calculator">
  //       <input type="text" value={input} className="output" />
  //       <KeyPad handleClick={handleClick} handleEvaluate={handleEvaluate} handleClear={handleClear}></KeyPad>
  //     </div>
  //   </div>
  //)
}
export default App
// import React from 'react';
// import SoundButton from './Sound';

// const App = () => {
//   return (
//     <div>
//       <h1>Click the button to play a sound</h1>
//       <SoundButton />
//     </div>
//   );
// };

// export default App;
