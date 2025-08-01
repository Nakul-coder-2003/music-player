import React from "react";
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BiSolidPlaylist } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-black fixed bottom-0 md:top-0 text-white flex items-center justify-evenly md:justify-center gap-[50px] z-10 rounded-t-[30px]">
      <Link to={"/"} >
        <MdHome className="w-[25px] h-[25px]"/>
      </Link>
      <Link to={"/search"} >
        <IoSearch className="w-[25px] h-[25px]"/>
      </Link>
      <Link to={"/playlist"} >
        <BiSolidPlaylist className="w-[25px] h-[25px]"/>
      </Link>
      <Link to={"/like"} >
        <FaHeart className="w-[25px] h-[25px]"/>
      </Link>
    </div>
  );
};

export default Navbar;
