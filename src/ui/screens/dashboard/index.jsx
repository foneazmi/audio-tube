import { PlayerComponent, Navbar } from "../../components";
export const DashboardScreen = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="btm-nav h-28">
        <PlayerComponent />
      </div>
    </div>
  );
};
