import { createContext, useState } from "react";
import { SiteContext } from "./SiteInfoContext.jsx";

export const SwitchContext = createContext(null);
SiteContext.displayName = "SwitchContext";
const ToogleContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenData = {
    value: isOpen,
    onChange: setIsOpen,
  };

  return (
    <SwitchContext.Provider value={isOpenData}>
      {children}
    </SwitchContext.Provider>
  );
};
export default ToogleContext;
