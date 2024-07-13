// pages/team.js
import Hero from "../components/Hero";
import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Order from "../components/RetrieveOrder/Order";

const Teams = () => {
    return (
        <div
            /*style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }} */
        >

<Hero
       cName="hero-mid"
       heroImg="https://www.pixel4k.com/wp-content/uploads/2021/03/knoydart-clouds-sky-4k_1615197184-1536x1024.jpg.webp"
       title="Contact Us"
       
       btnClass="hide"
       />

           
            
           

            <ContactForm/>
            
             <Footer/>
        </div>
        
    );
};

export default Teams;