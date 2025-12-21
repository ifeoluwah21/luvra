import React from "react";
import { PuffLoader } from "react-spinners";

const loading: React.FC = () => {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center">
      <PuffLoader size={100} color="#ffffff" />
    </div>
  );
};

export default loading;
