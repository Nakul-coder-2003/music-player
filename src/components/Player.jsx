import React, { useContext } from "react";
import { songsData } from "../data";
import { dataContext } from "../context/UserContext";
import { IoIosPlay } from "react-icons/io";
import { MdOutlinePause } from "react-icons/md";

const Player = () => {
  let { playingSong, playSong, pauseSong } = useContext(dataContext);
  let {index, setIndex} = useContext(dataContext)
  return (
    <div className="w-[100%] md:w-[60%] h-[90px] bg-white fixed bottom-[100px] md:bottom-0 rounded-t-[30px] shadow-lg flex pt-[20px]">
      <div className="flex justify-start items-center gap-[20px] w-[80%] pl-[20px] pb-[10px] md:pl-[20px] md:pb-[20px] h-full cursor-pointer">
        <div>
          <img
            src={songsData[index].image}
            alt=""
            className="max-h-[70px] w-[70px] md:max-h-[80px] md:w-[80px] rounded-full"
          />
        </div>
        <div className="flex flex-col justify-start ">
          <p className="text-black text-start font-semibold text-[20px] md:text-[20px] ">
            {songsData[index].name}
          </p>
          <p className="text-[14px] text-start text-gray-500  ">
            {songsData[index].singer}
          </p>
        </div>
      </div>

      {!playingSong ? (
        <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-300">
          <IoIosPlay onClick={() => playSong()} className="w-[25px] h-[25px]" />
        </div>
      ) : (
        <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-300">
          <MdOutlinePause
            onClick={() => pauseSong()}
            className="w-[25px] h-[25px]"
          />
        </div>
      )}
    </div>
  );
};

export default Player;
