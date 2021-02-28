import React from "react";
import Navbar11 from "../../components/Navbar11";
import "./style.css";
import Cards from "./components/Cards";

const Home = () => {
  return (
    <div>
      <Navbar11 />
      <div className="image">
        <h1 className="text">
          “That’s the thing about books. They let you travel without moving your
          feet.”
        </h1>
      </div>
      <div className="cards">
        {" "}
        <Cards />
      </div>
    </div>
  );
};

export default Home;
