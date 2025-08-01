import React, { useContext } from "react";
import { songsData } from "../data";
import { dataContext } from "../context/UserContext";
import { IoIosPlay } from "react-icons/io";
import { MdOutlinePause } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Player = () => {
  let { playingSong, playSong, pauseSong, prevSong, nextSong } =
    useContext(dataContext);
  let { index, setIndex } = useContext(dataContext);
  return (
    <div className="w-[100%] md:w-[60%] h-[90px] bg-white fixed bottom-[100px] md:bottom-0 rounded-t-[30px] shadow-lg flex items-center justify-around p-[15px]">
      
      <div className="flex justify-start items-center gap-[20px] w-[70%] h-full cursor-pointer">
        <div>
          <img
            src={songsData[index].image}
            alt=""
            className="max-h-[70px] w-[70px] md:max-h-[80px] md:w-[80px] rounded-full"
          />
        </div>
        <div className="flex flex-col justify-start ">
          <Link to={"/"}>
          <p className="text-black text-start font-bold text-[16px] md:text-[28px] ">
            {songsData[index].name}
          </p>
          <p className="text-[10px] md:text-[14px] text-start text-gray-500  ">
            {songsData[index].singer}
          </p>
          </Link>
        </div>
      </div>
      

      <div className="flex items-center justify-center gap-1 md:gap-3 text-black">
        <MdSkipPrevious
          onClick={() => prevSong()}
          className="w-[28px] h-[28px] md:w-[40px] md:h-[40px] hover:text-gray-300"
        />
        {!playingSong ? (
          <div className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-300">
            <IoIosPlay
              onClick={() => playSong()}
              className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
            />
          </div>
        ) : (
          <div className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-300">
            <MdOutlinePause
              onClick={() => pauseSong()}
              className="w-[25px] h-[25px]"
            />
          </div>
        )}
        <MdSkipNext
          onClick={() => nextSong()}
          className="w-[28px] h-[28px] md:w-[40px] md:h-[40px] hover:text-gray-300"
        />
      </div>
    </div>
  );
};

export default Player;

