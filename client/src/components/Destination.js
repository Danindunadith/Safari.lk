
import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Yala Safari Camp, a place to experience a classic and authentic tented safari camping experience in Yala. </p>

            
        <DestinationData
        className="first-des"
         heading="Yala National Park"
         text="Yala (Ruhuna) National Park is the most visited and second largest national park in Sri Lanka.
          The park covers an area of 151,778 hectares comprising of five blocks, which includes a strict nature reserve.
           Currently only Block I, covering 14,100 hectares, is open to the public.
            It is situated in the dry semi- arid climatic region of Sri Lanka’s South East region
             which extends from Trincomalee to Hambantota.   A monastic settlement, Situlpahuwa, 
             appears to have housed 12,000 inhabitants. Now restored, it’s an important pilgrimage site. 
             A 1st- century BC vihara (Buddhist complex),
              Magul Maha Vihara, and a 2nd-century BC chetiya (Buddhist shrine)"
        
         img1="https://www.lovesrilanka.org/wp-content/uploads/2024/03/Discover-Immersive-Nature-Experiences-in-Sri-Lanka-1920x700-2.jpg"
         img2="https://faw-marketing.transforms.svdcdn.com/production/images/Elephants-in-Minneriya-National-Park.jpg?w=1200&h=630&q=82&auto=format&fit=crop&crop=focalpoint&fp-x=0.4755&fp-y=0.5655&dm=1540893332&s=b2054a231f589d50396547d337394d8a"
        />


<DestinationData
 className="first-des-reverse"
         heading="Udawalawa National Park"
         text="Udawalawe National Park was created in 1972 to provide a sanctuary for wild animals displaced by the construction
          of the Udawalawe Reservoir on the Walawe Ganga, as well as to protect the catchment of the reservoir.
           Udawalawe is an important habitat for Sri Lankan elephants, which are relatively easy to see in its open habitats.
            Many elephants are attracted to the park because of the Udawalawe reservoir
           with a herd of about 250 believed to be permanently resident. "
        
         img1="https://www.srilankawidetours.com/wp-content/uploads/2019/05/01-e1556683150695.jpg"
         img2="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/0b/2a/7c.jpg"
        />


<DestinationData
        className="first-des"
         heading="Bundala National Park"
         text="Bundala National Park is one of Sri Lanka’s foremost destinations for birdwatchers, 
         protecting an important area of coastal wetland famous for its abundant aquatic (and other) birdlife,
          as well as being home to significant populations of elephants, crocodiles, turtles and other fauna. 
          The park stretches along the coast for around 20km, enclosing five shallow and brackish lagoons, or lewayas
           (they sometimes dry up completely during long periods of drought) 
          separated by thick low scrubby forest running down to coastal dunes."
        
         img1="https://www.avesnaturetrails.com/wp-content/uploads/2021/05/tour-1.jpg"
         img2="https://www.yalasafari.lk/wp-content/uploads/2018/12/yala_7hrs_afternoon.jpg"
        />
        
        </div>
    );
};

export default Destination;