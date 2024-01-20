import { useState } from 'react';

const SidePanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    address: '',
  });

  const [popupStatus, setPopupStatus] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = () => {
    // Add code to submit the form data to the database
    // For example, you can use an API call or any data storage mechanism

    // Assuming successful submission for demonstration
    setPopupStatus('success');
    setPopupMessage('Appointment fixed successfully!');
  };

  const closePopup = () => {
    setPopupStatus('');
    setPopupMessage('');
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">
          Ticket Price
        </p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          ₹ 500
        </span>
      </div>


      <form className="mt-4">
        <p className="text_para mt-0 font-semibold text-headingColor">
          User Information:
        </p>

        <div className="mb-3">
          <label htmlFor="name" className="block text-textColor text-sm font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="block text-textColor text-sm font-medium mb-1">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="block text-textColor text-sm font-medium mb-1">
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="block text-textColor text-sm font-medium mb-1">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        <button
          type="button"
          onClick={handleFormSubmit}
          className="btn px-2 w-full rounded-md"
        >
          Book Appointment
        </button>
      </form>

      {/* Popup */}
      {popupStatus && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${popupStatus === 'success' ? 'bg-green-500' : 'bg-blue-500'}`}>
          <div className="bg-white p-5 rounded-md">
            <p className={`font-bold text-lg mb-3 ${popupStatus === 'success' ? 'text-green-700' : 'text-blue-700'}`}>
              {popupStatus === 'success' ? 'Appointment Fixed!' : 'XYZ Function'}
            </p>
            <p className="text-textColor">{popupMessage}</p>
            <button
              type="button"
              onClick={closePopup}
              className="btn mt-3"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidePanel;