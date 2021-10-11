import { createTheme, ThemeProvider } from "@material-ui/core";
import Page from "./components/page";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./modules/admin/home/home-screen";
import MessagesScreen from "./modules/admin/messages/messages-screen";
import { Paths } from "./modules/routes";
import ProfileScreen from "./modules/admin/profile/profile-screen";
import SignIn from "./modules/auth/signin";

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
      <BrowserRouter>
        <Page>
          <Switch>
            <Route component={SignIn} path={Paths.AUTH.SIGNIN} />
            <Route component={ProfileScreen} path={Paths.PROFILE} />
            <Route component={MessagesScreen} path={Paths.MESSAGES} />
            <Route component={HomeScreen} path={Paths.HOME} />
          </Switch>
        </Page>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
