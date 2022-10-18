import { DashboardScreen } from "./ui/screens";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardScreen />} />
    </Routes>
  );
};

export const RouteApp = () => {
  const { theme } = useSelector(({ global }) => global);

  return (
    <div data-theme={theme}>
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};
