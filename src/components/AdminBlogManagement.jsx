import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdminBlogManagement = () => {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    image: '',
    slug: '',
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.post('http://localhost:5000/api/blogs', formData, config);
      setFormData({ title: '', excerpt: '', image: '', slug: '' });
      const response = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, config);
      const response = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blog Management</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="block w-full mb-2 p-2 border"
          required
        />
        <input
          type="text"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          placeholder="Excerpt"
          className="block w-full mb-2 p-2 border"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="block w-full mb-2 p-2 border"
        />
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="Slug"
          className="block w-full mb-2 p-2 border"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Blog</button>
      </form>
      <div>
        {Array.isArray(blogs) && blogs.map((blog) => (
          <div key={blog._id} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p>{blog.excerpt}</p>
            <button onClick={() => handleDelete(blog._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogManagement;