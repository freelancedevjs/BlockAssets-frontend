import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="center w-screen min-h-[calc(100vh-88px)]">
      <div className="animate-spin">
        <Loader2 size={50} />
      </div>
    </div>
  );
};

export default Loader;
