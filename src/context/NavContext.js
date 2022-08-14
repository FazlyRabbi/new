import { createContext, useState } from "react";

export const NavContext = createContext();

const NavContextProvider = ({ children }) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <NavContext.Provider value={[toggleNavbar, setToggleNavbar]}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
