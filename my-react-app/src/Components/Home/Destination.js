import React from 'react'
import "./DestinationStyles.css"
import DestinationData from './DestinationData'
import Mountain1 from "./assets/1.jpg"
import Mountain2 from "./assets/2.jpg"
import Mountain3 from "./assets/3.jpg"
import Mountain4 from "./assets/4.jpg"

export default function Destination() {
  return (
    <div className='destination'>
      <h1>Popular Recipes</h1>
      <p>Delicious food adds flavour to the life</p>

      <DestinationData
      className="first-des"
      heading="Chocolate Cake"
      text="The Best Chocolate Cake Recipe – A one bowl chocolate cake recipe that is quick, easy, and delicious! Updated with gluten-free, dairy-free, and egg-free options!

      The best chocolate cake recipe. Ever? There are plenty of claims for the best chocolate cake recipe. I get that. But with one bite of this decadent, moist chocolate cake with chocolate frosting, every single person around the table commented that this was the best chocolate cake they’d ever tasted.
      
      "
      img1={Mountain1}
      img2={Mountain2}
      />

<DestinationData
      className="first-des-reverse"
      heading="Vanilla Cake"
      text="This is the Best Vanilla Cake Recipe I have ever tasted! So delicious, it is quick and easy to make! Made from scratch, this cake is perfect for every occasion!

      If you have been looking for a fluffy, moist and delicious not to mention quick and easy vanilla cake, here it is…The Best Vanilla Cake Recipe! It is the recipe that many of you requested by emailing, commenting, and messaging me for some time. As promised, here is the recipe that I think is the very best vanilla cake I have ever tasted!
      
      "
      img1={Mountain3}
      img2={Mountain4}
      />
    </div>
  )
}
