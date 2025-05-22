import React, { useContext } from "react";
import Header from "../components/Layout/Header.jsx";
import Footer from "../components/Layout/Footer.jsx";
import Sidebar from "../components/Sidebar.jsx";
import MovieList from "../components/Movie/MovieList.jsx";
import { themeContext } from "../context/index.js";

const Movie = () => {
  const { darkMode } = useContext(themeContext);
  return (
    <>
      <div
        className={`h-full w-full ${
          darkMode ? "dark dark:bg-[#12141D] dark:text-white" : ""
        }`}
      >
        <Header />
        <main>
          <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Movie;
