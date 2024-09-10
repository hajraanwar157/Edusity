import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer.jsx";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer.jsx";
import { useState } from "react";

function App() {
  const [playerState, setPlayerState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="our programs" title="What we offer" />
        <Programs />
        <About setPlayerState={setPlayerState} />
        <Title subTitle="Gallery" title="Campus photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What student says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
    </div>
  );
}

export default App;
