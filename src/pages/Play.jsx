import React from "react";
import { useRouteMatch } from "react-router-dom";

export const Play = () => {
  const match = useRouteMatch();
  console.log(match);
  // return <h1>Play Page</h1>;
  return <h1>Play Page({match.params.pid})</h1>;
};
