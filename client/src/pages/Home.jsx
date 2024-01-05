import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="home-container">
            <h1>Welcome to Harmony</h1>
            <p>Want to start? Make a <Link to="/todo" className="home-todo"><b>to do list</b></Link></p>
        </div>
        </>
    );
};

export default Home;