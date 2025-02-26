import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../store/useConversation.js";
import useGetConversation from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (search.length < 3) {
      return toast.error("Search must be at least 3 character");
    }
    // SEARCHING BY USERNAME
    const conversation = conversations.find((c) =>
      c.username.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      // console.log(conversation);
      setSelectedConversation(conversation);
      search("");
    } else {
      toast.error("No User Found🥲");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className=" input input-bordered rounded-full bg-black/50 outline-none "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle text-green-500 bg-black/50  "
      >
        <IoSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
