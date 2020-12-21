import React, { useEffect, useReducer } from 'react';

interface BlogPost {
  id: string;
  title: string;
}

interface Context {
  data: BlogPost[];
  action: (blogPostAction: ActionType) => void;
}
interface ActionType {
  payload: BlogPost;
  type: 'add' | 'update' | 'delete';
}

const EMPTY_CONTEXT: Context = {
  action: () => {},
  data: [],
};

const BlogContext = React.createContext<Context>(EMPTY_CONTEXT);

export const BlogProvider: React.FC = ({ children }) => {
  const [blogPosts, dispatchBlogPosts] = useReducer<React.Reducer<BlogPost[], ActionType>>(
    (state: BlogPost[], action: ActionType): BlogPost[] => {
      switch (action.type) {
        case 'add':
          return [...state, action.payload];
        case 'update':
          return state.map((value) => (value.id === action.payload.id ? action.payload : value));
        case 'delete':
          return state.filter((blogPost) => blogPost.id !== action.payload.id);
      }
      return [];
    },
    [],
  );

  return (
    <BlogContext.Provider
      value={{
        action: dispatchBlogPosts,
        data: blogPosts,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
