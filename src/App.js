import React, { useState, Fragment } from "react";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import UserTable from "./components/UserTable";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // Data
  const usersData = [
    { id: 1, name: "Tania", email: "tania@abc.com", contact: 989898757,status:"Active" },
    { id: 2, name: "Craig", email: "craig@abc.com", contact: 999898757,status:"Inactive" },
    { id: 3, name: "Ben", email: "ben@abc.com", contact: 979898757,status:"Active" }
  ];

  const initialFormState = { id: null, name: "", email: "", contact: "",status:"" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      contact: user.contact,
      status: user.status
    });
  };

  return (
    <div>
      <>
      <Navbar/>
      </>
    <div className="container">
             <h1>Manage Student</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <br />
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
       
      </div>
    </div>
    <>
      <Footer />
      </>
    </div>
  );
};

export default App;
