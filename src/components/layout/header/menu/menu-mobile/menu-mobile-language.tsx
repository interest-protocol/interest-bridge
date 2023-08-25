import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { LOCALE_LIST } from '../../../../../constants/locale';
import LanguageMenuItem from '../language-menu-item';
import MenuItemWrapper from '../menu-item-wrapper';

const LanguageMenu: FC = () => {
  const { i18n } = useTranslation();

  const { changeLanguage } = i18n;
  return (
    <Motion
      zIndex={1}
      initial="open"
      textTransform="capitalize"
      animate="open"
      pt="3.875rem"
      width="100%"
    >
      <Box display="flex" flexDirection="column" variant="container">
        {LOCALE_LIST.map((locale) => (
          <MenuItemWrapper key={v4()} onClick={() => changeLanguage(locale)}>
            <LanguageMenuItem name={locale} />
          </MenuItemWrapper>
        ))}
      </Box>
    </Motion>
  );
};

export default LanguageMenu;
