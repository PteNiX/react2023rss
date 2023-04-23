/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg"; */
import "./App.css";

/* import { Link } from "react-router-dom"; */
/* import Fcomponent from "./components/Fcomponent";
import Ccomponent from "./components/Ccomponent";
import Acomponent from "./components/Acomponent"; */
import Ccomponent from "./components/Ccomponent";

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <div className="App">
      <Ccomponent />
      {/*  {
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Sasha+Katya</h1>
          <div className="card">
            <button
              onClick={() => {
                setCount((count) => count + 1);
              }}
            >
              count is {count}
            </button>
          </div>
        </>
      } */}
    </div>
  );
}

export default App;
