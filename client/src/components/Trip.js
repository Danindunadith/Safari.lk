import "./TripStyles.css"
import TripData from "./TripData";

function Trip(){
    return(
        <div className="trip">
            <h1>Our services</h1>
            <p>What to expect when doing safari camping in these destinations </p>

            <div className="tripcard">
                <TripData
                image="https://www.oakrayhotels.com/wildyala/wp-content/uploads/sites/69/2016/10/IMG_3287-2-1.jpg"
                heading="Accommodation"
                text="Spacious tented accommodation with beds filled with comfortable pillows and crisp linen, just like a hotel.
                 Your tent will be lit up with solar powered lanterns & washroom and shower facilities are located inside the tent."
                />

               <TripData
                image="https://fortressresortandspa.imgix.net/sites/3/2021/07/1-642.jpg"
                heading="Meals at Safari Camp"
                text="Meals are freshly prepared our jungle kitchen along with Sri Lankan or western breakfast served under 
                the shade of the trees or if you fancy in the water with fresh juices, tea or coffee."
                />

               <TripData
                image="https://www.yalasafari.lk/wp-content/uploads/2019/05/vv6.jpg"
                heading="Safari jeeps"
                text="All terrain vehicles are driven by experienced drivers with the specialist guidance support of a park ranger.
                 The jeep used for game drives is specially modified with high elevated front facing seats padded with comfortable cushions.
                 Chilled beverages will be served during game drives."
                />
            </div>
        </div>

    )
}

export default Trip;
