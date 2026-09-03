import Navbar from "../components/Navbar";

import HeroSection from "../home/HeroSection";
import AboutIntro from "../home/AboutIntro";
import SpecialThalis from "../home/SpecialThalis";
import WhyGharChiChav from "../home/WhyGharChiChav";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
          <AboutIntro />
          <SpecialThalis />
          <WhyGharChiChav />
          <Footer/>
        {/* पुढे sections इथे येतील */}
      </main>

      
    </>
  );
}