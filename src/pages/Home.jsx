import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../common/LogInButton";

function Home() {
    return (
        <div className="container">
            <Navigation />
            <div className="home__center">
                <h1 className="heading heading__1">
                    {" "}
                    Did you come to waste some time?{" "}
                </h1>
                <Button className="btn__blue" title="Play" />
                <Button className="btn__white" title="Log In" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
