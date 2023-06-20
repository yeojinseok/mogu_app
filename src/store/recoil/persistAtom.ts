import {MMKV} from 'react-native-mmkv';
import {atom, DefaultValue} from 'recoil';

type PersistStateType = {
  refresh_token?: string;
  access_token?: string;
};

export const storage = new MMKV();

const ATOM_KEY = 'persistState';

export const persistState = atom<PersistStateType>({
  key: ATOM_KEY,
  default: undefined,
  effects: [
    ({setSelf, onSet}) => {
      setSelf(() => {
        let data = storage.getString(ATOM_KEY);
        if (data != null) {
          return JSON.parse(data);
        } else {
          return new DefaultValue();
        }
      });

      onSet((newValue, _, isReset) => {
        if (isReset) {
          storage.delete(ATOM_KEY);
        } else {
          storage.set(ATOM_KEY, JSON.stringify(newValue));
        }
      });
    },
  ],
});
