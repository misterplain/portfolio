import React, { useContext } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
//viewport display
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//theme
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import { BsGithub } from "react-icons/bs";

console.log("layout", Layout);

export const ThemeContext = React.createContext();

const App = () => {
  // const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewport, setViewport] = useState("");

  // console.log("isDarkMode", isDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("accessed fro app.js" + isDarkMode);
  };

  const theme = !isDarkMode ? lightTheme : darkTheme;

  useEffect(() => {
    function handleResize() {
      const keys = Object.keys(theme.breakpoints.values);
      let currentViewport = "";
      for (let i = keys.length - 1; i >= 0; i--) {
        const breakpoint = theme.breakpoints.values[keys[i]];
        if (window.innerWidth >= breakpoint) {
          currentViewport = keys[i];
          break;
        }
      }
      setViewport(currentViewport);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{isDarkMode}}>
        {" "}
        <ThemeProvider theme={theme}>
          <Layout toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}>
            <Routes>
              <Route index element={<HomeScreen />} />
              <Route path={"/contact"} element={<ContactScreen />} />
              <Route path={"/projects"} element={<ProjectsScreen />} />
            </Routes>
          </Layout>
          <Box
            position='fixed'
            bottom={0}
            left={0}
            bgcolor='rgba(255, 255, 255, 0.5)'
            padding={1}
            borderRadius={5}
          >
            <Typography>{viewport}</Typography>
          </Box>
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
