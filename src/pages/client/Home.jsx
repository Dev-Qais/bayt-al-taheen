import HeroSection from "../../components/common/HeroSection";
import ArtOfCakes from "../../components/sections/ArtOfCakes/ArtOfCakes";
import Breakfast from "../../components/sections/Breakfast/Breakfast";
import Jibarito from "../../components/sections/Jibarito/Jibarito";
import ProductsShowcase from "../../components/sections/ProductsShowcase/ProductsShowcase";
import TastyPancakes from "../../components/sections/TastyPancakes/TastyPancakes";


function Home() {
  return (
    <div>
      <HeroSection />
      <ArtOfCakes />
      <TastyPancakes />
      <ProductsShowcase />
      <Breakfast />
      <Jibarito />
    </div>
  );
}

export default Home;
