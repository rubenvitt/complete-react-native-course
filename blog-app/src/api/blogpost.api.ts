import axios from 'axios';
import { BlogPost } from '../context/blogpost.context';

const blogposts = axios.create({
  baseURL: 'http://2088a457f2a1.ngrok.io/blogposts',
});

export const fetchAllBlogPosts = async () => {
  const { data } = await blogposts.get('/');

  return data as BlogPost[];
};

export const updateBlogPost = async (blogPost: BlogPost) => {
  await blogposts.put(`/${blogPost.id}`, JSON.stringify(blogPost));
};

export const createBlogPost = async (blogPost: BlogPost) => {
  await blogposts.post('/', blogPost);
};

export const removeBlogPost = async (blogPost: BlogPost) => {
  await blogposts.delete(`/${blogPost.id}`);
};
