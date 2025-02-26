import React, { useEffect } from "react";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { IoIosChatbubbles } from "react-icons/io";
import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from "../../store/useConversation.js";

const MessageContainer = () => {
  const noMessageSelected = true;

  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmount)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px]  flex flex-col">
      <>
        {!selectedConversation ? (
          <NoMessageSelected />
        ) : (
          <>
            {/* Header */}
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">
                To :{" "}
                <span className="text-gray-900 font-bold">
                  {selectedConversation.fullName}
                </span>
              </span>
            </div>

            {/* Message */}
            <div className="flex-1 overflow-auto">
              <Messages />
            </div>

            <MessageInput />
          </>
        )}
      </>
    </div>
  );
};

export default MessageContainer;

const NoMessageSelected = () => {
  const { authUser } = useAuthContext();
  console.log(authUser);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center">
          <img
            src={authUser.profilePic}
            style={{ width: "100px", height: "100px" }}
            alt={authUser.fullName}
          />
          <p className="capitalize">Welcome👋 {authUser.fullName} 😊</p>
          <p>Select a chat to start messaging </p>
          <IoIosChatbubbles className="text-3xl md:text-5xl text-center" />
        </div>
      </div>
    </>
  );
};
