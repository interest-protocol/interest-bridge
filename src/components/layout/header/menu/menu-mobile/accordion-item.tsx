import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { capitalize } from '../../../../../utils';
import { AccordionItemProps } from '../../sidebar/sidebar.types';

const AccordionItem: FC<AccordionItemProps> = ({ name, path }) => {
  const { t } = useTranslation();
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      setPathName(url.pathname);
    }
  }, []);

  const goToPath = () => {
    if (path.startsWith('https://'))
      return window.open(path, '_blank')?.focus();
  };

  return (
    <Box
      mx="auto"
      width="100%"
      nHover={{
        color: 'primary',
      }}
      display="flex"
      cursor="pointer"
      borderRadius="m"
      onClick={goToPath}
      transition="all 350ms ease-in-out"
      color={pathName === path ? 'primary' : 'onSurface'}
    >
      <Typography
        ml="l"
        pl="xl"
        py="s"
        variant="small"
        borderLeft="1px solid"
        borderColor="outline.outlineVariant"
      >
        {capitalize(t(name) as string)}
      </Typography>
    </Box>
  );
};

export default AccordionItem;
