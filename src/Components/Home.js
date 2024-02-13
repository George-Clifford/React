import React from "react";

const Home = (blog, setBlog)=> {
   let blogs = [
              {id: 1, author:"George", body:"And this is yet another one.", title:"Programming"},
              {id: 2, author:"Clifford", body:"This is a body for the blog post.", title:"Design"},
              {id: 3, author:"Mary Doe", body:"This is another body for the blog post.", title:"Code"},
              {id: 4, author:"Jane Smith", body:"And this is yet another one.", title:"Web"},
   ];       

   return(
              <div className="home">
               {blogs.map((blog) =>(
                            <div className="preview" key={blog.id}>
                                          <h3>{blog.title}</h3>
                                          <p>Written by: {blog.author}</p>
                            </div>
               ))}
              </div>
   );
               }
export default Home;