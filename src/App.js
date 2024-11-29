import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import AddUserForm from "./components/AddUserForm";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Routes>
        <Route index element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/add-user" element={<AddUserForm />} />
      </Routes>
    </div>
  );
};

export default App;
