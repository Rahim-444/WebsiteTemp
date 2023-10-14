import { Navbar } from "./componenets//Navbar";
import { Hero } from "./componenets/Hero";
import { About } from "./componenets/About";
import { Work } from "./componenets/Work";
import { Contact } from "./componenets/Contact";
import { Copyrights } from "./componenets/Copyrights";
import { HashRouter } from "react-router-dom";
import illustaion from "./assets/41.svg";
const isMobile = window.innerWidth < 600;

const ComingSoonMessage = () => {
  if (isMobile) {
    return (
      <div className="p-8 w-screen h-screen bg-primary">
        <div className="flex justify-center items-center flex-col">
          <h1
            className="
          text-4xl text-center text-white font-bold self-center
            "
          >
            Coming Soon to Mobile!
          </h1>
          <img src={illustaion} alt="illustaion" className="w-96 h-96" />
          <p className="text-gray-300  text-xl text-justify w-auto">
            sadly this website is not yet optimized for mobile devices, but it
            will be soon! <br />
          </p>
          <h1 className="text-gray-100 text-xl text-center mt-10">
            Meanwhite you can play Sudoku :)
          </h1>
          <a href="https://rahim-4444.github.io/">
            <button className="bg-blue-950 rounded-2xl px-6 w-auto mt-10 mb-10 transition-colors hover:bg-accent">
              Play Sudoku
            </button>
          </a>
        </div>
      </div>
    );
  }

  // If it's not a mobile device, render a blank screen
  return null;
};
const PcApp = () => {
  return (
    <>
      <HashRouter>
        <div className="my-0 mx-auto p-8 max-w-7xl">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="my-0 mx-auto p-8 max-w-7xl">
          <Work />
        </div>
        <Contact />
        <div className="my-0 mx-auto p-8 max-w-7xl">
          <Copyrights />
        </div>
      </HashRouter>
    </>
  );
};

const App = () => {
  return <>{isMobile ? <ComingSoonMessage /> : <PcApp />}</>;
};

export default App;
