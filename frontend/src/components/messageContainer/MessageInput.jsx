import React from "react";
import { FiSend } from "react-icons/fi";

const MessageInput = () => {
  return (
    <form className="px-4 my-3 relative">
      <div className="w-full">
        <input
          type="text"
          className="border-2 border-gray-600 focus:border-gray-300 animate outline-none text-sm rounded-lg block w-full p-3 pr-14"
          placeholder="Send a message..."
        />
        <button className="absolute right-8 top-3 cursor-pointer">
          <FiSend className="text-2xl text-gray-500" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
