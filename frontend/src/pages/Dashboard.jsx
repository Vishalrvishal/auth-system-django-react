import { motion } from "framer-motion";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const navigator = () => {
    navigate("/login");
  };
  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="dashboard-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Dashboard
      </motion.h1>

      <div className="dashboard-cards">
        {["Profile", "Security", "Settings"].map((item, index) => (
          <motion.div
            key={item}
            className="dashboard-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{item}</h3>
            <p>Manage your {item.toLowerCase()}</p>
          </motion.div>
        ))}
      </div>
      <button onClick={navigator}>Logout</button>
    </motion.div>
  );
}

export default Dashboard;
