import React from "react";

const Spinner = () => {
  return (
    <div
      role="status"
      className="flex items-center justify-center space-x-2"
      aria-live="polite"
    >
      <div className="w-4 h-4 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent"></div>
      <div>Loading...</div>
    </div>
  );
};

export default React.memo(Spinner);
