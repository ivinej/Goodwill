import React ,{ useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logi from "../Images/Logi.jpg"

function Login1() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleJoin = async event => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/login?email=${email}&&password=${password}`);
      const data = response.data;
      
      // Check if any element in the response data has a matching code
      const matchingElement = data.find(item => item.email === email && item.password === password);

      if (matchingElement) {
        console.log('Success');
         navigate(`../Studhome`);
      } else {
        console.log('Code does not match');
      }
    } catch (error) {
      console.error('Error fetching code:', error);
    }
  };

  // const handleChange = event => {
  //   setEmail(event.target.value);
  // };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  


  return (
    <div>
    {/* <div className="flex justify-center items-center h-screen bg-blue-700"> */}
        <div className='grid grid-cols-2'>
      <div className=' px-40 h-screen py-40 shadow-lg bg-gray-600 '>

        <h1 className='text-5xl mb-6 text-white  block text-center font-semibold'>Login</h1>
        <hr className='mt-3'></hr>
        <div className='mt-5 '>
            <label for="email" class="block text-2xl text-white mb-2">Email</label>
            <input onChange={handleEmailChange} type="text" id="email" name="email" value={ email }  class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder='Enter Email'/>
        </div> 

        <div className='mt-5'>
            <label for="password" class="block text-2xl text-white  mb-2">Password</label>
            <input onChange={handlePasswordChange} type="password" id="password" name="password" value={ password }  class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder='Enter Password'/>
        </div>
        <div className='mt-3 flex justify-between items-center'>
            <div>
                <input type="checkbox"></input>
                <label className='text-1xl'>Remember Me</label>
            </div>
            <div>
                <a href='a' className='text-indigo-800 font-semibold'>Forgot Password?</a>
            </div>
        </div>
        <div className='mt-4'>
            <button type="submit" onClick={handleJoin} className='border-2 border-yellow-100 bg-yellow-600 text-white py-1 w-full rounded-md hover:bg-yellow-800 hover:text-black font-semibold'>Login</button>
        </div>
       </div>
       <div className='  px-12 '> 
       <img  src={Logi}/>
    </div>
    
    </div>
    </div>

  )
}

export default Login1
