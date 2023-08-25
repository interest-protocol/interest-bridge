import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { capitalize } from '../../../../utils';
import LangSwitch from './lang-switch';
import MenuBackButton from './menu-back-button';
import MenuButton from './menu-button';
import MenuDesktop from './menu-desktop';
import MenuMobile from './menu-mobile';

const Menu: FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);

  const openLanguageMenu = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('language', 'true');
    window.history.pushState('', '', url.toString());
    setIsLanguage(true);
  };

  const handleCloseLanguage = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('language');
    window.history.pushState('', '', url.toString());
    setIsLanguage(false);
  };

  const handleOpen = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('menu', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpen(true);
  };

  const handleClose = () => {
    handleCloseLanguage();
    const url = new URL(window.location.href);
    url.searchParams.delete('menu');
    window.history.pushState('', '', url.toString());
    setIsOpen(false);
  };

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      const hasMenu = url.searchParams.get('menu') || false;
      const hasLanguage = url.searchParams.get('language') || false;
      setIsOpen(Boolean(hasMenu));
      setIsLanguage(Boolean(hasLanguage));
    }
  }, []);

  return (
    <Box position="relative" width="100%">
      <Box
        zIndex="5"
        ml="-2.5rem"
        display="flex"
        alignItems="center"
        position="relative"
        flexDirection="row-reverse"
        justifyContent="space-between"
        bg={isOpen ? 'transparent' : 'unset'}
      >
        <Box display="flex" alignItems="center">
          <MenuButton
            isOpen={isOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </Box>
        <Typography
          variant="small"
          textTransform="capitalize"
          textAlign="center"
          color="onSurface"
          display={isLanguage ? 'block' : 'none'}
        >
          {capitalize(t('common.menu.selectLanguage') as string)}
        </Typography>
        <MenuBackButton
          handleBack={handleCloseLanguage}
          showButton={isOpen && isLanguage}
        />
      </Box>
      <MenuDesktop isOpen={isOpen} handleClose={handleClose} />
      <MenuMobile
        isOpen={isOpen}
        isLanguage={isLanguage}
        openLanguageMenu={openLanguageMenu}
      />
    </Box>
  );
};

export default Menu;
