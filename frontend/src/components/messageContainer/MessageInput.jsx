import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    toast.success("Message sent 🚀");
    setMessage("");
  };

  return (
    <form className="px-4 my-3 relative" onSubmit={handleSubmit}>
      <div className="w-full">
        <input
          type="text"
          className="border-2 border-gray-600 focus:border-gray-300 animate outline-none text-sm rounded-lg block w-full p-3 pr-14"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="absolute right-8 top-3 cursor-pointer">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <FiSend className="text-2xl text-gray-500" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
