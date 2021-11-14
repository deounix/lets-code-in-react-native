import React from "react";

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

/* Hook to use theme in any functional component */
export const useTheme = () => React.useContext(ThemeContext);

/* HOC to inject theme to any functional or class component */
export const withTheme = Component => props => {
  return <Component {...props} theme={useTheme()} />;
};
