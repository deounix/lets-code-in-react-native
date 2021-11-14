import React from "react";

// utils
import PropTypes from "prop-types";

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

// TabsProvider Types
TabsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  setTab: PropTypes.func,
};

export const useTabs = () => React.useContext(TabsContext);

export const withTabs = Component => props => {
  return <Component {...props} tabs={useTabs()} />;
};

// withTabs Types
withTabs.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
