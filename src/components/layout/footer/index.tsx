import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { Routes, RoutesEnum, SOCIAL_MEDIAS } from '../../../constants';
import { Box, Button } from '../../../elements';
import Container from '../../container';
import SocialMediaCard from '../../social-media-card';
import { BridgeSVG, DexSVG, GitBookSVG, LiquiditySVG } from '../../svg';

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      zIndex={3}
      as="footer"
      id="footer"
      width="100%"
      boxShadow="0 0 0.5rem #0003"
      bottom={['0', '0', '0', 'unset']}
      pt={['NONE', 'NONE', 'XL']}
      pb={['env(safe-area-inset-bottom)', 'env(safe-area-inset-bottom)', 'XL']}
      position={['fixed', 'fixed', 'fixed', 'static']}
      bg={['foreground', 'foreground', 'foreground', 'foreground']}
    >
      <Container dapp width="100%">
        <Box display={['none', 'none', 'flex']} justifyContent="center">
          {[
            ...SOCIAL_MEDIAS,
            {
              title: 'Docs',
              Logo: GitBookSVG,
              link: 'https://docs.interestprotocol.com/',
            },
          ].map((item) => (
            <SocialMediaCard key={v4()} {...item} />
          ))}
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          display={['flex', 'flex', 'none']}
        >
          <a href={Routes[RoutesEnum.Swap]} target="_blank" rel="noreferrer">
            <Button
              ml="S"
              px="0.8rem"
              fontSize="M"
              display="flex"
              flexDirection="column"
              variant="primary"
              alignItems="center"
              borderRadius="M"
              justifyContent="space-between"
              nHover={{ bg: 'accent', color: 'text' }}
              nActive={{ bg: 'accentActive', color: 'text' }}
            >
              <DexSVG
                width="1.1rem"
                height="1.1rem"
                fill="currentColor"
                maxHeight="2.5rem"
                maxWidth="auto"
                style={{ marginBottom: '8px' }}
              />
              Swap
            </Button>
          </a>
          <a
            href={Routes[RoutesEnum.Liquidity]}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              ml="S"
              px="0.8rem"
              fontSize="M"
              display="flex"
              flexDirection="column"
              variant="primary"
              alignItems="center"
              borderRadius="M"
              justifyContent="space-between"
              nHover={{ bg: 'accent', color: 'text' }}
              nActive={{ bg: 'accentActive', color: 'text' }}
            >
              <LiquiditySVG
                width="1.1rem"
                height="1.1rem"
                fill="currentColor"
                maxHeight="2.5rem"
                maxWidth="auto"
                style={{ marginBottom: '8px' }}
              />
              {t('common.liquidity')}
            </Button>
          </a>
          <Button
            ml="S"
            px="0.8rem"
            fontSize="M"
            display="flex"
            flexDirection="column"
            variant="primary"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="M"
            nHover={{ bg: 'accent', color: 'text' }}
            nActive={{ bg: 'accentActive', color: 'text' }}
          >
            <BridgeSVG
              width="1.1rem"
              height="1.1rem"
              maxHeight="2.5rem"
              maxWidth="auto"
              style={{ marginBottom: '8px' }}
            />
            Bridge
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
