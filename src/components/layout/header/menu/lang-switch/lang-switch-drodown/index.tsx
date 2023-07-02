import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { LOCALE_LIST } from '../../../../../../constants/locale';
import LanguageMenuItem from '../../language-menu-item';
import MenuItemWrapper from '../../menu-item-wrapper';
import { LangSwitchDropdownProps } from '../lang-switch.types';

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

const LangSwitchDropdown: FC<LangSwitchDropdownProps> = ({ isOpen }) => {
  const { i18n } = useTranslation();

  const { changeLanguage } = i18n;
  return (
    <Motion
      right="0"
      top="3rem"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      {LOCALE_LIST.map((locale) => (
        <MenuItemWrapper key={v4()} onClick={() => changeLanguage(locale)}>
          <LanguageMenuItem name={locale} />
        </MenuItemWrapper>
      ))}
    </Motion>
  );
};

export default LangSwitchDropdown;
