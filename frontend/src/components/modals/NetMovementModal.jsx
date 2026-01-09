const NetMovementModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Net Movement Details</h2>

        <ul className="space-y-2">
          <li>Purchases: +300</li>
          <li>Transfer In: +100</li>
          <li>Transfer Out: -250</li>
        </ul>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NetMovementModal;
