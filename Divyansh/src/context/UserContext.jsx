import React, { createContext, useState } from 'react'

// Create the context object
export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Divyansh',
    loggedIn: true,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
