import { useTheme } from '@stylin.js/react';
import stylin from '@stylin.js/react';
import { FC, PropsWithChildren } from 'react';

import { BoxElementProps, BoxProps } from './box.types';

const Box: FC<PropsWithChildren<BoxProps>> = ({ as, ...props }) => {
  const theme = useTheme();

  console.log('>> theme :: ', theme);

  const StylinBox = stylin<BoxElementProps>(as || 'div')();

  return <StylinBox {...props} />;
};

export default Box;
