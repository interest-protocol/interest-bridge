import { Box, RadioButton, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FLAG_ICON_MAP } from '../../../../constants/locale';
import { Locales } from '../../../../constants/locale';
import { CaretLeftSVG } from '../../../svg';
import { LanguageMenuItemProps } from './menu.types';

const LanguageMenuItem: FC<LanguageMenuItemProps> = ({ name }) => {
  const { i18n } = useTranslation();

  const { language } = i18n;

  const Icon = name === 'title' ? CaretLeftSVG : FLAG_ICON_MAP[name as Locales];

  return (
    <>
      <Box display="grid" gridTemplateColumns="2rem auto" alignItems="center">
        <Box
          as="span"
          lineHeight="0"
          width={name === 'title' ? '0.5rem' : '1rem'}
        >
          <Icon
            maxWidth={name === 'title' ? '0.5rem' : '1rem'}
            maxHeight={name === 'title' ? '0.5rem' : '1rem'}
            width="100%"
          />
        </Box>
        <Typography
          variant="medium"
          whiteSpace="nowrap"
          letterSpacing="0.031rem"
          fontFamily="'Roboto', sans-serif"
          textTransform="capitalize"
        >
          {name}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        {name !== 'title' && (
          <RadioButton
            name={name}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={() => {}}
            checked={language === name}
          />
        )}
      </Box>
    </>
  );
};

export default LanguageMenuItem;
