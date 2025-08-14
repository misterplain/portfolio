// Common palette colors used across both themes
export const commonColors = {
  primary: "#686868",
  secondary: "#777FEB",
  slateBlue: {
    main: "#777FEB",
    secondary: "#646ab0",
  },
  purple: {
    main: "#5222D0",
  },
  greyGreen: {
    main: "#203239",
  },
  lightGreen: {
    main: "#d4f2e3",
  },
  turquoise: {
    main: "#57dba4",
    secondary: "#27b783",
  },
  black: {
    main: "#000000",
  },
};

// Light theme specific colors
export const lightPalette = {
  mode: "light",
  primary: {
    main: commonColors.primary,
  },
  secondary: {
    main: commonColors.secondary,
  },
  slateBlue: commonColors.slateBlue,
  purple: commonColors.purple,
  greyGreen: commonColors.greyGreen,
  lightGreen: commonColors.lightGreen,
  turquoise: commonColors.turquoise,
  black: commonColors.black,
};

// Dark theme specific colors
export const darkPalette = {
  mode: "dark",
  primary: {
    main: commonColors.primary,
  },
  secondary: {
    main: commonColors.secondary,
  },
  slateBlue: commonColors.slateBlue,
  purple: {
    main: commonColors.purple.main,
    secondary: "#3d1027",
  },
  greyGreen: commonColors.greyGreen,
  lightGreen: commonColors.lightGreen,
  turquoise: commonColors.turquoise,
  cobalt: {
    main: "#0f728c",
  },
  darkBlue: {
    main: "#10273d",
    secondary: "#1b4165",
  },
  background: {
    default: "#10273d",
  },
  black: commonColors.black,
};
