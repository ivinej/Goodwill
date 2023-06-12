import React, { useState } from 'react'
import axios from 'axios';
import Image from '../Images/image 1.png'
import { useNavigate } from 'react-router-dom';
const Register = () => {


////**** */
  
    
  
      const [user, setUser] = useState({
          firstName: "",
          lastName: "",
          phoneNumber:"",
          email: "",
          password:""
          
        });
  
  
        const navigate = useNavigate();         
  
          const handleChange = (e) => {
              const { name, value } = e.target;
             
  
              setUser((prevState) => ({
                  ...prevState,
                  [name]: value
              }));
              }
         
  
          const handleSubmit = (e) => {
              e.preventDefault();
  
          
  
        // Make a POST request to the backend
      axios
      .post("http://localhost:5000/register", user)
      .then((response) => {
        // Handle success response
        console.log("User creds created:", response.data);
        
       
         navigate('../Login1');
     
      })
      .catch((error) => {
        // Handle error response
        console.error("Error creating question:", error);
      });
  };
  
          const {firstName, lastName, phoneNumber, email, password } = user;


///*********     end */




  return (
    
    <section className="bg-[#4579BB] min-h-screen flex items-center justify-center">
      < div className ="bg-[#4579BB] flex rounded-2xl shadow-lg w-full p-6 items-center">
      
      
      <div className="md:w-1/2 px-8 md:px-16 items-center">


        <h2 className=" text-center font-bold p-5 text-4xl text-white  ">Register with</h2>  <center><img  src="Goodwill.png"  alt="" className=""></img></center>
        <p className="text-1xl mt-4 text-center text-white">If you are already a member,
          easily Register
        </p>

        <form action="" className="flex flex-col gap-4">
          <input className="p-1 mt-5 rounded-xl border" type="text" onChange={ handleChange} name="firstName"  id="firstName" value={ firstName } placeholder="First Name"></input>
          <input className="p-1  rounded-xl" type="text" onChange={ handleChange} name="lastName"  id="lastName" value={ lastName } placeholder="Last Name" size="80"></input>
          <input className="p-1 rounded-xl" type="text" onChange={ handleChange} name="phoneNumber"  id="phoneNumber" value={ phoneNumber } placeholder="Phone Number"></input>
          <input className="p-1 rounded-xl" type="email" onChange={ handleChange} name="email"  id="email" value={ email } placeholder="Email"></input>
          <div className="relative">
            <input className="p-1 rounded-xl border w-full" type="password"  onChange={ handleChange} name="password"  id="password" value={ password }  placeholder="Password"></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye absolute top-1/3 right-3 transalate-y-1/2" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>

          </div>
          <button onClick={handleSubmit} className="bg-[#08318B] text-white rounded-xl py-2 hover:scale-105 duration-300">Register</button>
        </form>

        <div className="mt-6 cols-3 items-center text-white ">
          {/* <hr className="border-white-500"></hr>
          <p className="text-center text-sm">OR</p> */}
          <hr className="border-white-500"></hr> </div>
       

        <div className="mt-3 text-sm flex justify-between items-center ">
          <p className="text-white">Already have an account?</p>
          <button   className="py-2 px-5  bg-white border rounded-xl hover:scale-105 duration-300">Log in</button>
        </div>

      </div>



      <div>

      </div>

      
    

        <div className="sm:block hidden w-1/2 align-middle"></div>
        <img className="rounded-xl w-full" src={Image} alt=''></img>
      </div>
        
        </section>
     
  )
};


export default Register;
