import { Button } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FLAG_ICON_MAP, Locales } from '../../../../../constants/locale';
import RefBox from '../../../../../elements/ref-box';
import useClickOutsideListenerRef from '../../../../../hooks/use-click-outside-listener-ref';
import LangSwitchDropdown from './lang-switch-drodown';

const BOX_ID = 'lang-switch-box-id-123';

const LangSwitch: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const { language } = i18n;

  const closeDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;

    setIsOpen(false);
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  const LangIcon = FLAG_ICON_MAP[language as Locales];

  return (
    <RefBox
      id={BOX_ID}
      height="3rem"
      display="flex"
      position="relative"
      ref={connectedBoxRef}
      flexDirection="column"
      justifyContent="center"
    >
      <Button
        ml="s"
        variant="icon"
        nHover={{ bg: 'transparent' }}
        onClick={() => setIsOpen(true)}
      >
        <LangIcon maxWidth="1.7rem" maxHeight="1.7rem" width="100%" />
      </Button>
      <LangSwitchDropdown isOpen={isOpen} />
    </RefBox>
  );
};

export default LangSwitch;