// import React, { useState } from 'react';

// const PostForm = ({ onSubmit }) => {
//   const [content, setContent] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (content.trim() !== '') {
//       onSubmit(content);
//       setContent('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <textarea
//         className="w-full px-3 py-2 border rounded-md resize-none"
//         rows={4}
//         placeholder="Write your post..."
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="px-4 py-2 mt-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
//       >
//         Post
//       </button>
//     </form>
//   );
// };

// const PostList = ({ posts }) => {
//   return (
//     <div>
//       {posts.map((post, index) => (
//         <div
//           key={index}
//           className="p-4 mb-4 border rounded-md"
//         >
//           <p className="mb-2">{post}</p>
//           <hr className="my-2" />
//         </div>
//       ))}
//     </div>
//   );
// };

// const HomePage = () => {
//   const [posts, setPosts] = useState([]);

//   const handlePostSubmit = (content) => {
//     setPosts((prevPosts) => [...prevPosts, content]);
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-2xl font-bold mb-4">My Life Posts</h1>
//       <PostForm onSubmit={handlePostSubmit} />
//       <PostList posts={posts} />
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <div className="mb-4">
      <textarea
        className="w-full px-3 py-2 border rounded-md resize-none"
        rows={4}
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 mt-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  );
};

const ProfileInfo = () => {
  return (
    <div className="bg-white p-4 mb-4 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <p>Date of Birth: 01/01/1990</p>
    </div>
  );
};

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div
          key={index}
          className="p-4 mb-4 border rounded-md"
        >
          <p className="mb-2">{post}</p>
          <hr className="my-2" />
        </div>
      ))}
    </div>
  );
};

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (content) => {
    setPosts((prevPosts) => [...prevPosts, content]);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold mb-4">My Life Posts</h1>
          <PostList posts={posts} />
        </div>
        <div>
          <ProfileInfo />
          <PostForm onSubmit={handlePostSubmit} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

