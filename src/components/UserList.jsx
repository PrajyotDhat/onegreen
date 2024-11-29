import React, { useEffect, useState } from "react";
import { useFetchUsersQuery } from "../features/slices/apiSlice";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const UserList = () => {
  const { data: users = [], error, isLoading } = useFetchUsersQuery();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(users);
  }, [users]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="p-4">
      <SearchBar setSearchResults={setSearchResults} />
      {searchResults.length === 0 ? (
        <h1 className="bg-zinc-200 p-4 rounded-lg shadow text-center flex mt-4 justify-center items-center">No User Found</h1>
      ) : (
        <div className="overflow-x-auto mt-4 bg-white rounded-xl shadow-md">
          <table className="min-w-full">
            <thead className="bg-[#5B6CFF] text-white font-semibold text-base">
              <tr>
                <th className="py-3 px-4 border-b text-center">Name</th>
                <th className="py-3 px-4 border-b text-center">Email</th>
                <th className="py-3 px-4 border-b text-center">Phone</th>
                <th className="py-3 px-4 border-b text-center">Company Name</th>
                <th className="py-3 px-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-50 font-semibold text-base">
              {searchResults.map((user) => (<tr key={user.id}>
                <td className="py-3 px-4 border-b text-center whitespace-nowrap">{user.name}</td>
                <td className="py-3 px-4 border-b text-center whitespace-nowrap">{user.email}</td>
                <td className="py-3 px-4 border-b text-center whitespace-nowrap">{user.phone}</td>
                <td className="py-3 px-4 border-b text-center whitespace-nowrap">{user.company.name}</td>
                <td className="py-3 px-4 border-b text-center whitespace-nowrap">
                  <Link to={`/user/${user.id}`} className="text-blue-500 hover:no-underline">View Details</Link>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
