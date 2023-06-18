import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {zustandStorage} from '../mmkv/AppStorage';

type AuthStateType = {
  counts: number;
  increaseCount: () => void;
};
export const AuthStore = create(
  persist<AuthStateType>(
    set => ({
      counts: 0,
      increaseCount: () => set(state => ({counts: state.counts + 1})),
    }),
    {
      name: 'food-storage', // unique name
      getStorage: () => zustandStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);

// const useCountStore = create<CountState>(set => ({
//   counts: 0,
//   increaseCount: () => set(state => ({counts: state.counts + 1})),
// }));
