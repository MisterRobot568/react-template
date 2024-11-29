import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

const App = () => {
  // <h1>Our First Test</h1>;
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };
  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>heading</h1>
    </>
  );
};

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <h1>Hello, world.</h1>
//       </div>
//     </>
//   );
// }

export default App;
