import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
export const Copyrights = () => {
  return (
    <div className="flex justify-center items-center  w-full h-auto text-center gap-4">
      <FontAwesomeIcon icon={faCopyright} className="text-xl " />
      <p>2023 | Made with ❤️, BELKACEMI Abderrahim.</p>
    </div>
  );
};
