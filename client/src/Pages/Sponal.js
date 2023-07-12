// import React from 'react';

// const StudentCard = ({ name, age, areaOfInterest, annualIncome }) => {
//   return (
//     <div className="bg-white rounded-md shadow-md p-14 ml-6 mr-6 mb-4 border-2 border-purple-500 hover:shadow-lg transition duration-300 transform hover:scale-105">
//       <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">{name}</h2>
//       <p className="text-gray-600 text-sm flex justify-center">
//         <span className="font-bold">Age:</span> {age}
//       </p>
//       <p className="text-gray-600 text-sm text-center">
//         <span className="font-bold">Email:</span> ${email}
//       </p>
//     </div>
//   );
// };

// const RegisteredStudents = ({ students }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {students.map((student, index) => (
//         <StudentCard key={index} {...student} />
//       ))}
//     </div>
//   );
// };

// const Sponal = () => {
//   // Example data
//   const students = [
//     {
//       name: 'John Doe',
//       email: 'jo@gmail.com'
//       dob: 
//     },
//     {
//       name: 'Jane Smith',
//       email: 'jo@gmail.com'
//       dob:
//     },
   
//     // Add more student objects here...
//   ];

//   return (
//     <div className="container mx-auto ">
//       <center><h1 className="text-2xl font-bold mb-4">Registered Students</h1></center>
//       <RegisteredStudents students={students} />
//     </div>
//   );
// };

// export default Sponal;




import React, { useEffect, useState } from 'react';

const StudentCard = ({ name, email, dob }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-14 ml-6 mr-6 mb-4 border-2 border-purple-500 hover:shadow-lg transition duration-300 transform hover:scale-105">
      <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">{name}</h2>
      <p className="text-gray-600 text-sm flex justify-center">
        <span className="font-bold">Email:</span> {email}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Date of Birth:</span> {dob}
      </p>
    </div>
  );
};

const RegisteredStudents = ({ students }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
  );
};

const Sponal = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/spondata')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  return (
    <div className="container mx-auto">
      <center>
        <h1 className="text-2xl font-bold mb-4">Registered Students</h1>
      </center>
      <RegisteredStudents students={students} />
    </div>
  );
};

export default Sponal;
