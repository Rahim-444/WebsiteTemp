import reactPath from "../assets/reactjs-icon.svg";
import tailwindPath from "../assets/tailwindcss-icon.svg";
import javascriptPath from "../assets/javascript-logo-svgrepo-com.svg";
import figmaPath from "../assets/figma-1-logo-svgrepo-com.svg";
import gitPath from "../assets/git-icon-logo-svgrepo-com.svg";
import linuxPath from "../assets/linux-icon.svg";
import javaPath from "../assets/java-icon.svg";
export const About = () => {
  const skills = {
    Javascript: {
      path: javascriptPath,
    },
    Figma: {
      path: figmaPath,
    },
    Git: {
      path: gitPath,
    },
    React: {
      path: reactPath,
    },
    Tailwindcss: {
      path: tailwindPath,
    },
    Linux: {
      path: linuxPath,
    },
    Java: {
      path: javaPath,
    },
  };
  const skillsArray = Object.entries(skills);
  return (
    <div className="bg-secondary w-full h-auto text-center">
      <button className="bg-accent w-32 h-8 rounded-2xl mt-12">Skills</button>
      <div className="flex flex-wrap justify-between flex-grow mt-10 mx-24">
        {skillsArray.map(([skill, content], index) => (
          <div key={index} className="flex flex-col gap-4 text-2xl mb-10">
            <img
              src={content.path}
              className="w-10 h-10 self-center mx-10"
              alt={`Icon for ${skill}`}
            />
            <h1>{skill}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
