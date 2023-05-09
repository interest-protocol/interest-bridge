import { ReactElement } from 'react';

import { BRFlagSVG, PTFlagSVG, USFlagSVG } from '../../components/svg';

const SVG_RECORD = {
  'en-US': (
    <USFlagSVG
      width="100%"
      height="100%"
      maxHeight="1.25rem"
      maxWidth="1.25rem"
    />
  ),
  'pt-PT': (
    <PTFlagSVG
      width="100%"
      height="100%"
      maxHeight="1.25rem"
      maxWidth="1.25rem"
    />
  ),
  'pt-BR': (
    <BRFlagSVG
      width="100%"
      height="100%"
      maxHeight="1.25rem"
      maxWidth="1.25rem"
    />
  ),
} as { [key: string]: ReactElement };

export const getSafeLocaleSVG = (locale: string): ReactElement =>
  SVG_RECORD[locale] ?? (
    <USFlagSVG
      width="100%"
      height="100%"
      maxHeight="1.25rem"
      maxWidth="1.25rem"
    />
  );
