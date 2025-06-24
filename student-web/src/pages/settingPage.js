import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Switch,
  FormControlLabel,
} from '@mui/material';


import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useThemeMode } from '../context/ThemeContext';

export default function SettingsPage() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
         
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          {mode === 'light' ? <LightModeIcon color="warning" /> : <DarkModeIcon color="primary" />}

          <FormControlLabel
            control={
              <Switch
                checked={mode === 'dark'}
                onChange={toggleTheme}
                color="primary"
              />
            }
            label={mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          />
        </Stack>
      </Paper>
      
    </Box>
  );
}





