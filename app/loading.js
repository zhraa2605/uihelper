import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-purple-400 dark:border-purple-200 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;