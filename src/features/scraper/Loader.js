import React from "react";
import Spinner from "../../images/loader.svg";
import "./Loader.css";

function Loader(props) {
  return (
    <tr
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <th>
        <img
          src={Spinner}
          alt="Loading"
          style={{
            animationName: "spin",
            animationDuration: "5000ms",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        ></img>
      </th>
    </tr>
  );
}

export default Loader;
