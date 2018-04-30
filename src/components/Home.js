import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="center">
        <p>Find the Perfect Festival</p>
        <p className='p2'> Build your own custom list using our currated picks of the top Film Festivals in the world.</p> 

        <div className="button-container">
          <Link to="/createyourown">
            <button className="create-your-own">Create Your Own </button>
          </Link>
          <Link to="/ourlist">
            <button className="see-our-list">See Our List</button>
          </Link>
        </div>
      </div>
        <div className='black'>
               <p> We have spent the last 20 years currating the most comprehensive list. 
                  Now you can spend your time submitting to the best festivals instead of spending hours doing research.</p>
        </div>
    </div>
  );
}
