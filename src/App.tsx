import { ThemeProvider } from '@stylin.js/react';
import WormholeBridge, {
  WormholeConnectConfig,
} from '@wormhole-foundation/wormhole-connect';
import { FC, useState } from 'react';

import { Layout } from './components';
import { DAppDarkTheme, DAppLightTheme } from './design-system';

const config: WormholeConnectConfig = {
  env: 'mainnet',
};

const App: FC = () => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider
      theme={{ setDark, ...(dark ? DAppDarkTheme : DAppLightTheme) }}
    >
      <Layout pageTitle="pageTitle">
        <WormholeBridge config={config} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
