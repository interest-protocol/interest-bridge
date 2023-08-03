import { Dispatch, FC, SetStateAction } from 'react';

import { SVGProps } from '../../../svg/svg.types';

export interface MenuListItemProps {
  Icon: FC<SVGProps>;
  name: string;
  path: string;
  disabled: boolean;
  alpha?: boolean;
  accordionList?: ReadonlyArray<AccordionItemProps>;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  isCollapsed: boolean;
}

export interface AccordionItemProps {
  name: string;
  path: string;
}

export interface MenuListProps {
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  isCollapsed: boolean;
}

export interface SideBarHeaderProps {
  isCollapsed: boolean;
}

export interface SideBarFooterProps {
  isCollapsed: boolean;
}
