import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Profile() {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    setUser({
      name: '',
      loggedIn: false,
    });
  };

  return (
    <div>
      <h1>Profile</h1>
      {user.loggedIn ? (
        <>
          <p>Name: {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default Profile;
