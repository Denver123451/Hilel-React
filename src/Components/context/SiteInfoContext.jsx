import { createContext } from "react";

export const SiteContext = createContext(null);
SiteContext.displayName = "SiteContext";
const SiteInfoContext = ({ children }) => {
  const SiteInfo = {
    made: "Denver",
    dataOfPublic: new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  };
  return (
    <SiteContext.Provider value={SiteInfo}>{children}</SiteContext.Provider>
  );
};

export default SiteInfoContext;
