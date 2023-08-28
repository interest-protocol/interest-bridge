import {
  Box,
  Motion,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FLAG_ICON_MAP, Locales } from '../../../../../constants/locale';
import { AppTheme } from '../../../../../interface';
import { capitalize } from '../../../../../utils';
import MenuItemWrapper from '../../menu/menu-item-wrapper';
import { MenuSettingsListProps } from '../menu.types';
import MenuSettingsListHeaderMobile from './settings-list-header-mobile';

const MenuSettingsList: FC<MenuSettingsListProps> = ({ openLanguageMenu }) => {
  const { t, i18n } = useTranslation();

  const { language } = i18n;

  const { dark, setDark } = useTheme() as AppTheme<Theme>;

  const LangIcon = FLAG_ICON_MAP[language as Locales];
  const [toggle, setToggle] = useState(true);

  const closeDropdownSettingsMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Box
        p="xl"
        mt="2xs"
        borderTop={['1px solid', '1px solid', '1px solid', 'unset']}
        borderTopColor="outline.outlineVariant"
        display={['none', 'none', 'none', 'flex']}
      >
        <Typography variant="small" color="onSurface">
          {capitalize(t('common.menu.settings') as string)}
        </Typography>
      </Box>
      <MenuSettingsListHeaderMobile
        handleButton={closeDropdownSettingsMenu}
        isOpen={toggle}
      />
      <Motion
        overflow="hidden"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        animate={{ height: toggle ? 'auto' : '0' }}
      >
        <MenuItemWrapper>
          <Typography variant="small" color="onSurface">
            {capitalize(t('common.menu.darkMode') as string)}
          </Typography>
          <SwitchButton
            activation
            name="theme"
            size="medium"
            defaultValue={dark}
            onChange={() => setDark(!dark)}
          />
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Typography variant="small" color="onSurface">
            {capitalize(t('common.menu.testnet') as string)}
          </Typography>
          <SwitchButton
            activation
            name="network"
            size="medium"
            disabled={true}
            defaultValue={false}
          />
        </MenuItemWrapper>
        <MenuItemWrapper onClick={openLanguageMenu}>
          <Typography variant="small">
            {capitalize(t('common.menu.languages') as string)}
          </Typography>
          <LangIcon maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
        </MenuItemWrapper>
      </Motion>
    </>
  );
};

export default MenuSettingsList;
