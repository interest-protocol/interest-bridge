import { Routes, RoutesEnum } from '../../../../constants';
import { BridgeSVG, DotsSVG, SwapSVG, TrendUpSVG } from '../../../svg';
import { MenuItemProps } from './sidebar.types';

export const SIDEBAR_ITEMS: ReadonlyArray<
  Omit<
    MenuItemProps,
    'setIsCollapsed' | 'isCollapsed' | 'setTemporarilyOpen' | 'temporarilyOpen'
  >
> = [
  {
    Icon: SwapSVG,
    name: 'common.swap',
    path: Routes[RoutesEnum.Swap],
    disabled: false,
  },
  {
    Icon: TrendUpSVG,
    name: 'common.metrics',
    path: Routes[RoutesEnum.Metrics],
    disabled: false,
  },
  {
    Icon: BridgeSVG,
    name: 'common.bridge',
    path: '#',
    disabled: false,
    accordionList: [
      {
        name: 'common.wormhole',
        path: Routes[RoutesEnum.Wormhole],
      },
      {
        name: 'common.celer',
        path: Routes[RoutesEnum.Celer],
      },
    ],
  },
  {
    Icon: DotsSVG,
    name: 'common.more',
    path: '#',
    disabled: false,
    accordionList: [
      {
        name: 'common.pool',
        path: Routes[RoutesEnum.DEXPool],
      },
      {
        name: 'common.lend',
        path: Routes[RoutesEnum.Lend],
      },
      {
        name: 'common.liquidity',
        path: Routes[RoutesEnum.LiquidityFarms],
      },
      {
        name: 'common.farm',
        path: Routes[RoutesEnum.Farms],
      },
      {
        name: 'common.createToken',
        path: Routes[RoutesEnum.CreateToken],
      },
      {
        name: 'common.faucet',
        path: Routes[RoutesEnum.Faucet],
      },
    ],
  },
];
