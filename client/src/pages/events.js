import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const Events = () => {
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
       cName="hero-mid"
       heroImg="https://www.pixel4k.com/wp-content/uploads/2018/11/elephants-walking-4k_1542237850.jpg.webp"
       title="About"
       
       btnClass="hide"
       />
       <AboutUs/>
       <Footer/>
    </div>
    );
};

export default Events;