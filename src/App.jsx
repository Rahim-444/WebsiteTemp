import { Navbar } from "./componenets//Navbar";
import { Hero } from "./componenets/Hero";
import { About } from "./componenets/About";

const App = () => {
  return (
    <>
      <div className="my-0 mx-auto p-8 max-w-7xl">
        <Navbar />
        <Hero />
      </div>
      <About />
    </>
  );
};

export default App;
