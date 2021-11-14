import React from "react";

// utils
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

export const ThemeProvider = ({children, name, setTheme}) => {
  return (
    <ThemeContext.Provider
      value={{
        name,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemeProvider Types
ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  name: PropTypes.string,
  setTheme: PropTypes.func,
};

// Hook to use theme in any functional component
export const useTheme = () => React.useContext(ThemeContext);

// HOC to inject theme to any functional or class component
export const withTheme = Component => props => {
  return <Component {...props} theme={useTheme()} />;
};

// withTheme Types
withTheme.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
