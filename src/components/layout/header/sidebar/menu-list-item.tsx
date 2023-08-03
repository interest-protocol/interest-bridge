import {
  Box,
  Motion,
  TooltipWrapper,
  Typography,
} from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { useLocalStorage } from '../../../../hooks/use-local-storage';
import { capitalize } from '../../../../utils';
import { MinusSVG, PlusSVG } from '../../../svg';
import AccordionItem from './accordion-item';
import { MenuListItemProps } from './sidebar.types';

const SidebarMenuListItem: FC<MenuListItemProps> = ({
  Icon,
  name,
  path,
  disabled,
  accordionList,
  setIsCollapsed,
  isCollapsed,
}) => {
  const { t } = useTranslation();
  const [isMenuCollapsed] = useLocalStorage('brigde-menu-collapse', true);
  const [pathName, setPathName] = useState('/');
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      setPathName(url.pathname);
    }
  }, []);

  const getSuffixIcon = () =>
    !isCollapsed &&
    accordionList &&
    (isAccordionOpen ? (
      <MinusSVG
        maxHeight={isCollapsed ? '1.5rem' : '1.2rem'}
        maxWidth={isCollapsed ? '1.5rem' : '1.2rem'}
        width={isCollapsed ? '1.5rem' : '100%'}
      />
    ) : (
      <PlusSVG
        maxHeight={isCollapsed ? '1.5rem' : '1.2rem'}
        maxWidth={isCollapsed ? '1.5rem' : '1.2rem'}
        width={isCollapsed ? '1.5rem' : '100%'}
      />
    ));

  return (
    <Box
      onMouseEnter={() => {
        accordionList && setIsCollapsed(false);
        setIsAccordionOpen(true);
      }}
      onMouseLeave={() => {
        accordionList && setIsCollapsed(isMenuCollapsed);
        setIsAccordionOpen(false);
      }}
    >
      <TooltipWrapper
        bg="inverseSurface"
        tooltipPosition="right"
        display={isCollapsed ? (disabled ? 'none' : 'block') : 'none'}
        width="max-content"
        tooltipContent={
          <Typography
            variant="extraSmall"
            color="inverseOnSurface"
            textTransform="capitalize"
          >
            {capitalize(t(name) as string)}
          </Typography>
        }
      >
        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a
          href={!(disabled || !accordionList) ? undefined : path}
          target="_blank"
          rel="noreferrer"
          key={v4()}
        >
          <Box
            p="0.5rem"
            key={v4()}
            display="flex"
            borderRadius="m"
            color="onSurface"
            opacity={disabled ? 0.7 : 1}
            transition="all 350ms ease-in-out"
            cursor={disabled ? 'not-allowed' : 'pointer'}
            bg={
              accordionList
                ? isAccordionOpen
                  ? 'surface.containerHighest'
                  : pathName === path
                  ? 'surface.containerHighest'
                  : undefined
                : undefined
            }
            nHover={{
              bg: !disabled && 'surface.containerHighest',
            }}
            justifyContent={isCollapsed ? 'center' : 'space-between'}
            alignItems="center"
            mx="auto"
          >
            <Box display="flex">
              <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
              {!isCollapsed && (
                <Typography variant="small" ml="l">
                  {capitalize(t(name) as string)}
                </Typography>
              )}
            </Box>
            {getSuffixIcon()}
          </Box>
        </a>
      </TooltipWrapper>
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
    </Box>
  );
};

export default SidebarMenuListItem;
