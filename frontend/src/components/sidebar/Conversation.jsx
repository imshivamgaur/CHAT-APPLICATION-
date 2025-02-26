import React from "react";
import useConversation from "../../store/useConversation";

const Conversation = ({ conversation, emoji, lastIdx }) => {

  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;  // optional chaning ? and return undefind instead of error

  // console.log("Selected Conversation:", selectedConversation);
  // console.log(conversation);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer 
          ${isSelected ? "bg-sky-500" : ""}
          `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar">
          <div className="w-12 rounded-full avatar-online">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.username}</p>
            <span>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1 " />}
    </>
  );
};

export default Conversation;
