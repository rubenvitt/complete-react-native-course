import createDataContext from './create-data-context';

export interface BlogPost {
  id: string;
  title: string;
}

export interface IContext {
  state: BlogPost[];
  addBlogPost: (payload: BlogPost) => void;
}

interface ActionType {
  payload: BlogPost;
  type: 'add' | 'update' | 'delete';
}

const reducer = (state: BlogPost[], action: ActionType): BlogPost[] => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: String(state.length),
          title: 'Blogpost #' + state.length,
        },
      ];
    //return [...state, action.payload];
    case 'update':
      return state;
    //return state.map((value) => (value.id === action.payload.id ? action.payload : value));
    case 'delete':
      return state;
    //return state.filter((blogPost) => blogPost.id !== action.payload.id);
  }
  return [];
};

const addBlogPost = (dispatch: (action: ActionType) => void) => {
  return (payload: BlogPost) => {
    dispatch({ type: 'add', payload: payload });
  };
};

export const { Context, Provider } = createDataContext(reducer, { addBlogPost }, []);
