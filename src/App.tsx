import {
  darkTheme,
  lightTheme,
  ThemeProvider as InterestThemeProvider,
} from '@interest-protocol/ui-kit';
import WormholeBridge, {
  WormholeConnectConfig,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from '@wormhole-foundation/wormhole-connect';
import { FC } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Layout } from './components';
import { LOCAL_STORAGE_VERSION } from './constants';

const config: WormholeConnectConfig = {
  env: 'mainnet',
};

const App: FC = () => {
  const [dark, setDark] = useLocalStorage(
    `${LOCAL_STORAGE_VERSION}-sui-interest-theme`,
    false
  );

  return (
    <InterestThemeProvider
      theme={{ setDark, ...(dark ? darkTheme : lightTheme) }}
    >
      <Layout pageTitle="pageTitle">
        <WormholeBridge config={config} />
      </Layout>
    </InterestThemeProvider>
  );
};

export default App;
