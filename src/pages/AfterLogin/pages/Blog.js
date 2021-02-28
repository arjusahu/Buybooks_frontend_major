import React from "react";
import Accordian from "../components/Accordian";
import { que } from "../../data";
import Navbar22 from "../../../components/Navbar22";

const Blog = () => {
  return (
    <div>
      <Navbar22 />
      <h1 className="actitle mx-auto">BLOG</h1>
      <div className="col-10 mx-auto mt-2">
        {que.map((item, index) => (
          <Accordian item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
