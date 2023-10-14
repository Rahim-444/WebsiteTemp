import { HashLink } from "react-router-hash-link";
export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <a href="https://abderrahimbelkacemi.me">
        <h1 className="text-accent font-logo text-3xl pt-1 font-semibold hover:cursor-pointer">
          <span className="">&lt;</span>/
          <span className="text-gray-200">RAHIM444</span>
          <span className="">&gt;</span>
        </h1>
      </a>
      <ul className="flex gap-10 font-medium items-center hover:cursor-pointer">
        <HashLink smooth to="#Skills">
          <li className="px-3 py-1 rounded hover:bg-accent">Skills</li>
        </HashLink>
        <HashLink smooth to="#Work">
          <li className="px-3 py-1 rounded hover:bg-accent">Work</li>
        </HashLink>
        <HashLink smooth to="#Contact">
          <li className="px-3 py-1 rounded hover:bg-accent">Contact</li>
        </HashLink>
        <button
          className="bg-white text-gray-900 p-1 pr-3 pl-3 rounded-lg font-semibold border-2 hover:border-blue-950   hover:text-white hover:bg-gray-900"
          onClick={() => {
            window.alert("Unavailable for now :(");
          }}
        >
          Download CV
        </button>
      </ul>
    </div>
  );
};
