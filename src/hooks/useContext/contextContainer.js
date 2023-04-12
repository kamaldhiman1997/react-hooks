import React, { createContext, useState } from "react";
import Login from "./login";
import Username from "./username";

export const AppContext = createContext(null);

export default function ContextContainer() {
  const [userName, setUserName] = useState("");
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login /> <Username />
    </AppContext.Provider>
  );
}
