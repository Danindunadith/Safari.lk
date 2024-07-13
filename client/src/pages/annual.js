// pages/annual.js

import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Payments from "../components/Payments";

const AnnualReport = () => {
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
       heroImg="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/421890247_875025471297935_6725952604285703156_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=m1JDMT34s68Q7kNvgEfFJ9h&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYCifjsfrj5bjcUuD-27DNuww5iiToZyhxEHDoBrTeMxKQ&oe=66935C19"
       title="Our Services"
       
       btnClass="hide"
       />

       

       <Trip/>

       <Payments/>


       <Footer/>
    </div>
    );
};

export default AnnualReport;