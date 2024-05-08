import React from 'react'
import List from '@mui/material/List';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PeopleOutline, PersonOutline, PieChartOutlineOutlined, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';


// Variables
const drawerWidth: number = 240;

// Interfaces
interface SideBarProps {
  open: boolean;
  handleDrawerClose: () => void;
  DrawerHeader: React.ComponentType<any>
}

// Component funtion
export default function SideBar({ open, handleDrawerClose, DrawerHeader }: SideBarProps) {
  const theme = useTheme();


  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Array1 = [
    { 'text': 'Dashboard', 'icon': <HomeOutlined />, 'path': '/' },
    { 'text': 'Manage Team', 'icon': <PeopleOutline />, 'path': '/team' },
    { 'text': 'Contacts Information', 'icon': <ContactsOutlined />, 'path': '/contacts' },
    { 'text': 'Invoices Balances', 'icon': <ReceiptOutlined />, 'path': '/invoices' }
  ]

  const Array2 = [
    { 'text': 'Profile Form', 'icon': <PersonOutline />, 'path': '/form' },
    { 'text': 'Calendar', 'icon': <CalendarTodayOutlined />, 'path': '/calendar' },
    { 'text': 'FAQ Page', 'icon': <HelpOutlineOutlined />, 'path': '/faq' },
  ]

  const Array3 = [
    { 'text': 'Bar Chart', 'icon': <BarChartOutlined />, 'path': '/bar' },
    { 'text': 'Pie Chart', 'icon': <PieChartOutlineOutlined />, 'path': '/pie' },
    { 'text': 'Line Chart', 'icon': <TimelineOutlined />, 'path': '/line' },
    { 'text': 'Geography Chart', 'icon': <MapOutlined />, 'path': '/geography' }
  ]

  const navigate = useNavigate()
  const location = useLocation()

  return (

    <>
      <Drawer sx={{height: '100vh'}} variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>


        <Avatar sx={{
          mx: 'auto',
          width: open ? 80 : 40,
          height: open ? 80 : 40,
          my: 1,
          border: '2px solid grey',
          transition: "0.25s all"
        }}
          alt="Remy Sharp"
          src="https://wallpapers.com/images/high/sabito-mask-demon-slayer-pfp-8h0vih159fk927hd.webp" />
        <Typography align='center' sx={{ fontSize: open ? 18 : 0, transition: '0.3s' }}>Remy Sharp</Typography>
        <Typography align='center' sx={{ fontSize: open ? 15 : 0, transition: '0.3s', color: theme.palette.info.main }}>Admin</Typography>

        <Divider />

        <List>
          {Array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path)
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: location.pathname ===item.path? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path)
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path)
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
