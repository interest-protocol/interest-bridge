import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-US': {
    translation: {
      pageTitle: 'Bridge',
      common: {
        followUs: 'Follow Us',
        liquidity: 'Liquidity',
        seoDescription: 'AMM DEX on Sui. Swap your tokens!',
      },
    },
  },
  'pt-BR': {
    translation: {
      pageTitle: 'Bridge',
      common: {
        followUs: 'Siga-nos',
        liquidity: 'Liquidez',
        seoDescription:
          'Use as suas crypto para pedir emprestado Dinero, uma moeda estável, de graça.',
      },
    },
  },
  'pt-PT': {
    translation: {
      pageTitle: 'Bridge',
      common: {
        followUs: 'Siga-nos',
        liquidity: 'Liquidez',
        seoDescription:
          'Use as suas crypto para pedir emprestado Dinero, uma moeda estável, de graça.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
