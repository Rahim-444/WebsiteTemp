import Sudoku from "../assets/Sudoku.png";
import Discord from "../assets/discordGmail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
const WorkSkills = {
  1: {
    list: ["React", "Javascript", "Css", "Figma"],
  },
  2: {
    list: ["ImapFlow", "Javascript", "Railway", "Git"],
  },
};
const WorkSkillsArray = Object.entries(WorkSkills);
export const Work = () => {
  return (
    <div className="text-center">
      <button className="bg-accent w-32 h-8 rounded-2xl mt-6 mb-10">
        Work
      </button>
      <div className="flex justify-center mb-20">
        <div className="flex w-5/6 h-auto bg-accent rounded-xl justify-between">
          <div className="flex items-center justify-center w-1/2">
            <img src={Sudoku} alt="sudoku" className="w-80 h-96 my-7 rounded" />
          </div>
          <div className="flex bg-secondary w-1/2 rounded-r-xl flex-col text-center">
            <h1 className="mt-10 text-white font-bold text-2xl">
              <FontAwesomeIcon icon={faChessBoard} className="mr-2" />
              Sudoku
            </h1>
            <p className="mt-10 px-10">
              Sudoku is a 9×9 grid puzzle where the goal is to fill each row,
              column, and 3×3 subgrid with numbers 1 through 9. Some numbers are
              initially provided as clues. The challenge lies in logically
              deducing the correct placement of the remaining numbers, making it
              a popular and engaging number puzzle.
            </p>
            <div className="flex justify-around mt-10 mx-6 flex-wrap">
              {WorkSkillsArray[0][1].list.map((content, index) => {
                return (
                  <button
                    key={index}
                    className="bg-accent px-6 h-8 rounded-2xl mt-6 mb-3 mx-1"
                  >
                    {content}
                  </button>
                );
              })}
            </div>
            <button className="bg-blue-950 rounded-2xl px-6 h-8 w-auto mt-10 mb-10 transition-colors hover:bg-accent">
              Check it out
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-20">
        <div className="flex w-5/6 h-auto bg-accent rounded-xl justify-between">
          <div className="flex bg-secondary w-1/2 rounded-l-xl flex-col text-center">
            <h1 className="mt-10 text-white font-bold text-2xl">
              <FontAwesomeIcon icon={faDiscord} className="mr-2" />
              Gmail Discord Bot
            </h1>
            <p className="mt-10 px-10">
              Discord Gmail API bot! Seamlessly connecting your Discord and
              Gmail accounts, this bot streamlines communication for your
              discord server. Receive important emails in your Gmail inbox? No
              worries! Our bot efficiently retrieves them and posts the crucial
              information directly into your designated Discord channel.
            </p>
            <div className="flex justify-around mt-10 mx-6 flex-wrap">
              {WorkSkillsArray[1][1].list.map((content, index) => {
                return (
                  <button
                    key={index}
                    className="bg-accent px-6 h-8 rounded-2xl mt-6 mb-3 mx-1"
                  >
                    {content}
                  </button>
                );
              })}
            </div>
            <button className="bg-blue-950 rounded-2xl px-6 h-8 w-auto mt-10 mb-10 transition-colors hover:bg-accent">
              Check it out
            </button>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <img
              src={Discord}
              alt="sudoku"
              className="w-96 h-80 my-7 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
