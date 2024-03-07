import React from "react";
import { BarLoader } from "react-spinners/BarLoader";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <p className="text-bgDark text-lg font-semibold">Loading...</p>

      {/* <BarLoader color="#36d7b7" /> */}
    </div>
  );
};

export default Spinner;
