import React, { useState } from "react";
import { Link } from "react-router-dom";

const Role = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Select Your Role</h2>
        <div className="flex space-x-4">
          <Link to="student">
          <button
            onClick={() => handleRoleSelect("student")}
            className={`px-4 py-2 rounded-lg ${
              selectedRole === "student"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Student
          </button>
          </Link> 
          <Link to="alumni"> 
          <button
            onClick={() => handleRoleSelect("alumni")}
            className={`px-4 py-2 rounded-lg ${
              selectedRole === "alumni"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Alumni
          </button>
          </Link>  
        </div>
        {selectedRole && (
          <p className="mt-4">
            You have selected: <strong>{selectedRole}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Role;
