import { Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowLeftSVG } from '../../../svg';
import { MenuBackButtonProps } from './menu.types';

const MenuBackButton: FC<MenuBackButtonProps> = ({
  showButton,
  handleBack,
}) => {
  if (!showButton) return null;

  return (
    <Button
      left="-2.5rem"
      color="text"
      variant="icon"
      border="1px solid"
      position="absolute"
      onClick={handleBack}
      borderColor="#FFFFFF1A"
      display={['block', 'none']}
    >
      <ArrowLeftSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
    </Button>
  );
};

export default MenuBackButton;
