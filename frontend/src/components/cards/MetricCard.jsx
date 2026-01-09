const MetricCard = ({ title, value, clickable, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 bg-white shadow rounded cursor-${clickable ? "pointer" : "default"}`}
    >
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default MetricCard;
