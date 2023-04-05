import "./TripStyles.css"
import TripData from "./TripData"

import React from 'react'

export default function Trip() {
  return (
    <div className="trip">
      <h1>Recent Recipes</h1>
      <p>You can discover unique and delicious food recipes here.</p>
      <div className="tripcard">
        <TripData image="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80"
        heading="Strawberry Cake"
        text="Strawberry cake is a cake that uses strawberry as a primary ingredient. Strawberries may be used in the cake batter, atop the cake, and in the frosting. Strawberry cakes are typically served cold."
        
        />
         <TripData image="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80"
        heading="Raspberry Cake"
        text="Black Raspberry Cake is a unique purple cake with a vivid pink cream cheese frosting. The short season of the fruit makes it a special treat.Purple cake with sequins and diamonds. Made of lemon cake with raspberry filling and a raspberry cake with lemon filling.

        "
        />
         <TripData image="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=503&q=80"
        heading="Black Forest Cake"
        text="Black Forest gâteau or Black Forest cake is a chocolate sponge cake with a rich cherry filling based on the German dessert Schwarzwälder Kirschtorte, literally Black Forest Cherry-torte. Typically, Black Forest gateau consists of several layers of chocolate "
        
        />
      </div>
    </div>
  )
}
