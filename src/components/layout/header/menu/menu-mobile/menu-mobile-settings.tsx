import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { LOCALE_LIST } from '../../../../../constants/locale';
import LanguageMenuItem from '../language-menu-item';
import MenuItem from '../menu-item';
import MenuItemWrapper from '../menu-item-wrapper';

const LanguageMenu: FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const { changeLanguage } = i18n;

  return (
    <>
      <MenuItemWrapper onClick={() => setOpen(!isOpen)}>
        <MenuItem name="languages" isActive={isOpen} />
      </MenuItemWrapper>
      <Box>
        {isOpen &&
          LOCALE_LIST.map((locale) => (
            <MenuItemWrapper key={v4()} onClick={() => changeLanguage(locale)}>
              <LanguageMenuItem name={locale} />
            </MenuItemWrapper>
          ))}
      </Box>
    </>
  );
};

const SettingsMenu: FC = () => {
  return (
    <Box variant="container" color="text" pt="4xl" justifyItems="unset">
      <Box gridColumn="1/-1" mt="2xl">
        <Typography variant="displaySmall">Settings</Typography>
        <Motion animate="open" mt="4xl" py="4xl">
          <MenuItemWrapper>
            <MenuItem name="darkMode" />
          </MenuItemWrapper>
          <LanguageMenu />
        </Motion>
      </Box>
    </Box>
  );
};

export default SettingsMenu;
