// pages/about.js

import React from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div
            /*style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }}*/
        >
           <Hero
           cName="hero"
           heroImg="https://www.pixel4k.com/wp-content/uploads/2018/03/Leopard%20Kenya596255060.jpg"
           
           title="Let's Make Memories.."
           text="Discover Adventures"
           buttonText="Join With Us"
           url="/"
           btnClass="show"
           />
           <Destination/>
           <Trip/>
           <Footer/>
        </div>
    );
};

export default About;