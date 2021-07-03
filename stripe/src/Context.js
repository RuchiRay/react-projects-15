import React, { useContext, useState } from "react";
import { FaCentercode } from "react-icons/fa";
import sublinks from './myComponents/data'
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({page:'',links:[]})
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text,coordinates) => {
    setLocation(coordinates)
   console.log('printing coordinates',location);
   const sublink = sublinks.find((sublink)=>{
     return sublink.page===text
    })
    setPage(sublink)
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
    
    
  };
  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        closeSubmenu,
        closeSidebar,
        openSubmenu,
        openSidebar,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
