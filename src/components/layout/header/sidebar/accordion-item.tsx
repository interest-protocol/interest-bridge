import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { capitalize } from '../../../../utils';
import { AccordionItemProps } from './sidebar.types';

const AccordionItem: FC<AccordionItemProps> = ({ name, path }) => {
  const { t } = useTranslation();

  return (
    <a href={path}>
      <Box
        display="flex"
        borderRadius="m"
        color="onSurface"
        transition="all 350ms ease-in-out"
        cursor={'pointer'}
        nHover={{
          color: 'primary',
        }}
        width="100%"
        mx="auto"
      >
        <Typography
          variant="small"
          borderLeft="1px solid"
          borderColor="outline.outlineVariant"
          ml="1rem"
          pl="1.5rem"
          py="0.5rem"
        >
          {capitalize(t(name) as string)}
        </Typography>
      </Box>
    </a>
  );
};

export default AccordionItem;
