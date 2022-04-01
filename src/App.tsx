import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container mx-auto pt-[50px] bg-[#F3F3F3]">
      <Navbar />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
