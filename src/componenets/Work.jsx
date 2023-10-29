import Sudoku from "../assets/Sudoku.png";
import Discord from "../assets/discordGmail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
const WorkSkills = [
  {
    Title: "Sudoku",
    Icon: <FontAwesomeIcon icon={faChessBoard} className="mr-2" />,
    img: {
      Link: Sudoku,
      Width: "400",
      Height: "400",
    },
    Link: "https://rahim-4444.github.io/",
    list: ["React", "Javascript", "Css", "Figma"],
    text: (
      <>
        Sudoku is a 9×9 grid puzzle where the goal is to fill each row, column,
        and 3×3 subgrid with numbers 1 through 9. Some numbers are initially
        provided as clues. The challenge lies in logically deducing the correct
        placement of the remaining numbers, making it a popular and engaging
        number puzzle.
      </>
    ),
  },
  {
    Title: "Gmail Discord Bot",
    Icon: <FontAwesomeIcon icon={faDiscord} className="mr-2" />,
    img: {
      Link: Discord,
      Width: "400",
      Height: "400",
    },
    Link: "https://discord.gg/F4R5bK2MwE",
    list: ["ImapFlow", "Javascript", "Railway", "Git"],
    text: (
      <>
        Discord Gmail API bot! Seamlessly connecting your Discord and Gmail
        accounts, this bot streamlines communication for your discord server.
        Receive important emails in your Gmail inbox? No worries! Our bot
        efficiently retrieves them and posts the crucial information directly
        into your designated Discord channel.
        <br></br>
        <span className="text-red-700">
          To see this live you have to join the server and Click browse channels
          and then select live-delegue-email.
        </span>
      </>
    ),
  },
  {
    Title: "Chess",
    Icon: <FontAwesomeIcon icon={faChessBoard} className="mr-2" />,
    img: {
      Link: "https://images.chesscomfiles.com/uploads/v1/article/27319.746c2259.668x375o.c6cf8543e2d5@2x.png",
      Width: "400",
      Height: "400",
    },
    Link: "https://chess.com",
    list: ["React", "Tailwind", "typescript"],
    text: (
      <>
        Chess is a two-player strategy board game played on a checkered board
        with 64 squares arranged in an 8×8 grid. The game is played by millions
        of people worldwide. Chess is believed to be derived from the Indian
        game chaturanga sometime before the 7th century. Chaturanga is also the
        likely ancestor of the Eastern strategy games xiangqi, janggi, and
        shogi. Chess reached Europe by the 9th century, due to the Umayyad
        conquest of Hispania. The pieces assumed their current powers in Spain
        in the late 15th century; the rules were standardized in the 19th
        century.
      </>
    ),
  },
];
export const Work = () => {
  return (
    <div id="Work" className="text-center">
      <button className="bg-accent w-32 h-8 rounded-2xl mt-6 mb-10">
        Work
      </button>
      {WorkSkills.map((content, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="flex justify-center mb-20">
              <div className="flex w-5/6 h-auto bg-accent rounded-xl justify-between">
                <div className="flex items-center justify-center w-1/2">
                  <img
                    src={content.img.Link}
                    className=" my-7 rounded"
                    width={content.img.Width}
                    height={content.img.Height}
                  />
                </div>
                <div className="flex bg-secondary w-1/2 rounded-r-xl flex-col text-center">
                  <h1 className="mt-10 text-white font-bold text-2xl">
                    {content.Icon}
                    {content.Title}
                  </h1>
                  <p className="mt-10 px-10">{content.text}</p>
                  <div className="flex justify-around mt-10 mx-6 flex-wrap">
                    {content.list.map((content, index) => {
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
                  <a href={content.Link} target="_blank" rel="noreferrer">
                    <button className="bg-blue-950 rounded-2xl px-6 h-8 w-auto mt-10 mb-10 transition-colors hover:bg-accent">
                      Check it out
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className="flex justify-center mb-20">
              <div className="flex w-5/6 h-auto bg-accent rounded-xl justify-between">
                <div className="flex bg-secondary w-1/2 rounded-l-xl flex-col text-center">
                  <h1 className="mt-10 text-white font-bold text-2xl">
                    {content.Icon}
                    {content.Title}
                  </h1>

                  <p className="mt-10 px-10">{content.text}</p>
                  <div className="flex justify-around mt-10 mx-6 flex-wrap">
                    {content.list.map((content, index) => {
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
                  <a href={content.Link} target="_blank" rel="noreferrer">
                    <button className="bg-blue-950 rounded-2xl px-6 h-8 w-auto mt-10 mb-10 transition-colors hover:bg-accent">
                      Check it out
                    </button>
                  </a>
                </div>
                <div className="flex items-center justify-center w-1/2">
                  <img
                    src={content.img.Link}
                    className="my-7 rounded"
                    width={content.img.Width}
                    height={content.img.Height}
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
