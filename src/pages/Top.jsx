import React from "react";
import { Card } from "./../components/Card";

export const Top = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <p class="text-white text-2xl font-bold h-12 flex items-center p-8 mb-3 rounded-lg duration-300">
        みんなの推しプレイリストを聴いてみよう
      </p>
      <div className="flex flex-wrap justify-center w-4/5 mx-auto">
        {arr.map((_, i) => {
          return (
            <div key={i} className="m-2">
              <Card />
            </div>
          );
        })}
        {arr.map((_, i) => {
          return <div key={i} className="h-0 w-96 m-2" />;
        })}
      </div>
    </div>
  );
};
