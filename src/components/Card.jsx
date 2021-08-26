import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getThumbnailURL } from "../helpers/getThumbnailURL";

export const Card = ({ playlist }) => {
  const titleTextStyle = {
    height: "60px",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  };

  const [thumbnail, setThumbnail] = useState(
    "https://dummyimage.com/600x400/ffffff/000000&text=no+data"
  );

  useEffect(() => {
    const fetchThumbnail = async () => {
      const res = await getThumbnailURL(playlist.SongURL);
      setThumbnail(res);
    };
    fetchThumbnail();
  }, [playlist]);

  return (
    <div
      className="w-96 md:w-80 lg:w-72 px-2 py-2.5"
      style={{ height: "380px" }}
    >
      <Link to={"/play/" + playlist.ID}>
        <div className="flex flex-col items-center cursor-pointer overflow-hidden pb-4 border border-gray-900 rounded-md bg-gray-800 text-white duration-300">
          <div className="flex justify-center w-full bg-black">
            <img src={thumbnail} className="w-44" style={{ height: "132px" }} />
          </div>

          <section className="mt-3 w-4/5 mx-auto">
            <section style={{ height: "125px" }}>
              <span className="font-bold text-lg">
                <p style={titleTextStyle} title={playlist.Name}>
                  {playlist.Name}
                </p>
              </span>
              <p className="text-xs flex-shrink">
                {playlist.Description ? playlist.Description : "no description"}
              </p>
            </section>

            <p className="font-bold text-sm mt-3 pt-1">1曲目</p>
            <p className="text-sm truncate">
              {playlist.SongName ? playlist.SongName : "no data"}
            </p>
          </section>
        </div>
      </Link>
    </div>
  );
};
