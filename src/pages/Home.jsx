import React, { useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../data";
import musicImg from "../assets/musicanim.webp";
import { MdSkipPrevious } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { MdSkipNext } from "react-icons/md";
import { MdOutlinePause } from "react-icons/md";
import { dataContext } from "../context/UserContext";
import Card from "../components/Card";
import { IoIosArrowDown } from "react-icons/io";
import Player from "../components/Player";

const Home = () => {
  let {
    audioRef,
    playSong,
    pauseSong,
    playingSong,
    nextSong,
    index,
    prevSong,
  } = useContext(dataContext);

  let [range, setRange] = useState(0);
  let progress = useRef(null);
  let [arrow, setArrow] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.value)
    let newRange = e.target.value;
    setRange(newRange);
    let duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration * newRange) / 100;
    // console.log(audioRef.current.currentTime)
  };

  useEffect(() => {
    const updateProgress = () => {
      let duration = audioRef.current.duration || 0;
      let currentTime = audioRef.current.currentTime || 0;
      let progressPercentage = (currentTime / duration) * 100 || 0;
      setRange(progressPercentage);
      if (progress.current) {
        progress.current.style.width = `${progressPercentage}%`;
      }
    };
    audioRef.current.addEventListener("timeupdate", updateProgress);
  });

  return (
    <div className="bg-black w-full h-screen flex relative overflow-hidden">
      <IoIosArrowDown
        onClick={() => setArrow((pre) => !pre)}
        className={`absolute top-[25px] left-[18px] w-[25px] h-[25px] text-white cursor-pointer ${arrow? "rotate-[-90deg]":null}`}
      />

      {!arrow ? (
        <>
          <div className="w-full md:w-[50%] h-full flex flex-col justify-start items-center pt-[20px] md:pt-[120px] gap-[25px] md:gap-[18px] ">
            <h1 className="text-xl text-white font-bold mb-4">Playing Music</h1>
            <div className="w-[60%]  max-w-[210px] h-[210px] object-fill rounded overflow-hidden relative">
              <img
                className="w-full h-full outline-none"
                src={songsData[index].image}
                alt="/image"
              />
              {playingSong && (
                <div className="w-full h-full bg-black absolute top-0 opacity-[0.5] flex items-center justify-center">
                  <img src={musicImg} alt="" className="w-[60%]" />
                </div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-white font-semibold text-[30px]">
                {songsData[index].name}
              </div>
              <div className="text-slate-300 ">{songsData[index].singer}</div>
            </div>
            <div className="w-[60%] flex items-center justify-center bg-white relative">
              <input
                type="range"
                className="appearance-none w-full h-[4px] rounded-md bg-gray-600"
                id="range"
                value={range}
                onChange={handleChange}
              />
              <div
                className="bg-white h-[100%] absolute left-0 rounded-md"
                ref={progress}
              ></div>
            </div>

            {!playingSong ? (
              <div className="flex items-center justify-center gap-3 text-white">
                <MdSkipPrevious
                  onClick={() => prevSong()}
                  className="w-[40px] h-[40px] hover:text-gray-300"
                />
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-300">
                  <IoIosPlay
                    onClick={() => playSong()}
                    className="w-[25px] h-[25px]"
                  />
                </div>
                <MdSkipNext
                  onClick={() => nextSong()}
                  className="w-[40px] h-[40px] hover:text-gray-300"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3 text-white">
                <MdSkipPrevious
                  onClick={() => prevSong()}
                  className="w-[40px] h-[40px] hover:text-gray-300"
                />
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-300">
                  <MdOutlinePause
                    onClick={() => pauseSong()}
                    className="w-[25px] h-[25px]"
                  />
                </div>
                <MdSkipNext
                  onClick={() => nextSong()}
                  className="w-[40px] h-[40px] hover:text-gray-300"
                />
              </div>
            )}
          </div>
          <div className="w-[100%] md:w-[50%] hidden  h-full  md:flex flex-col gap-[20px] pt-[120px] pb-[20px] overflow-auto">
            {songsData.map((item) => (
              <div key={item.id}>
                <Card
                  image={item.image}
                  name={item.name}
                  singer={item.singer}
                  songIndex={item.id - 1}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full md:w-[50%]  h-[70%] items-center flex flex-col  gap-[20px] mt-[70px] pb-[70px] overflow-auto  relative">
          <Player />
          {songsData.map((item) => (
            <Card
              image={item.image}
              name={item.name}
              singer={item.singer}
              songIndex={item.id - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
