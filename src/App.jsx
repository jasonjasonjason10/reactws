import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {puppyList} from './data.js'

function App() {
  // const [count, setCount] = useState(0);
  const [puppies, setPuppies] = useState(puppyList)

  console.log(puppies);
  
  return (
    <>
      <h1>Vite + React</h1>
      <div>
        {
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div> */}
    </>
  );
}

export default App;
