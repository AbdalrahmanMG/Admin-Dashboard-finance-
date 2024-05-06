import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import { ThemeProvider } from '@emotion/react';
import { getDesignTokens } from '../../theme';
import { PaletteMode } from '@mui/material';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function AdminDashboard() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [mode, setMode] = React.useState<PaletteMode>(localStorage.getItem("currentMode") as PaletteMode) ?? 'light';
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <TopBar handleDrawerOpen={handleDrawerOpen} open={open} setMode={setMode} />

                <SideBar open={open} handleDrawerClose={handleDrawerClose} DrawerHeader={DrawerHeader} />


                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    );
}