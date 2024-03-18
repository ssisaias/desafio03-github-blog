import { BrowserRouter } from "react-router-dom";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TransactionsProvider>
    </ThemeProvider>
  );
}
