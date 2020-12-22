import createDataContext from './create-data-context';

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
}

export interface IContext {
  state: BlogPost[];
  addBlogPost: (payload: BlogPost) => void;
  deleteBlogPost: (payload: BlogPost) => void;
  updateBlogPost: (payload: BlogPost) => void;
  emptyList: () => void;
}

interface ActionType {
  payload: BlogPost;
  type: 'add' | 'update' | 'delete' | 'empty';
}

const reducer = (state: BlogPost[], action: ActionType): BlogPost[] => {
  switch (action.type) {
    case 'add':
      if (action.payload.id === undefined) {
        action.payload.id = String(Math.floor(Math.random() * 999999));
      }
      if (state.find((value) => value.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    case 'update':
      return state.map((value) => (value.id === action.payload.id ? action.payload : value));
    case 'delete':
      return state.filter((blogPost) => blogPost.id !== action.payload.id);
    case 'empty':
      return [];
  }
  return [];
};

const addBlogPost = (dispatch: (action: ActionType) => void) => {
  return (payload: BlogPost) => {
    dispatch({ type: 'add', payload: payload });
  };
};

const deleteBlogPost = (dispatch: (action: ActionType) => void) => {
  return (payload: BlogPost) => {
    dispatch({ type: 'delete', payload: payload });
  };
};

const emptyList = (dispatch: (action: ActionType) => void) => {
  return () => {
    dispatch({ type: 'empty', payload: { title: '', content: '' } });
  };
};

const updateBlogPost = (dispatch: (action: ActionType) => void) => {
  return (payload: BlogPost) => {
    dispatch({ type: 'update', payload: payload });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, updateBlogPost, emptyList },
  [],
);
