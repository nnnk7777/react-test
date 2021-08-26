import React, { useEffect, useState } from "react";
import { Card } from "./../components/Card";

export const Top = () => {
  const [playlists, setPlaylist] = useState([]);

  useEffect(() => {
    fetch("https://vps2.nkmr.io/api/public", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaylist(data);
      });
  }, []);

  return (
    <div>
      <p className="text-white text-2xl font-bold h-12 flex items-center p-8 mb-3 rounded-lg duration-300">
        みんなの推しプレイリストを聴いてみよう
      </p>
      <div className="flex flex-wrap justify-center w-4/5 mx-auto">
        {playlists.map((playlist, i) => {
          return (
            <div key={i} className="mx-2">
              <Card playlist={playlist} />
            </div>
          );
        })}
        {playlists.map((_, i) => {
          return <div key={i} className="h-0 w-96 md:w-80 lg:w-72 mx-2" />;
        })}
      </div>
    </div>
  );
};
