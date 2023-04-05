import React from 'react'
import Header from "../Components/Home/Header";
import Hero from '../Components/Home/Hero';
import Footer from '../Components/Home/Footer';
import AboutUs from '../Components/Home/AboutUs';
export default function About() {
  return (
    <div>
     <Header/>
      <Hero
      cName="hero-mid"
      heroImg="https://c4.wallpaperflare.com/wallpaper/987/738/395/new-year-cookies-christmas-christmas-wallpaper-preview.jpg"
      title="About"
      url="/"
      btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </div>
  )
}
