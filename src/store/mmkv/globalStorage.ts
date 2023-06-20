import {MMKV} from 'react-native-mmkv';

export const globalStorage = new MMKV();

export function clearGlobalStorage() {
  globalStorage.clearAll();
}

export function getStorageItem(key: string) {
  return globalStorage.getString(key);
}

export function getStorageItemAsNumber(key: string) {
  return globalStorage.getNumber(key);
}

export function getStorageItemAsBoolean(key: string) {
  return globalStorage.getBoolean(key);
}

export function setStorageItem(key: string, value: boolean | string | number) {
  globalStorage.set(key, value);
}

export function removeStorageItem(key: string) {
  globalStorage.delete(key);
}
