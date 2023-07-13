import React from 'react';
import Card1 from './Card1';


const About = () => {

  const posts = [{id:1 , title:'Alumnis' , des:' Alumni have valuable experiences that can empower and inspire current students. They can become sponsors, mentors, and advocates for students, offering guidance and resources for their academic and career journeys.'},
  {id:2 , title:'Students' , des:"The heart of any university, students are eager learners and future professionals seeking knowledge and growth. They are the ones who benefit from the support and guidance provided by alumni and the community."},
  {id:3 , title:'Communuty' , des:"By bridging the gap between students and alumni, the community creates an environment where both parties can come together, share knowledge,and provide mentorship, and sponsorship opportunities."}]

  return (
    <div className=' flex  items-center bg-blue-400  '>
        
      {posts &&  posts.map((post)=> (
      <div className="py-10 px-16   justify-center flex-rows  " >
       <Card1 title={post.title}
       des={post.des}/>
       </div>
      ))}
    </div>
  );
}

export default About;
