import {
  Box,
  Motion,
  TooltipWrapper,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { capitalize } from '../../../../../utils';
import { MenuItemTitleContentProps } from '../sidebar.types';
import CollapseIcon from './collapsible-icon';

const MenuItemTitleBackground: FC = () => (
  <Motion
    left="50%"
    zIndex="-1"
    height="100%"
    borderRadius="m"
    position="absolute"
    transform="translate(-50%)"
    bg="surface.containerHighest"
    variants={{
      rest: { width: '0' },
      hover: { width: '100%', transition: { duration: 0.3 } },
    }}
  />
);

const MenuItemTitleContent: FC<MenuItemTitleContentProps> = ({
  Icon,
  name,
  path,
  disabled,
  isCollapsed,
  accordionList,
}) => {
  const { t } = useTranslation();
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      setPathName(url.pathname);
    }
  }, []);

  const onClick = () => {
    if (accordionList || disabled) return;
    window.open(path);
  };

  return (
    <Motion
      p="s"
      mx="auto"
      key={v4()}
      zIndex="1"
      display="flex"
      borderRadius="m"
      color="onSurface"
      onClick={onClick}
      overflow="hidden"
      position="relative"
      alignItems="center"
      opacity={disabled ? 0.7 : 1}
      justifyContent="space-between"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      bg={
        pathName === path ||
        accordionList?.some(({ path }) => path === pathName)
          ? 'surface.containerHighest'
          : undefined
      }
    >
      <MenuItemTitleBackground />
      <Box display="flex" alignItems="center">
        <Box width="1.2rem" height="1.2rem" m="2xs">
          <Icon maxHeight="1.2rem" maxWidth="1.2rem" width="100%" />
        </Box>
        <Typography variant="small" ml="l" width="max-content">
          {capitalize(t(name) as string)}
        </Typography>
      </Box>
      {!isCollapsed && accordionList && <CollapseIcon />}
    </Motion>
  );
};

const MenuItemTitle: FC<MenuItemTitleContentProps> = ({
  Icon,
  name,
  path,
  disabled,
  isCollapsed,
  accordionList,
}) => {
  const { t } = useTranslation();

  if (isCollapsed)
    return (
      <TooltipWrapper
        bg="inverseSurface"
        width="max-content"
        tooltipPosition="right"
        display={isCollapsed ? (disabled ? 'none' : 'block') : 'none'}
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
        <MenuItemTitleContent
          Icon={Icon}
          name={name}
          path={path}
          disabled={disabled}
          isCollapsed={isCollapsed}
          accordionList={accordionList}
        />
      </TooltipWrapper>
    );

  return (
    <MenuItemTitleContent
      Icon={Icon}
      name={name}
      path={path}
      disabled={disabled}
      isCollapsed={isCollapsed}
      accordionList={accordionList}
    />
  );
};

export default MenuItemTitle;
