import { Routes, Route } from "react-router-dom";
import { RepoIssues } from "./pages/RepoIssues";
import { Issue } from "./pages/Issue";
/* import { DefaultLayout } from './layouts/DefaultLayout' */

export function Router() {

  return (
      <Routes>
        <Route path="/" element={<RepoIssues />} />
        <Route path="/issue/:id" element={<Issue />} />
      </Routes>
  );
}
