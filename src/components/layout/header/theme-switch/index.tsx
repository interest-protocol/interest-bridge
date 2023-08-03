import {
  Box,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AppTheme } from '../../../../interface';

const ThemeSwitch: FC = () => {
  const { t } = useTranslation();
  const { dark, setDark } = useTheme() as AppTheme<Theme>;

  return (
    <Box display="flex" justifyContent="center" gap="l" alignItems="center">
      <Typography variant="small" color="onSurface">
        {t('common.light')}
      </Typography>
      <SwitchButton
        name="theme"
        size="medium"
        defaultValue={dark}
        onChange={() => setDark(!dark)}
      />
      <Typography variant="small" color="onSurface">
        {t('common.dark')}
      </Typography>
    </Box>
  );
};

export default ThemeSwitch;
