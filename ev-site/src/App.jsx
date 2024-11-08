import { useState } from "react"
import Background from "./components/Background/Background";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
const App = () => {

  const heroData = [
    {text1: "Dive into",text2: "What you love"},
    {text1: "Indulge",text2: "Your Passion"},
    {text1: "Give in to ",text2: "Your passions"},
  ]
  
  const [heroCount, setHeroCount]= useState (0);
  const [playStatus, setPlayStatus] =useState (false);
  return (
    <div>
    <NavBar/>
      <Background playStatus = {playStatus} heroCount = {heroCount}/>
     <Hero 
     setPlayStatus={setPlayStatus}
     heroData ={heroData [heroCount]}
     heroCount ={heroCount}
     setHeroCount ={setHeroCount}
     playStatus ={PlayStatus}
     />
    </div>
  )
}

export default App