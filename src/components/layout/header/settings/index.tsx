import { Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';

import { LOCALE_LIST, Locales } from '../../../../constants/locale';
import RefBox from '../../../../elements/ref-box';
import useClickOutsideListenerRef from '../../../../hooks/use-click-outside-listener-ref';
import { CogsSVG } from '../../../svg';
import MenuLanguage from './menu-language';
import MenuSettings from './menu-settings';

const BOX_ID = 'settings-dropdown';

const Settings: FC = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { colors } = useTheme() as Theme;

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      const hasLanguage = url.searchParams.get('language') || false;
      const hasSettings = url.searchParams.get('settings') || false;
      setIsOpenSettings(Boolean(hasLanguage));
      setIsOpenSettings(Boolean(hasSettings));
    }
  }, []);

  const closeDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;

    handleCloseLanguage();
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  const handleOpenSettings = () => {
    handleCloseLanguage();
    const url = new URL(window.location.href);
    url.searchParams.set('settings', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpenSettings(true);
  };

  const handleCloseSettings = () => {
    handleCloseLanguage;
    const url = new URL(window.location.href);
    url.searchParams.delete('settings');
    window.history.pushState('', '', url.toString());
    setIsOpenSettings(false);
  };

  const handleOpenLanguage = () => {
    handleCloseSettings();
    const url = new URL(window.location.href);
    url.searchParams.set('language', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpenLanguage(true);
  };

  const handleCloseLanguage = () => {
    handleCloseSettings();
    const url = new URL(window.location.href);
    url.searchParams.delete('language');
    window.history.pushState('', '', url.toString());
    setIsOpenLanguage(false);
  };

  return (
    <RefBox
      id={BOX_ID}
      display="flex"
      border="1px solid"
      borderRadius="100%"
      position="relative"
      flexDirection="column"
      ref={connectedBoxRef}
      justifyContent="center"
      transition="background-color .5s"
      ml={['0.5rem', '0.5rem', '0.5rem', 'unset']}
      borderColor={colors['outline.outlineVariant']}
      nHover={{ bg: colors['outline.outlineVariant'] }}
    >
      <Button
        variant="icon"
        nHover={{ bg: 'transparent' }}
        onClick={handleOpenSettings}
      >
        <CogsSVG maxWidth="1.7rem" maxHeight="1.7rem" width="100%" />
      </Button>
      <MenuSettings
        isOpen={isOpenSettings}
        openLanguageMenu={handleOpenLanguage}
      />
      <MenuLanguage
        isOpen={isOpenLanguage}
        onBack={handleOpenSettings}
        locales={LOCALE_LIST as ReadonlyArray<Locales>}
      />
    </RefBox>
  );
};

export default Settings;
