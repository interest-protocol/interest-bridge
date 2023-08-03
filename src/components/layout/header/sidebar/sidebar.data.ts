import { Routes, RoutesEnum } from '../../../../constants';
import {
  BridgeSVG,
  FarmSVG,
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
    path: Routes[RoutesEnum.Liquidity],
    disabled: false,
    alpha: true,
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
    path: '/',
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
