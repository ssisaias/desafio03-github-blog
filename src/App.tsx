import { BrowserRouter } from "react-router-dom";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { UserDataProvider } from "./contexts/UserContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* 
      <TransactionsProvider> */}
      <UserDataProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserDataProvider>
      {/* 
      </TransactionsProvider> */}
    </ThemeProvider>
  );
}
