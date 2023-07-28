import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user.js";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <main className={theme}>
      {/* Wrap components that need the contex data in the provider*/}
      <UserProvider>
        <Header
          theme={theme}
          setTheme={setTheme}
          user={user}
          setUser={setUser}
        />
        <Profile theme={theme} user={user} />
      </UserProvider>
    </main>
  );
}

export default App;
