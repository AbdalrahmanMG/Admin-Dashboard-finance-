// import React from 'react'
import { Box, IconButton, PaletteMode, Stack, styled, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from './SearchBar';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

// Variables
const drawerWidth: number = 240;

// Interfaces
interface TopBarProps {
    open: boolean;
    handleDrawerOpen: () => void;
    setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

// Functions
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    })
}));


// component funtion
export default function TopBar({ open, handleDrawerOpen, setMode }: TopBarProps) {
    const theme = useTheme()
    return (
        <>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <SearchBar />
                    <Box flexGrow={1} />

                    <Stack direction={'row'}>

                        {theme.palette.mode === 'light' ?
                            <IconButton onClick={()=>{
                                localStorage.setItem("currentMode",theme.palette.mode === 'dark' ? 'light' : "dark")
                                setMode((prevMode: PaletteMode) =>
                                    prevMode === 'light' ? 'dark' : 'light',
                                  );
                            }} color='inherit'>
                                <LightModeOutlinedIcon />
                            </IconButton>
                            :
                            <IconButton onClick={()=>{
                                localStorage.setItem("currentMode",theme.palette.mode === 'dark' ? 'light' : "dark")
                                setMode((prevMode: PaletteMode) =>
                                    prevMode === 'light' ? 'dark' : 'light',
                                  );
                            }} color='inherit'>
                                <DarkModeOutlinedIcon />
                            </IconButton>
                        }

                        <IconButton color='inherit'>
                            <NotificationsNoneOutlinedIcon />
                        </IconButton>
                        <IconButton color='inherit'>
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <IconButton color='inherit'>
                            <PersonOutlineOutlinedIcon />
                        </IconButton>
                    </Stack>

                </Toolbar>
            </AppBar>
        </>
    )
}
