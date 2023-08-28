import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { wrapperVariants } from '../../../../../constants';
import { LOCALE_LIST } from '../../../../../constants/locale';
import { capitalize } from '../../../../../utils';
import { ArrowLeftSVG } from '../../../../svg';
import LanguageMenuItem from '../../menu/language-menu-item';
import MenuItemWrapper from '../../menu/menu-item-wrapper';
import { MenuLanguageProps } from '../menu.types';

const MenuLanguage: FC<MenuLanguageProps> = ({ isOpen, onBack }) => {
  const { t, i18n } = useTranslation();

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
      <Box p="xl" display="flex" gap="xs" color="onSurface" alignItems="center">
        <Button
          variant="icon"
          p="0 !important"
          nHover={{
            color: 'primary',
            bg: 'transparent',
          }}
          onClick={onBack}
        >
          <ArrowLeftSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </Button>
        <Typography variant="small" textTransform="capitalize">
          {capitalize(t('common.menu.selectLanguage') as string)}
        </Typography>
      </Box>
      {LOCALE_LIST.map((locale) => (
        <MenuItemWrapper key={v4()} onClick={() => changeLanguage(locale)}>
          <LanguageMenuItem name={locale} />
        </MenuItemWrapper>
      ))}
    </Motion>
  );
};

export default MenuLanguage;
