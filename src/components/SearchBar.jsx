import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setSearchResults }) => {
  const [textSearch, setTextSearch] = useState("");
  const navigate = useNavigate();
  const users = useSelector(
    (state) => state.api.queries["fetchUsers(undefined)"]?.data || []
  );

  const handleSearch = (e) => {
    setTextSearch(e.target.value);
    const results = users.filter(
      (user) =>
        user?.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user?.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center border border-gray-300 p-2 text-sm rounded-xl bg-white shadow-sm w-full sm:w-[20rem]">
        <CiSearch className="text-gray-500 text-2xl mx-1" />
        <input type="text"
          value={textSearch}
          onChange={handleSearch}
          placeholder="Search by name or email"
          className="focus:outline-none text-gray-600 w-full" />
      </div>
      <div>
        <button onClick={() => navigate("/add-user")}
          className="w-full sm:w-auto py-2 px-8 bg-[#5B6CFF] text-white rounded-lg font-semibold text-base">
          Add User
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
