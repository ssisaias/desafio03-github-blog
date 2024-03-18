import { Routes, Route } from "react-router-dom";
import { Transactions } from "./pages/Transactions";
import { Issue } from "./pages/Issue";
/* import { DefaultLayout } from './layouts/DefaultLayout' */

export function Router() {

  return (
      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="/issue/1" element={<Issue />} />
      </Routes>
    
  );
}
