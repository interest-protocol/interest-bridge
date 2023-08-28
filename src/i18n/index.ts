import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-US': {
    translation: {
      pageTitle: 'Bridge',
      common: {
        followUs: 'Follow Us',
        liquidity: 'Liquidity',
        swap: 'swap',
        home: 'home',
        pool: 'pool',
        lend: 'lend',
        farm: 'farm',
        createToken: 'create token',
        settings: 'settings',
        faucet: 'faucet',
        metrics: 'metrics',
        bridge: 'bridge',
        wormhole: 'wormhole',
        celer: 'celer',
        more: 'more',
        light: 'Light',
        dark: 'Dark',
        seoDescription: 'AMM DEX on Sui. Swap your tokens!',
        menu: {
          settings: 'global settings',
          testnet: 'testnet',
          dark: 'dark',
          light: 'light',
          darkMode: 'dark mode',
          languages: 'languages',
          selectLanguage: 'select language',
        },
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
        createToken: 'Criar token',
        settings: 'Definições',
        faucet: 'faucet',
        metrics: 'metrics',
        wormhole: 'wormhole',
        celer: 'celer',
        more: 'outros',
        light: 'Claro',
        dark: 'Escuro',
        seoDescription:
          'Use as suas crypto para pedir emprestado Dinero, uma moeda estável, de graça.',
        menu: {
          settings: 'definições globais',
          testnet: 'rede de testes',
          dark: 'escuro',
          light: 'claro',
          darkMode: 'modo escuro',
          languages: 'idiomas',
          selectLanguage: 'selecionar idioma',
        },
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
        createToken: 'Criar token',
        settings: 'Definições',
        faucet: 'faucet',
        metrics: 'metrics',
        wormhole: 'wormhole',
        celer: 'celer',
        more: 'more',
        light: 'Claro',
        dark: 'Escuro',
        seoDescription:
          'Use as suas crypto para pedir emprestado Dinero, uma moeda estável, de graça.',
        menu: {
          settings: 'definições globais',
          testnet: 'rede de testes',
          dark: 'escuro',
          light: 'claro',
          darkMode: 'modo escuro',
          languages: 'idiomas',
          selectLanguage: 'selecionar idioma',
        },
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
        createToken: 'Crear token',
        settings: 'Configuración',
        faucet: 'faucet',
        metrics: 'metrics',
        wormhole: 'wormhole',
        celer: 'celer',
        more: 'otros',
        light: 'Claro',
        dark: 'Oscuro',
        seoDescription:
          'Utilice su cripto para pedir prestado Dinero, una moneda estable, de forma gratuita.',
        menu: {
          settings: 'ajustes globales',
          testnet: 'testnet',
          dark: 'oscuro',
          light: 'claro',
          darkMode: 'modo oscuro',
          languages: 'idiomas',
          selectLanguage: 'seleccionar idioma',
        },
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
