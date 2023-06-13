import React, { useState } from 'react';

const Userhome = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    classStudying: '',
    collegeName: '',
    currentYear: '',
    hosteler: false,
    guardianName: '',
    fatherOccupation: '',
    motherOccupation: '',
    annualIncome: '',
    ownHouse: false,
    hasVehicles: false,
    aadharNumber: '',
    bankName: '',
    accountNumber: '',
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className=" max-w-sm mx-auto bg-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          First Name:
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
     
    
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Class Studying:
        </label>
        <input
          type="text"
          name="class stuying"
          value={formData.classStudying}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div><div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          College Name:
        </label>
        <input
          type="text"
          name="College Name"
          value={formData.collegeName}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
        Year of Study:
        </label>
        <input
          type="text"
          name="Year of study"
          value={formData.yearofstudy}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Father's Occupation:
        </label>
        <input
          type="text"
          name="fathers occupation"
          value={formData.fathersoccupation}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mother's occupation:
        </label>
        <input
          type="text"
          name="mothers occupation"
          value={formData.mothersoccupation}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Annual Income:
        </label>
        <input
          type="text"
          name="annual income"
          value={formData.annualIncome}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Aadhar Number::
        </label>
        <input
          type="text"
          name="Aadhar Number"
          value={formData.aadharnumber}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Account Number:
        </label>
        <input
          type="text"
          name="account number"
          value={formData.accountnumber}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      </form>
  )
};

      export default Userhome;