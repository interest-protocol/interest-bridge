import { Routes, RoutesEnum } from '../../../../constants';
import { BridgeSVG, DexSVG, LiquiditySVG } from '../../../svg';
import Home from '../../../svg/home';

export const SIDEBAR_ITEMS = [
  {
    Icon: Home,
    name: 'Home',
    path: Routes[RoutesEnum.DApp],
    disabled: true,
  },
  {
    Icon: DexSVG,
    name: 'Swap',
    path: Routes[RoutesEnum.Swap],
    disabled: false,
  },
  {
    Icon: LiquiditySVG,
    name: 'Liquidity',
    path: Routes[RoutesEnum.Liquidity],
    disabled: false,
  },
  {
    Icon: BridgeSVG,
    name: 'Bridge',
    path: Routes[RoutesEnum.Bridge],
    disabled: false,
  },
];
