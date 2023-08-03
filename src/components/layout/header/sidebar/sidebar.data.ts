import { Routes, RoutesEnum } from '../../../../constants';
import {
  BridgeSVG,
  FarmSVG,
  FaucetSVG,
  HomeSVG,
  LendSVG,
  NewTokenSVG,
  PoolSVG,
  SwapSVG,
} from '../../../svg';
import { MenuListItemProps } from './sidebar.types';

export const SIDEBAR_ITEMS: ReadonlyArray<
  Omit<MenuListItemProps, 'setIsCollapsed' | 'isCollapsed'>
> = [
  {
    Icon: HomeSVG,
    name: 'common.home',
    path: Routes[RoutesEnum.DApp],
    disabled: true,
  },
  {
    Icon: SwapSVG,
    name: 'common.swap',
    path: Routes[RoutesEnum.Swap],
    disabled: false,
  },
  {
    Icon: PoolSVG,
    name: 'common.pool',
    path: Routes[RoutesEnum.DEXPool],
    disabled: false,
  },
  {
    Icon: LendSVG,
    name: 'common.lend',
    path: Routes[RoutesEnum.Lend],
    disabled: false,
  },
  {
    Icon: FarmSVG,
    name: 'common.farm',
    path: Routes[RoutesEnum.LiquidityFarms],
    disabled: false,
    alpha: true,
  },
  {
    Icon: FarmSVG,
    name: 'common.farm',
    path: Routes[RoutesEnum.Farms],
    disabled: false,
  },
  {
    Icon: NewTokenSVG,
    name: 'common.createToken',
    path: Routes[RoutesEnum.CreateToken],
    disabled: false,
  },
  {
    Icon: FaucetSVG,
    name: 'common.faucet',
    path: Routes[RoutesEnum.Faucet],
    disabled: false,
  },
  {
    Icon: BridgeSVG,
    name: 'common.bridge',
    path: Routes[RoutesEnum.Bridge],
    disabled: false,
    accordionList: [
      {
        name: 'common.wormhole',
        path: Routes[RoutesEnum.Bridge],
      },
      {
        name: 'common.celer',
        path: Routes[RoutesEnum.Bridge],
      },
    ],
  },
];
