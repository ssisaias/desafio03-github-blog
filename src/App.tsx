import { BrowserRouter } from "react-router-dom";
import { IssuesProvider } from "./contexts/IssuesContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { UserDataProvider } from "./contexts/UserContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserDataProvider>
        <IssuesProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </IssuesProvider>
      </UserDataProvider>
    </ThemeProvider>
  );
}
