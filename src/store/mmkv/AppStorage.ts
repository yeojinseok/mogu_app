import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

export const AppStorage = new MMKV();

/**
 * MMKV 사용 방법
 * @see https://github.com/mrousavy/react-native-mmkv
 * const username = storage.getString('user.name') // 'Marc'
 * const age = storage.getNumber('user.age') // 21
 * const isMmkvFastAsf = storage.getBoolean('is-mmkv-fast-asf')
 * rue storage.set('user.name', 'Marc')
 * storage.set('user.age', 21) storage.set('is-mmkv-fast-asf', true)
 */

/**
 * zustand persist 사용할 때 사용할 storage
 */
export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return AppStorage.set(name, value);
  },
  getItem: name => {
    const value = AppStorage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return AppStorage.delete(name);
  },
};
