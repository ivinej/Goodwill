// import React, { useState } from 'react';

// const Userhome = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     classStudying: '',
//     collegeName: '',
//     currentYear: '',
//     hosteler: false,
//     guardianName: '',
//     fatherOccupation: '',
//     motherOccupation: '',
//     annualIncome: '',
//     ownHouse: false,
//     hasVehicles: false,
//     aadharNumber: '',
//     bankName: '',
//     accountNumber: '',
//   });

//   const handleChange = (e) => {
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

//     setFormData({
//       ...formData,
//       [e.target.name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className=" max-w-sm mx-auto bg-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           First Name:
//         </label>
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Last Name:
//         </label>
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Email:
//         </label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
     
    
      
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Class Studying:
//         </label>
//         <input
//           type="text"
//           name="class stuying"
//           value={formData.classStudying}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div><div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           College Name:
//         </label>
//         <input
//           type="text"
//           name="College Name"
//           value={formData.collegeName}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//         Year of Study:
//         </label>
//         <input
//           type="text"
//           name="Year of study"
//           value={formData.yearofstudy}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Father's Occupation:
//         </label>
//         <input
//           type="text"
//           name="fathers occupation"
//           value={formData.fathersoccupation}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Mother's occupation:
//         </label>
//         <input
//           type="text"
//           name="mothers occupation"
//           value={formData.mothersoccupation}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Annual Income:
//         </label>
//         <input
//           type="text"
//           name="annual income"
//           value={formData.annualIncome}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Aadhar Number::
//         </label>
//         <input
//           type="text"
//           name="Aadhar Number"
//           value={formData.aadharnumber}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Account Number:
//         </label>
//         <input
//           type="text"
//           name="account number"
//           value={formData.accountnumber}
//           onChange={handleChange}
//           required
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
      
//       </form>
//   )
// };

//       export default Userhome;

import React from 'react';

const Userhome = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white mt-9 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Scholarship Registration Form</h1>

      <form>
        <div className="grid grid-cols-2 gap-8">
          <div>
            {/* Personal Details Section */}
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700" htmlFor="name">Name:</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="name" name="name" required />
            </div>

            <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="email">Email:</label>
            <input class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="email" id="email" name="email" required/>
          </div>

          <div class="input-container mb-4">
            <div>
              <label class="text-lg font-medium text-gray-700" for="father_name">Father's Name:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="father_name" name="father_name" required/>
            </div>
            <div>
              <label class="text-lg font-medium text-gray-700" for="father_mobile">Father's Mobile:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="tel" id="father_mobile" name="father_mobile" required/>
            </div>
          </div>

          <div class="input-container mb-4">
            <div>
              <label class="text-lg font-medium text-gray-700" for="father_occupation">Father's Occupation:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="father_occupation" name="father_occupation" required/>
            </div>
            <div>
              <label class="text-lg font-medium text-gray-700" for="mother_occupation">Mother's Occupation:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="mother_occupation" name="mother_occupation" required/>
            </div>
          </div>

          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="profile_picture">Profile Picture:</label>
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="file" id="profile_picture" name="profile_picture" accept="image/*" required/>
          </div>

         

          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="mother_name">Mother's Name:</label>
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="text" id="mother_name" name="mother_name" required/>
          </div>
        </div>

        <div>
          {/* <!-- Family Details Section --> */}
          <div class=" mb-4">
            <div>
              <label class="text-lg font-medium text-gray-700" for="mother_mobile">Mother's Mobile:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="tel" id="mother_mobile" name="mother_mobile" required/>
            </div>
          </div>

          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="occupation">Your Aadhar number:</label>
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="text" id="occupation" name="occupation" required/>
          </div>

          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="family_income">Annual Family Income :</label>
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="text" id="family_income" name="family_income" required/>
          </div>

          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="house_owned">House Owned:</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              id="house_owned" name="house_owned" required>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="electrified">Electrified:</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              id="electrified" name="electrified" required>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="num_rooms">Number of Rooms:</label>
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="number" id="num_rooms" name="num_rooms" required/>
          </div>
        </div>
      </div>

      <div class="mt-8">
        {/* <!-- Bank Details Section --> */}
        <h2 class="text-center text-4xl text-bold text-blue-800 mb-6">Bank Details</h2>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="bank_name">Bank Name:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="bank_name" name="bank_name" required/>
            </div>

            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="branch_name">Branch Name:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="branch_name" name="branch_name" required/>
            </div>
          </div>

          <div>
            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="account_type">Account Type:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="account_type" name="account_type" required/>
            </div>

            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="ifsc_code">IFSC Code:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="ifsc_code" name="ifsc_code" required/>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mt-4">
          <div>
            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="bank_account_name">Name as per Bank Record:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="bank_account_name" name="bank_account_name" required/>
            </div>

            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="account_number">Account Number:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="account_number" name="account_number" required/>
            </div>
          </div>

          <div>
            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="bank_address">Bank Address:</label>
              <textarea
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                id="bank_address" name="bank_address" rows="3" required></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
       {/* <!--- Submit Button --> */}
        <div class="flex justify-center">
          <button type="submit"
            class="py-3 px-6 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2">
            Submit
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Userhome;
