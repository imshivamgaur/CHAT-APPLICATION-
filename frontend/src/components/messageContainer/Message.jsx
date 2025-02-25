import React from "react";

const Message = () => {
  return (
    <>
      {/* chat start */}
      <div className="chat chat-end">
        <div className="chat-image avatar ">
          <div className="w-10 rounded-full">
            <img
              alt="chat"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <p className="chat-bubble break-words bg-blue-600">hello John doe</p>
        <span className="chat-footer text-gray-400">20:50</span>
      </div>
    </>
  );
};

export default Message;
