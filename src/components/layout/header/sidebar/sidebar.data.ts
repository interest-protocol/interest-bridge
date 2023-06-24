import { Routes, RoutesEnum } from '../../../../constants';
import { BridgeSVG, LiquiditySVG, SwapSVG } from '../../../svg';
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
    Icon: LiquiditySVG,
    name: 'common.liquidity',
    path: Routes[RoutesEnum.Liquidity],
    disabled: false,
  },
  {
    Icon: BridgeSVG,
    name: 'common.bridge',
    path: Routes[RoutesEnum.Bridge],
    disabled: false,
  },
];
