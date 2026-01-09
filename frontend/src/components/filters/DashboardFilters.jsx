const DashboardFilters = ({ onChange }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <input type="date" onChange={(e) => onChange(prev => ({...prev, from: e.target.value}))} />
      <input type="date" onChange={(e) => onChange(prev => ({...prev, to: e.target.value}))} />

      <select onChange={(e) => onChange(prev => ({...prev, base: e.target.value}))}>
        <option value="">All Bases</option>
        <option value="Base-A">Base A</option>
        <option value="Base-B">Base B</option>
      </select>

      <select onChange={(e) => onChange(prev => ({...prev, equipment: e.target.value}))}>
        <option value="">All Equipment</option>
        <option value="Weapon">Weapon</option>
        <option value="Vehicle">Vehicle</option>
        <option value="Ammo">Ammo</option>
      </select>
    </div>
  );
};

export default DashboardFilters;
