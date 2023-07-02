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
import { FC, useState } from 'react';

import { Layout } from './components';

const config: WormholeConnectConfig = {
  env: 'mainnet',
};

const App: FC = () => {
  const [dark, setDark] = useState(false);

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
