import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { songsData } from "../data";
import Card from "../components/Card";
import { GiLoveSong } from "react-icons/gi";
import { data } from "react-router-dom";
import Player from "../components/Player";

const Search = () => {
  let [input, setInput] = useState("");
  let [newList, setNewList] = useState([]);
  useEffect(() => {
    let filterItem = songsData.filter(
      (item) =>
        item.name.toLowerCase().includes(input) ||
        item.singer.toLowerCase().includes(input)
    );
    setNewList(filterItem);
  }, [input]);

  // useEffect(() => {
  //   const fetchapi = async()=>{
  //     let res = await fetch(`https://v1.nocodeapi.com/nakulcoder/spotify/qYfsrbljLMIdbRQC/search?q=kaka&type=artist`)
  //     let data = await res.json();
  //     console.log(data)
  //   }
  //   fetchapi();
  // },[]);
  
  return (
    <div className="w-[100%] h-[70%] md:h-[100vh] bg-black flex flex-col justify-start items-center pt-[20px] md:pt-[110px]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[90%] md:w-[60%] h-[60px] bg-gray-500 flex items-center gap-[10px] p-[10px] rounded-lg shadow-xl"
      >
        <IoSearch className="text-2xl text-white font-bold " />
        <input
          type="text"
          placeholder="Search any song.."
          className="w-[100%]  text-2xl outline-none  text-white "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {input ? (
        <div className="w-[100%] h-[100%] my-[20px] flex flex-col justify-start items-center gap-5 overflow-auto">
          {newList.map((item) => (
            <Card
              name={item.name}
              image={item.image}
              singer={item.singer}
              songIndex={item.id - 1}
            />
          ))}
        </div>
      ) : (
        <div className="text-white font-bold pt-[20px] text-[25px] flex items-center gap-5">
          <h1>Search a Song</h1>
          <GiLoveSong className="text-white font-bold text-[25px]" />
        </div>
      )}
      <Player/>
    </div>
  );
};

export default Search;
