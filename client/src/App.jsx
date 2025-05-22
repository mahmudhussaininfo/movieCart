import React, { useReducer, useState } from "react";
import "./App.css";
import { movieContext, themeContext } from "./context/index";
import Movie from "./pages/Movie.jsx";
import { initialState, shopReducer } from "./reducer/shopReducer.js";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(shopReducer, initialState);
  return (
    <>
      <themeContext.Provider value={{ darkMode, setDarkMode }}>
        <movieContext.Provider value={{ state, dispatch }}>
          <Movie />
        </movieContext.Provider>
      </themeContext.Provider>
    </>
  );
}

export default App;
