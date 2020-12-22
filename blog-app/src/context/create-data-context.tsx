import React, { Reducer, useReducer } from 'react';
import { ActionType } from 'expo/build/Notifications/Notifications.types';

export default <ActionType, ContentType>(
  reducer: React.Reducer<ContentType[], ActionType>,
  actions: { [key: string]: (dispatch: (action: ActionType) => void) => (payload: ContentType) => void },
  initialState: ContentType[],
) => {
  const Context = React.createContext<
    { state: ContentType[] } | (undefined & { [key: string]: (action: ActionType) => void })
  >({ state: initialState });

  const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: { [key: string]: (payload: ContentType) => void } = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
