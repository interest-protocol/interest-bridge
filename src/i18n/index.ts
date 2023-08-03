import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-US': {
    translation: {
      pageTitle: 'Bridge',
      common: {
        followUs: 'Follow Us',
        liquidity: 'Liquidity',
        swap: 'Swap',
        bridge: 'Bridge',
        home: 'Home',
        pool: 'Pool',
        lend: 'Lend',
        farm: 'Farm',
        wormhole: 'wormhole',
        celer: 'celer',
        createToken: 'Create token',
        settings: 'Settings',
        light: 'Light',
        dark: 'Dark',
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
        swap: 'Troca',
        bridge: 'Bridge',
        home: 'Inicio',
        pool: 'Pool',
        lend: 'Empréstimo',
        farm: 'Farm',
        wormhole: 'wormhole',
        celer: 'celer',
        createToken: 'Criar token',
        settings: 'Definições',
        light: 'Claro',
        dark: 'Escuro',
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
        swap: 'Troca',
        bridge: 'Bridge',
        home: 'Inicio',
        pool: 'Pool',
        lend: 'Empréstimo',
        farm: 'Farm',
        wormhole: 'wormhole',
        celer: 'celer',
        createToken: 'Criar token',
        settings: 'Definições',
        light: 'Claro',
        dark: 'Escuro',
        seoDescription:
          'Use as suas crypto para pedir emprestado Dinero, uma moeda estável, de graça.',
      },
    },
  },
  'es-ES': {
    translation: {
      pageTitle: 'Bridge',
      common: {
        followUs: 'Síguenos en',
        liquidity: 'Liquidez',
        swap: 'Intercambio',
        bridge: 'Bridge',
        home: 'Inicio',
        pool: 'Pool',
        lend: 'Préstamo',
        farm: 'Farm',
        wormhole: 'wormhole',
        celer: 'celer',
        createToken: 'Crear token',
        settings: 'Configuración',
        light: 'Claro',
        dark: 'Oscuro',
        seoDescription:
          'Utilice su cripto para pedir prestado Dinero, una moneda estable, de forma gratuita.',
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
