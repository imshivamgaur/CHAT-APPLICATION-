import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <>
      {/* chat start */}
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar ">
          <div className="w-10 rounded-full">
            <img alt="chat" src={profilePic} />
          </div>
        </div>
        <p className={`chat-bubble break-words ${bubbleBgColor}${shakeClass}`}>
          {message.message}
        </p>
        <span className="chat-footer text-gray-400">
          {new Date(message.createdAt).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </span>
      </div>
    </>
  );
};

export default Message;
