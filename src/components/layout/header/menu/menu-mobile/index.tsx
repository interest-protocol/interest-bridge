import {
  Box,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AppTheme } from '../../../../../interface';
import { MenuMobileProps } from '../menu.types';
import MainMenu from './main-menu';
import SettingsMenu from './menu-mobile-settings';

const MenuMobile: FC<MenuMobileProps> = ({ isOpen, isSettings }) => {
  const { t } = useTranslation();
  const { setDark, dark } = useTheme() as AppTheme<Theme>;
  if (!isOpen) return null;

  return (
    <Box
      top="0"
      pt="4xl"
      left="0"
      zIndex="1"
      width="100vw"
      height="100vh"
      position="fixed"
      bg="surface.container"
      display={['block', 'block', 'block', 'none']}
    >
      <Box pt="s" gap="m" ml="4xl" display="flex">
        <Typography
          variant="medium"
          color="onSurface"
          textTransform="capitalize"
        >
          {t('common.light')}
        </Typography>
        <SwitchButton
          name="theme"
          size="medium"
          defaultValue={dark}
          onChange={() => setDark(!dark)}
        />
        <Typography
          variant="medium"
          color="onSurface"
          textTransform="capitalize"
        >
          {t('common.dark')}
        </Typography>
      </Box>
      {isSettings ? <SettingsMenu /> : <MainMenu />}
    </Box>
  );
};

export default MenuMobile;
