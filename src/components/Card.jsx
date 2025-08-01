import React, { useContext } from "react";
import { songsData } from "../data";
import { MdPlaylistAdd } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { dataContext } from "../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { AddSong, RemoveSong } from "../redux/playlistSlice";
import { MdPlaylistRemove } from "react-icons/md";
import { AddLikedSong, RemoveLikedSong } from "../redux/likedSlice";
import { IoHeartSharp } from "react-icons/io5";

const Card = ({ image, name, singer, songIndex }) => {
  let { playSong, index, setIndex } = useContext(dataContext);
  let dispatch = useDispatch();
  let songList = useSelector((state) => state.playlist.songs) || [];
  // console.log(songList);
  const songExistPlaylist = songList.some(
    (item) => item.songIndex == songIndex
  );

  let likedList = useSelector((state) => state.likedlist.songs) || [];
  const likeExistPlaylist = likedList.some(
    (item) => item.songIndex === songIndex
  );

  return (
    <div className="w-[90%] h-[70px]  md:h-[120px] bg-gray-700 rounded-lg p-[5px] md:p-[10px] flex items-center justify-center  hover:bg-gray-400 transition-all cursor-pointer">
      <div
        className="flex justify-start items-center gap-[30px] w-[70%] h-full"
        onClick={() => {
          setIndex(songIndex);
          playSong();
        }}
      >
        <div>
          <img
            src={image}
            alt=""
            className="max-h-[60px] w-[60px] md:max-h-[100px] md:w-[100px] rounded"
          />
        </div>
        <div className="flex flex-col justify-start ">
          <p className="text-white text-start font-semibold text-[15px] md:text-[20px] ">
            {name}
          </p>
          <p className="text-[10px] text-start text-gray-300  ">{singer}</p>
        </div>
      </div>
      <div className="w-[30%] text-white flex items-end justify-center">
        {!songExistPlaylist && (
          <>
            <div
              onClick={(e) => {
                e.stopPropagation();
                // console.log({ name:name , image:image , singer:singer, songIndex:songIndex })
                dispatch(
                  AddSong({
                    name: name,
                    image: image,
                    singer: singer,
                    songIndex: songIndex,
                  })
                );
              }}
            >
              <MdPlaylistAdd className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] " />
            </div>
          </>
        )}

        {songExistPlaylist && (
          <div
            onClick={(e) => {
              // e.stopPropagation();
              dispatch(RemoveSong(songIndex));
            }}
          >
            <MdPlaylistRemove className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] " />
          </div>
        )}

        {!likeExistPlaylist && (
          <>
            <div
              onClick={() =>
                dispatch(
                  AddLikedSong({
                    name: name,
                    image: image,
                    singer: singer,
                    songIndex: songIndex,
                  })
                )
              }
            >
              <IoHeartOutline className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
            </div>
          </>
        )}

        {likeExistPlaylist && (
          <>
            <div onClick={() => dispatch(RemoveLikedSong(songIndex))}>
              <IoHeartSharp className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
