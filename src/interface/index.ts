import { Dispatch, SetStateAction } from 'react';

export type AppTheme<T> = T & {
  setDark: Dispatch<SetStateAction<boolean>>;
};
