import React, { useState } from "react";
import Layout from "./components/common/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ContactScreen from "./pages/ContactScreen";
import ProjectsScreen from "./pages/ProjectsScreen";
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from "./theme";

// Context for sharing dark mode state across components
export const ThemeContext = React.createContext();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggles between light and dark theme
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = getTheme(isDarkMode);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{isDarkMode}}>
        <ThemeProvider theme={theme}>
          <Layout toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}>
            <Routes>
              <Route index element={<HomeScreen />} />
              <Route path={"/contact"} element={<ContactScreen />} />
              <Route path={"/projects"} element={<ProjectsScreen />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
