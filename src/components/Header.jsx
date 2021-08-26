import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex items-center w-full h-16 bg-blue-500 pl-5">
      <Link to="/">
        <h1 className="text-white font-bold text-xl">React recomu</h1>
      </Link>
      <div className="flex flex-row items-center ml-5 text-white">
        <Link to="/play/0" className="mx-1 hover:underline">
          <h2>play</h2>
        </Link>
        <Link to="/user" className="mx-1 hover:underline">
          <h2>user</h2>
        </Link>
        <Link to="/edit" className="mx-1 hover:underline">
          <h2>edit</h2>
        </Link>
      </div>
    </div>
  );
};
