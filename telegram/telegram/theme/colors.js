const default_theme = {
  primary: "#1e7cf2",
  primary2: "#0669F7",
  darkGrey: "#757575",
  lightGrey: "#F2F2F2",
  white: "#ffffff",
  purple: (opacity = 1) => `rgba(153, 7, 95, ${opacity})`,
  peru: "#b98e61",
  online: "#4dba66",
  offline: "#d4d3d2",
  green: "#50925e",
  dark: "#030b1b",
};

const themes = {
  light: {
    backgroundColor: "#ffffff",
    lightBackgroundColor: "rgba(0, 0, 0, .03)",
    msgBoxBackgroundColor: "#f2f2f2",
    rgbaBackgroundColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    whiteOrDark: "#030b1b",
    grey: "#757575",
    msgContentBackgroundColor: "#f3f4f9",
    ...default_theme,
  },
  dark: {
    backgroundColor: "#030b1b",
    lightBackgroundColor: "rgba(0, 0, 0, .14)",
    msgBoxBackgroundColor: "#272634",
    rgbaBackgroundColor: (opacity = 1) => `rgba(3, 11, 27, ${opacity})`,
    whiteOrDark: "#ffffff",
    grey: "#757575",
    msgContentBackgroundColor: "#f7f8fd",
    ...default_theme,
  },
};

export {themes, default_theme};
