import React, { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log(messages)
  // console.log("messages", messages);
  useListenMessages();

  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // Runs when messages update

  return (
    <div className="px-4 flex-1 overlfow-auto ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [
        ...Array(4)
          .fill(null)
          .map((_, idx) => <MessageSkeleton key={idx} />),
      ]}
      {!loading && messages.length === 0 && (
        <p className="text-center mt-[5%] glassmorphism  py-2">
          Send a message 🚀to start the conversation 💬
        </p>
      )}
    </div>
  );
};

export default Messages;
