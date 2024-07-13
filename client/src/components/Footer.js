import "./FooterStayles.css"

const Footer =() =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Safari.lk</h1>

                    <div className="middle">
                    <p>Choose your favourite destination</p>
                    </div>


                </div>
                <div>
                    <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                    </a>

                    <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                    </a>

                    <a href="/">
                    <i className="fa-brands fa-whatsapp-square"></i>
                    </a>

                    <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                    </a>

                   

                </div>


            </div>


            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Chatelogue</a>
                    <a href="/">Status</a>
                    <a href="/">Licence</a>
                    <a href="/">All versions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Linkdin</a>
                    <a href="/">Project</a>
                    <a href="/">Maps</a>
                </div>

                <div>
                    <h4>Resources</h4>
                    <a href="/">National parks</a>
                    <a href="/">Resoviours</a>
                    <a href="/">Forests</a>
                    
                </div>

                <div>
                    <h4>Communicate</h4>
                    <a href="/">Contact Us</a>
                    <a href="/">About Us</a>
                    <a href="/">Support</a>
                    
                </div>



            </div>
            <div className="copy">

            <h7>© 2024 Safari.lk. All Rights Reserved</h7>
            </div>
        </div>



    )
}

export default Footer;