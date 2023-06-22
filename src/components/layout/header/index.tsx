import { useTheme } from '@stylin.js/react';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Routes, RoutesEnum } from '../../../constants';
import { Box, Typography } from '../../../elements';
import useEventListener from '../../../hooks/use-event-listener';
import { LogoSVG, MoonSVG, SunSVG } from '../../svg';
import SwitchLang from '../../switch-lang';
import MobileMenu from './mobile-menu';

const Header: FC = () => {
  const { t } = useTranslation();
  const { setDark, dark } = useTheme() as any;

  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  const handleChangeTheme = () => setDark(!dark);

  return (
    <Box>
      <Box
        py="M"
        as="header"
        bg="foreground"
        px={['M', 'L']}
        alignItems="center"
        justifyContent="space-between"
        display={['flex', 'flex', 'flex', 'grid']}
        gridTemplateColumns="repeat(3, 1fr)"
      >
        <Box display="flex" alignItems="center">
          <a href={Routes[RoutesEnum.Home]} target="_blank" rel="noreferrer">
            <Box
              mr="L"
              color="text"
              width="2.5rem"
              height="2.5rem"
              maxWidth="50px"
              maxHeight="50px"
              cursor="pointer"
              nHover={{ color: 'accent' }}
              nActive={{ color: 'accentActive' }}
            >
              <LogoSVG
                maxHeight="2.5rem"
                maxWidth="2.5rem"
                width="100%"
                aria-label="Logo"
                fill="currentColor"
              />
            </Box>
          </a>
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          display={['none', 'none', 'flex']}
        >
          <a href={Routes[RoutesEnum.Swap]} target="_blank" rel="noreferrer">
            <Typography
              px="XL"
              cursor="pointer"
              variant="normal"
              borderRight="1px solid"
              borderColor="bottomBackground"
              nHover={{ color: 'accentActive' }}
            >
              Swap
            </Typography>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={Routes[RoutesEnum.Liquidity]}
          >
            <Typography
              px="XL"
              cursor="pointer"
              variant="normal"
              borderRight="1px solid"
              textTransform="uppercase"
              borderColor="bottomBackground"
              nHover={{ color: 'accentActive' }}
            >
              {t('common.liquidity')}
            </Typography>
          </a>
          <Typography
            px="XL"
            cursor="pointer"
            variant="normal"
            nHover={{ color: 'accentActive' }}
          >
            BRIDGE
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Box display="flex" justifyContent="flex-end" alignItems="stretch">
            {!isMobile && (
              <Box display="flex" alignItems="stretch">
                <SwitchLang isMobile={false} />
                <Box
                  px="S"
                  height="2.8rem"
                  alignItems="center"
                  display="inline-flex"
                  justifyContent="center"
                  onClick={handleChangeTheme}
                  color="text"
                  cursor="pointer"
                  nHover={{ color: 'accent' }}
                >
                  {!dark ? (
                    <MoonSVG
                      width="1rem"
                      maxHeight="3rem"
                      maxWidth="3rem"
                      fill="currentColor"
                    />
                  ) : (
                    <SunSVG
                      width="1rem"
                      maxHeight="3rem"
                      maxWidth="3rem"
                      fill="currentColor"
                    />
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        {isMobile && <MobileMenu dark={dark} changeTheme={handleChangeTheme} />}
      </Box>
    </Box>
  );
};

export default Header;
