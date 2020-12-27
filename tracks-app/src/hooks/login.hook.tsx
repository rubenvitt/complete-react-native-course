import React from 'react';
import create from 'zustand';
import { useMutation } from 'react-query';
import { postSignup } from '../api/authentication.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFloatingBottomTabBarHeight from '@react-navigation/bottom-tabs/lib/typescript/src/utils/useBottomTabBarHeight';

interface IError {
  message: string;
}

type AuthenticationStoreType = {
  token: string | null;
  signedIn: () => Promise<boolean>;
  authenticate: (
    authenticationMethod: (user?: string, password?: string) => Promise<string | null>,
    user?: string,
    password?: string,
  ) => void;
  error?: IError;
};

export const useAuthenticationStore = create<AuthenticationStoreType>((set, get) => ({
  token: null,
  signedIn: async () => {
    const token = await get().token;
    console.log('my token is', token);
    return token !== null;
  },
  authenticate: (authenticationMethod, user, password) => {
    authenticationMethod(user, password)
      .then((value) => {
        set({ token: value });
        if (value === null) {
          console.log('logout');
          return AsyncStorage.removeItem('jwt_token');
        }
        return AsyncStorage.setItem('jwt_token', value);
      })
      .catch((e) => {
        console.log('setting error', e);
        set({
          error: {
            message: e.message,
          },
        });
      });
  },
  error: undefined,
}));

export const useAuthenticationMethods = () => {
  const { mutateAsync: signupMutation } = useMutation('signup', postSignup);

  const login: () => Promise<string> = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(undefined);
      }, 3000);
    });
  };

  const logout: () => Promise<string | null> = () => {
    return Promise.resolve(null);
  };

  const signup: (user?: string, password?: string) => Promise<string> = (user, password) => {
    console.log('authenticating', user, password);
    if (!user || !password) {
      return Promise.reject({ message: 'User and password must be given' });
    }

    return signupMutation({ user, password }).then((value) => {
      return value.data.token;
    });
  };

  return { login, signup, logout };
};
