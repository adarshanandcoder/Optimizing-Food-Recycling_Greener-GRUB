import React from 'react'
import Wastemoney from "../assets/wasted-money.jpg";
import Envimpact from "../assets/environment-impact.jpg";
import Hunger from "../assets/hunger.jpg";

const Partners = () => {
  return (
    <div class="cards">
    <div class="card1">
        <img id="WasteMoney" src={Wastemoney} alt ="Waste of Money photo"/>
        
        <h1><a href=''>Lovely Foundation</a></h1>
        <p>Lovely Foundation is an NGO based in Mohali, Punjab. Founded in January 2022, this foundation has a vision to serve everyone in need. It is drawn to serve humanity and believes that every individual must be entitled to wellness.
            <span id="para-highlights">we collectively waste ₹92,000 crores per annum on discarded food. </span> 
            By reducing waste, we can save money and support businesses.</p></div>

            <div class="card2">
                    <img id="Envtimpact" src={Envimpact} alt="Environment Impact photo"/>
                    <h1><a href=''>Smile Foundation</a></h1>
                    <p>In 2002, the Smile Foundation was established in Delhi to support disadvantaged children’s education. This foundation assists over 15 lakh children and their families each year. 
                        <span id="para-highlights">In 25 Indian states and over 2,000 rural villages, 
                        they have established humanitarian initiatives focused on healthcare, women’s empowerment,</span> 
                        A group of young business workers founded this charity in an effort to make their life brighter, happier, and more pleasant. Some of their programs are Smile on Wheels, Mission Education and Smile Twin e-learning.
</p></div>
                <div class="card3">
                <img id="hunger" src={Hunger} alt="Poor hungry children photo"/>
                <h1><a href=''>Fighting Hunger</a></h1>
                    <p>While we throw away food, many people in our neighborhood and beyond face hunger and food insecurity. 
                    By reducing waste, we can help ensure that everyone has access to nourishing meals and contribute to a more food-secure community.</p></div>
    
                    <div class="card4">
                <img id="hunger" src={Hunger} alt="Poor hungry children photo"/>
                <h1><a href=''>Fighting Hunger</a></h1>
                    <p>While we throw away food, many people in our neighborhood and beyond face hunger and food insecurity. 
                    By reducing waste, we can help ensure that everyone has access to nourishing meals and contribute to a more food-secure community.</p></div>
            </div>
  )
}

export default Partners