import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  return (
    <div id="Contact" className=" py-12 bg-secondary w-full h-auto text-center">
      <button className="bg-accent w-32 h-8 rounded-2xl ">Contact</button>
      <p className="text-gray-300 mt-10">
        Whats next? Feel free to reach out to me if you&apos;re looking for
        <br></br>a developer, have a query, or simply want to connect or chat!.
      </p>
      <div className="flex my-10 text-white font-semibold text-2xl justify-center">
        <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10 mr-10" />
        <h1 className="pt-1"> abderrahimbelkacemi33@gmail.com</h1>
      </div>
      <p className="text-gray-300 mt-10 mb-6">
        you may also find me on these platforms
      </p>
      <div className="flex justify-center items-center gap-8">
        <a href="https://github.com/Rahim-444" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-3xl mt-10" />
        </a>
        <a
          href="https://www.instagram.com/rahim._.444/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-3xl mt-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/belkacemi-abderrahim-80320a184/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl mt-10" />
        </a>
        <a
          href="https://discord.com/users/543867530918363158"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} className="text-3xl mt-10" />
        </a>
      </div>
    </div>
  );
};
