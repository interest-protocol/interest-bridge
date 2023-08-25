import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { AnimatePresence, easeInOut } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import RefBox from '../../../../../elements/ref-box';
import useClickOutsideListenerRef from '../../../../../hooks/use-click-outside-listener-ref';
import { capitalize } from '../../../../../utils';
import { CaretUpSVG } from '../../../../svg';
import { MenuMobileItemProps } from '../../sidebar/sidebar.types';
import AccordionItem from './accordion-item';

const BOX_ID = 'Mobile-Menu-List-Item-';

const MobileMenuListItem: FC<
  Omit<MenuMobileItemProps, 'setIsCollapsed' | 'isCollapsed'>
> = ({ Icon, name, path, disabled, accordionList, index }) => {
  const { t } = useTranslation();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      setPathName(url.pathname);
    }
  }, []);

  const closeAccordion = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == `${BOX_ID}${index}`) ||
      event
        ?.composedPath()
        ?.some((node: any) => node?.id == `${BOX_ID}${index}`)
    )
      return;

    setIsAccordionOpen(false);
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeAccordion);

  const getSuffixIcon = () =>
    accordionList && (
      <Box display="flex" justifyContent="flex-end" pr="s">
        <Motion
          transform={isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
          display="flex"
          width="1.25rem"
          height="1.25rem"
          whileTap={{
            scale: 0.97,
            transition: { duration: 0.05, ease: easeInOut },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.05, ease: easeInOut },
          }}
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          transition={{ duration: 0.5 }}
        >
          <CaretUpSVG
            width="0.469rem"
            height="0.469rem"
            maxWidth="1.25rem"
            maxHeight="1.25rem"
          />
        </Motion>
      </Box>
    );

  const onClick = () => {
    if (accordionList || disabled) return;
    window.open(path);
  };

  return (
    <RefBox
      id={`${BOX_ID}${index}`}
      ref={connectedBoxRef}
      onClick={() => {
        accordionList && setIsAccordionOpen(!isAccordionOpen);
      }}
    >
      <Box>
        <Box
          p="l"
          key={v4()}
          display="flex"
          borderRadius="m"
          color="onSurface"
          opacity={disabled ? 0.7 : 1}
          cursor={disabled ? 'not-allowed' : 'pointer'}
          height="2.2rem"
          bg={
            pathName === path ||
            accordionList?.some(({ path }) => path === pathName)
              ? 'surface.containerHighest'
              : undefined
          }
          onClick={onClick}
          nHover={{
            bg: !disabled && 'surface.containerHighest',
          }}
          justifyContent="space-between"
          alignItems="center"
          mx="auto"
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="1.2rem" />
            <Typography variant="small" ml="l" width="max-content">
              {capitalize(t(name) as string)}
            </Typography>
          </Box>
          {getSuffixIcon()}
        </Box>
      </Box>
      {accordionList && (
        <AnimatePresence>
          {isAccordionOpen && (
            <Motion
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {accordionList.map((item) => (
                <AccordionItem key={v4()} {...item} />
              ))}
            </Motion>
          )}
        </AnimatePresence>
      )}
    </RefBox>
  );
};

export default MobileMenuListItem;
