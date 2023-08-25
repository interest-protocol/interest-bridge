/**
 * @RoutesEnum is a custom data type
 * @description this data type will help us to uniformize our route names
 */
export enum RoutesEnum {
  Home = 'home',
  DApp = 'dapp',
  Swap = 'swap',
  Farms = 'farms',
  Lend = 'lend',
  FarmDetails = 'farms-details',
  DEXPool = 'dex-pool',
  DEXFindPool = 'dex-find-pool',
  DEXPoolDetails = 'dex-pool-details',
  Wormhole = 'wormhole',
  LiquidityFarms = 'liquidity',
  Faucet = 'faucet',
  NewToken = 'new-token',
  CreateToken = 'create-token',
  Metrics = 'metrics',
  Celer = 'celer',
}

/**
 * @Routes is the constant with our internal or external routes
 * @description this constant will help us to create standard routes
 */
export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Home]: 'https://interestprotocol.com/',
  [RoutesEnum.DApp]: 'https://interestprotocol.com/dapp',
  [RoutesEnum.Swap]: 'https://interestprotocol.com/dapp/swap',
  [RoutesEnum.Farms]: 'https://interestprotocol.com/dapp/farms',
  [RoutesEnum.Lend]: 'https://www.interestprotocol.com/dapp/alpha/lending',
  [RoutesEnum.FarmDetails]: 'https://interestprotocol.com/dapp/farms/details',
  [RoutesEnum.DEXPool]: 'https://interestprotocol.com/dapp/dex/pool',
  [RoutesEnum.DEXFindPool]: 'https://interestprotocol.com/dapp/dex/pool/find',
  [RoutesEnum.DEXPoolDetails]:
    'https://interestprotocol.com/dapp/dex/pool/details',
  [RoutesEnum.Faucet]: 'https://interestprotocol.com/dapp/faucet',
  [RoutesEnum.NewToken]: 'https://www.interestprotocol.com/dapp/create-token',
  [RoutesEnum.LiquidityFarms]: 'https://interestprotocol.com/dapp/liquidity',
  [RoutesEnum.CreateToken]: 'https://interestprotocol.com/dapp/create-token',
  [RoutesEnum.Metrics]: 'https://interestprotocol.com/dapp/metrics',
  [RoutesEnum.Celer]: 'https://cbridge.celer.network/1/12370001/USDC',
  [RoutesEnum.Wormhole]: '/',
};
