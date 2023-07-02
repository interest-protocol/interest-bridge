import { Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { LOCALE_LIST } from '../../../../constants/locale';
import LanguageMenuItem from './language-menu-item';
import { MenuDropdownProps } from './menu.types';
import MenuItem from './menu-item';
import MenuItemWrapper from './menu-item-wrapper';

const wrapperVariants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
};

const MenuDropdown: FC<MenuDropdownProps> = ({ isOpen }) => {
  const { i18n } = useTranslation();
  const { dark } = useTheme() as Theme;
  const { changeLanguage } = i18n;
  const [isLanguageMenu, setLanguageMenu] = useState(false);

  return (
    <Motion
      right="0"
      zIndex={1}
      top="3rem"
      initial="closed"
      borderRadius="m"
      position="absolute"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
      bg={
        dark
          ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #1B1B1F'
          : 'linear-gradient(0deg, rgba(0, 85, 255, 0.08), rgba(0, 85, 255, 0.08)), #F2F0F4'
      }
    >
      {!isLanguageMenu ? (
        <>
          <MenuItemWrapper>
            <MenuItem name="darkMode" />
          </MenuItemWrapper>
          <MenuItemWrapper onClick={() => setLanguageMenu(true)}>
            <MenuItem name="languages" />
          </MenuItemWrapper>
        </>
      ) : (
        <>
          <MenuItemWrapper onClick={() => setLanguageMenu(false)}>
            <LanguageMenuItem name="title" />
          </MenuItemWrapper>
          {LOCALE_LIST.map((locale) => (
            <MenuItemWrapper key={v4()} onClick={() => changeLanguage(locale)}>
              <LanguageMenuItem name={locale} />
            </MenuItemWrapper>
          ))}
        </>
      )}
    </Motion>
  );
};

export default MenuDropdown;
