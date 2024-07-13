import "./PaymentsAtyles.css"

function Payments (){
    return(

        <>
        <div className="head">
         <h1>Packages</h1>   
        </div>
        
        <section>
        <div class="content">

            <div class="basic box">
                <h2 class="title">Safari Eco</h2>
                <div class="view">
                    <div class="icon">
                        <img src="https://i.postimg.cc/2jcfMcf4/hot-air-balloon.png" alt="hot-air-balloon"/>
                    </div>
                    <div class="cost">
                        <p class="amount">Rs 5500</p>
                        <p class="detail">per day</p>
                    </div>
                </div>
                <div class="button">
                    <button type="submit" >Make appointment</button>
                </div>
                <div class="description">
                    <ul>
                        <li>7 Seat safari truck</li>
                        <li>Breakfast</li>
                        <li>Guidance</li>
                        <li>Tour guide</li>
                        
                        
                    </ul>
                </div>
            </div>
        
            <div class="standard box">
                <h2 class="title">Safari Max</h2>
                <div class="view">
                    <div class="icon">
                        <img src="https://i.postimg.cc/DzrTN72Z/airplane.png" alt="airplane"/>
                    </div>
                    <div class="cost">
                        <p class="amount">Rs 7500</p>
                        <p class="detail">per day</p>
                    </div>
                </div>
                <div class="button">
                    <button type="submit" >Make Appointment</button>
                </div>
                <div class="description">
                    <ul>
                        <li>10 Seat safari truck</li>
                        <li>Breackfast</li>
                        <li>Lunch</li>
                        <li>Accomodation</li>
                        <li>Tour guide</li>
                        <li>Free magazine</li>
                    </ul>
                </div>
               
            </div>
    
            <div class="business box">
                <h2 class="title">Safari Pro</h2>
                <div class="view">
                    <div class="icon">
                        <img src="https://i.postimg.cc/wvFd6FRY/startup.png" alt="startup"/>
                    </div>
                    <div class="cost">
                        <p class="amount">Rs9500</p>
                        <p class="detail">per day</p>
                    </div>
                </div>
                <div class="button">
                    <button type="submit" >Make Appointment</button>
                </div>
                <div class="description">
                    <ul>
                        <li>12 Seat safari truck</li>
                        <li>Full day accomodation</li>
                        <li>BBQ at night</li>
                        <li>Bird watching</li>
                        <li>Boat tour</li>


                        <li>Tour guide</li>
                        <li>Free magazine</li>
                    </ul>
                </div>
            </div>

        </div>
    </section>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        
        </>
    )
}

export default Payments;