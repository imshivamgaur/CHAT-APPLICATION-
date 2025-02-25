import React from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import MessageContainer from "../../components/messageContainer/MessageContainer.jsx";

const Home = () => {
  return (
    <div className="flex max-sm:h-[auto] sm:h-[450px] md:h-[550px] overflow-hidden bg-white/5 rounded-2xl bg-clip-padding  backdrop:filter backdrop-blur-[10px]  ">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
