import { useState } from "react";
import Background from "./components/Background/Background";
import NavBar from "./components/NavBar/NavBar";
// import Hero from "./components/Hero/Hero";

const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your Passion" },
    { text1: "Give in to", text2: "Your passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(true);

  return (
    <div>
      <NavBar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      {/* If you want to use the Hero component, uncomment both the import and the component below */}
      {/* <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      /> */}
    </div>
  );
};

export default App;