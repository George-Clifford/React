// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function BlogPostForm() {
//     const [title, setTitle] = useState('');
//     const [author, setAuthor] = useState('');
//     const [body, setBody] = useState('');
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       // Handle form submission logic here, e.g., send data to an API
//       alert(Title: ${title}, Author: ${author}, Body: ${body});
//       setTitle('');
//       setAuthor('');
//       setBody('');
//     };
  
//     return (
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formTitle">
//           <Form.Label>Title</Form.Label>
//           <Form.Control type="text" placeholder="Enter post title" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </Form.Group>
  
//         <Form.Group className="mb-3" controlId="formAuthor">
//           <Form.Label>Author</Form.Label>
//           <Form.Control type="text" placeholder="Enter author name" value={author} onChange={(e) => setAuthor(e.target.value)} />
//         </Form.Group>
  
//         <Form.Group className="mb-3" controlId="formBody">
//           <Form.Label>Body</Form.Label>
//           <Form.Control as="textarea" rows={5} placeholder="Write your blog post content" value={body} onChange={(e) => setBody(e.target.value)} />
//         </Form.Group>
  
//         <Button variant="primary" type="submit">
//           Save Blog Post
//         </Button>
//       </Form>
//     );
//   }
  
//   export default BlogPostForm;