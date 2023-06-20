import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {zustandStorage} from '../mmkv/AppStorage';

type AuthStateType = {
  isLogin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: AuthStateType = {
  isLogin: false,
  accessToken: null,
  refreshToken: null,
};

export const useAuthStorage = create(
  persist<AuthStateType>(() => ({...initialState}), {
    name: 'authStorage', // unique name
    getStorage: () => zustandStorage, // (optional) by default, 'localStorage' is used
  }),
);

export namespace Auth {
  export function getToken() {
    const {accessToken, refreshToken} = useAuthStorage.getState();
    return {accessToken, refreshToken};
  }

  export function signOut() {
    useAuthStorage.setState(initialState);
  }

  export function signIn(accessToken: string, refreshToken: string) {
    useAuthStorage.setState({isLogin: true, accessToken, refreshToken});
  }

  export function removeAccessToken() {
    useAuthStorage.setState(prev => ({...prev, accessToken: null}));
  }

  export function removeRefreshToken() {
    useAuthStorage.setState(prev => ({...prev, refreshToken: null}));
  }
}
