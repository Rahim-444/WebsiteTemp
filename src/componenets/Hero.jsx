import hero from "../assets/Screenshot 2023-10-13 135717.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFigma,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export const Hero = () => {
  // <div className="relative mr-10 w-64 h-64">
  return (
    <div className="mt-36 flex justify-between mb-10 w-full">
      <div className="w-1/2">
        <h1 className="text-white text-5xl font-semibold mb-10">
          Hi, I am Abderrahim 👋
        </h1>
        <p className="text-gray-400 text-justify w-full">
          I&apos;m BELKACEMI Abderrahim a 2nd Year engineering student at USTHB
          university focused on Front End development (React.js),I&apos;m here
          for creating (and sometimes designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. I love
          learning new things everything so im taking the challenge of becoming
          a Full Stack developer in the Future.
        </p>
        <div className="flex">
          <FontAwesomeIcon icon={faLocationDot} className="text-3xl mt-10" />
          <p className="text-gray-200 mt-10 ml-4 self-end">Algiers, Algeria</p>
        </div>
        <div className="flex gap-8">
          <FontAwesomeIcon icon={faGithub} className="text-3xl mt-10" />
          <FontAwesomeIcon icon={faFigma} className="text-3xl mt-10" />
          <FontAwesomeIcon icon={faDiscord} className="text-3xl mt-10" />
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl mt-10" />
        </div>
      </div>
      <div className="relative w-56 h-66">
        <div className="h-56 w-48 bg-accent absolute top-10 left-10 z-0"></div>
        <img
          src={hero}
          alt="hero"
          className=" border-8 border-primary absolute h-60 w-52"
        />
      </div>
    </div>
  );
};
