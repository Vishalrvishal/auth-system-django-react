import { useState } from "react";
import DashboardFilters from "../components/filters/DashboardFilters";
import MetricCard from "../components/cards/MetricCard";
import NetMovementModal from "../components/modals/NetMovementModal";

const Dashboard = () => {
  const [filters, setFilters] = useState({});
  const [showNetModal, setShowNetModal] = useState(false);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Asset Dashboard</h1>

      <DashboardFilters onChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <MetricCard title="Opening Balance" value={1200} />
        <MetricCard title="Closing Balance" value={1350} />

        <MetricCard
          title="Net Movement"
          value="+150"
          clickable
          onClick={() => setShowNetModal(true)}
        />

        <MetricCard title="Purchases" value={300} />
        <MetricCard title="Assigned" value={90} />
        <MetricCard title="Expended" value={60} />
      </div>

      {showNetModal && (
        <NetMovementModal onClose={() => setShowNetModal(false)} />
      )}
    </div>
  );
};

export default Dashboard;
