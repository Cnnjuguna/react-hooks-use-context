import React, { useContext, useState } from "react";

// Creating the context

const UserContext = React.createContext();

const [user, setUser] = useState(null);

function UserProvider({ children }) {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
