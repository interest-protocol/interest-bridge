import { Routes, RoutesEnum } from '../../../../constants';
import {
  BridgeSVG,
  FarmSVG,
  LendSVG,
  NewTokenSVG,
  PoolSVG,
  SwapSVG,
} from '../../../svg';
import Home from '../../../svg/home';

export const SIDEBAR_ITEMS = [
  {
    Icon: Home,
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
    path: Routes[RoutesEnum.Liquidity],
    disabled: false,
  },
  {
    Icon: NewTokenSVG,
    name: 'common.createToken',
    path: Routes[RoutesEnum.NewToken],
    disabled: false,
  },
  {
    Icon: BridgeSVG,
    name: 'common.bridge',
    path: Routes[RoutesEnum.Bridge],
    disabled: false,
  },
];
