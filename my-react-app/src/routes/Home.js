import React from 'react'
import Header from "../Components/Home/Header";
import Hero from '../Components/Home/Hero';
import Destination from '../Components/Home/Destination';
import Trip from '../Components/Home/Trip';
import Footer from '../Components/Home/Footer';


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero
      cName="hero"
      heroImg="https://c4.wallpaperflare.com/wallpaper/541/504/924/new-year-christmas-christmas-balls-wallpaper-preview.jpg"
      title="Cookie Okie"
      text="Find Your Favourite Food Recipe"
      buttonText="Delicious Plan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  )
}
