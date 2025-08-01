import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Player from "../components/Player";

const Liked = () => {
  let likedList = useSelector((state) => state.likedlist.songs) || [];
  return (
    <div className="w-[100%] h-[70%] md:h-[100vh] bg-black flex flex-col justify-start items-center gap-5 pt-[20px] pb-[20px] md:pt-[110px] overflow-auto">
      {!likedList.length < 1 ? (
        <>
          <h1 className="text-white font-bold text-[25px]">Liked Song</h1>
          {likedList.map((item) => (
            <Card
              name={item.name}
              image={item.image}
              singer={item.singer}
              songIndex={item.songIndex}
            />
          ))}
        </>
      ) : (
        <div className="text-white font-semibold text-2xl pt-[30px] md:pt-0">Empty LikedList, Please Add...</div>
      )}

      <Player />
    </div>
  );
};

export default Liked;
