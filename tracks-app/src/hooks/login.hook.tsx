import React from 'react';
import create from 'zustand';
import { useMutation } from 'react-query';
import { postSignin, postSignup } from '../api/authentication.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { LoginStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

interface IError {
  message: string;
}

export type AuthenticationMethod = (user?: string, password?: string) => Promise<string | null>;
export type AuthenticationWorkflow = (
  authenticationMethod: AuthenticationMethod,
  user?: string,
  password?: string,
) => void;

type AuthenticationStoreType = {
  token: string | null;
  authenticate: AuthenticationWorkflow;
  error?: IError;
  clearError: () => void;
  tryFindToken: () => Promise<boolean>;
};

export const useAuthenticationStore = create<AuthenticationStoreType>((set, get) => ({
  tryFindToken: async () => {
    const token = await AsyncStorage.getItem('jwt_token');
    if (token) {
      set({ token: token });
      return true;
    }
    return false;
  },
  token: null,
  clearError: () => {
    set({ error: undefined });
  },
  authenticate: (authenticationMethod, user, password) => {
    authenticationMethod(user, password)
      .then((value) => {
        set({ token: value });
        if (!value) {
          return AsyncStorage.getItem('jwt_token').then(async (value1) => {
            return value1 === null
              ? value1
              : await AsyncStorage.removeItem('jwt_token').then(() => {
                  set({ token: value });
                });
          });
        } else {
          return AsyncStorage.setItem('jwt_token', value);
        }
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
  const { mutateAsync: signinMutation } = useMutation('signin', postSignin);

  const login: AuthenticationMethod = (user, password) => {
    if (!user || !password) {
      return Promise.reject({ message: 'User and password must be given' });
    }

    return signinMutation({ user, password }).then((value) => {
      return value.data.token;
    });
  };

  const logout: AuthenticationMethod = () => {
    return Promise.resolve(null);
  };

  const signup: AuthenticationMethod = (user, password) => {
    if (!user || !password) {
      return Promise.reject({ message: 'User and password must be given' });
    }

    return signupMutation({ user, password }).then((value) => {
      return value.data.token;
    });
  };

  return { login, signup, logout };
};
