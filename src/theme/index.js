import { createTheme } from "@mui/material/styles";
import { lightPalette, darkPalette } from "./palette";
import { getTypography } from "./typography";
import computer from "../assets/computer.jpg";
import dev_computer from "../assets/dev_computer.png";

// Common component overrides
const getComponents = (mode) => ({
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        border: "0.5px solid #777FEB",
      },
      root: {
        borderRadius: "8px",
        color: mode === "dark" ? "#d4f2e3" : "#000",
        fontSize: "16px",
        lineHeight: mode === "dark" ? "30px" : "20px",
        fontWeight: 500,
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "2px solid #777FEB",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "2px solid #777FEB",
        },
      },
    },
  },
});

// Light theme
export const lightTheme = createTheme({
  palette: lightPalette,
  images: {
    computer: computer,
  },
  typography: getTypography("light"),
  components: getComponents("light"),
});

// Dark theme
export const darkTheme = createTheme({
  palette: darkPalette,
  images: {
    computer: dev_computer,
  },
  typography: getTypography("dark"),
  components: getComponents("dark"),
});

// Theme selector function
export const getTheme = (isDarkMode) => isDarkMode ? darkTheme : lightTheme;
