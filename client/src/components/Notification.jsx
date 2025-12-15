
import React from "react";

const Notification = ({ count = 1 }) => {
  return (
    <div className="relative flex items-center justify-center cursor-pointer mb-4">
      
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

export default Notification;
