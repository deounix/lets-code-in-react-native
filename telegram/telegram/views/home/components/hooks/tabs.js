import React from "react";

const TabsContext = React.createContext();

export const TabsProvider = ({children, setTab}) => {
  return (
    <TabsContext.Provider
      value={{
        setTab,
      }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => React.useContext(TabsContext);

export const withTabs = Component => props => {
  return <Component {...props} tabs={useTabs()} />;
};
