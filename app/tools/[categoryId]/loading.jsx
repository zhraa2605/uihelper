import React from "react";

// Simple purple spinning circle loader
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent 
      rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;