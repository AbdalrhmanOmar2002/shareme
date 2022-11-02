import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-4">
      <Circles color="#00BFFF" height={50} width={200} className="m-5" />
      {/* <br /> */}
      <p className="text-lg text-center px-2 mt-2">{message}</p>
    </div>
  );
};

export default Spinner;
