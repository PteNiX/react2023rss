/* import { useState } from "react"; */
/* import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg"; */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import Fcomponent from "./components/Fcomponent";
import Ccomponent from "./components/Ccomponent";
import Acomponent from "./components/Acomponent"; */
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import Page404 from "./pages/Page404";
/* import { AboutUs } from "./pages/AboutUs";
import { Page404 } from "./pages/Page404"; */

function App() {
  /*   const [count, setCount] = useState(0); */

  return (
    <div className="App">
      {/*       <Fcomponent />
      <Ccomponent />
      <Acomponent /> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>

      {/*       <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React+ Sasha+Katya</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
