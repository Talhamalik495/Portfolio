import React, { createContext, useState } from "react";
import Cookies from "js-cookie";
export const createTheme = createContext();
function Theme({ children }) {
  let [theme, setTheme] = useState("light");

  let changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <createTheme.Provider value={{ theme, changeTheme }}>
      {children}
    </createTheme.Provider>
  );
}

export default Theme;
