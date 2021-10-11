import { createTheme, ThemeProvider } from "@material-ui/core";
import Page from "./components/page";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./modules/admin/home/home-screen";
import MessagesScreen from "./modules/admin/messages/messages-screen";
import { Paths } from "./modules/routes";
import ProfileScreen from "./modules/admin/profile/profile-screen";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5640FF",
    },
    secondary: {
      main: "#000425",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <BrowserRouter>
          <Switch>
            <Route component={ProfileScreen} path={Paths.PROFILE} />
            <Route component={MessagesScreen} path={Paths.MESSAGES} />
            <Route component={HomeScreen} path={Paths.HOME} />
          </Switch>
        </BrowserRouter>
      </Page>
    </ThemeProvider>
  );
};

export default App;
