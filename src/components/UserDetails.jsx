import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchUserByIdQuery } from "../features/slices/apiSlice";
import { BiArrowBack } from "react-icons/bi";

const UserDetails = () => {
  const { id } = useParams();
  const { data: user, error, isLoading } = useFetchUserByIdQuery(id);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error?.message}</div>;
  }

  if (!user) {
    return <div>User Not Found</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <BiArrowBack className="h-6 w-6" onClick={() => navigate("/")} />
        <h2 className="text-2xl font-bold pl-2">{user?.name}</h2>
      </div>
      <hr className="my-4" />
      <p className="mt-2"><strong>Email :</strong> {user?.email}</p>
      <p className="mt-2"><strong>Phone :</strong> {user?.phone}</p>
      <p className="mt-2"><strong>Username :</strong> {user?.username}</p>
      <p className="mt-2"><strong>Website :</strong>
        <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> {user?.website}</a>
      </p>
      <hr className="my-4" />
      <h3 className="text-xl font-semibold mt-4">Address:</h3>
      <p className="mt-2">
        <strong>Street :</strong> {user?.address?.street}
      </p>
      <p className="mt-2">
        <strong>Suite :</strong> {user?.address?.suite}
      </p>
      <p className="mt-2">
        <strong>City :</strong> {user?.address?.city}
      </p>
      <p className="mt-2">
        <strong>Zipcode :</strong> {user?.address?.zipcode}
      </p>
      <hr className="my-4" />
      <h3 className="text-xl font-semibold mt-4">Company:</h3>
      <p className="mt-2">
        <strong>Name :</strong> {user?.company?.name}
      </p>
      <p className="mt-2">
        <strong>Catch Phrase :</strong> {user?.company?.catchPhrase}
      </p>
      <p className="mt-2">
        <strong>BS :</strong> {user?.company?.bs}</p>
    </div>
  );
};

export default UserDetails;
