export interface MenuDropdownProps {
  isOpen: boolean;
}

export interface MenuItemProps {
  isActive?: boolean;
  name: 'languages' | 'darkMode';
}

export interface LanguageMenuItemProps {
  name: string;
}

export interface MenuDesktopProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface MenuButtonProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export interface MenuBackButtonProps {
  showButton: boolean;
  handleBack: () => void;
}

export interface MenuItemWrapperProps {
  onClick?: () => void;
}

export interface MenuMobileProps extends MainMenuProps {
  isOpen: boolean;
  isLanguage: boolean;
}

export interface MainMenuProps {
  openLanguageMenu: () => void;
}
