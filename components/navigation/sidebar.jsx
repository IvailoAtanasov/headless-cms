import React from "react";
import Link from "next/link";
import { useTheme, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import { tokens } from "@/utils/colorPalette";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListSubheader from "@mui/material/ListSubheader";

//Styled components
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const routes = [
  {
    id: 2,
    label: "Поръчки",
    path: "/orders",
    icon: ReceiptOutlinedIcon,
  },
  {
    id: 3,
    label: "Служители",
    path: "/employees",
    icon: PersonOutlinedIcon,
  },
  {
    id: 4,
    label: "Клиенти",
    path: "/customers",
    icon: PeopleOutlineOutlinedIcon,
  },
];

const appRoutes = [
  {
    id: 5,
    label: "Календар",
    path: "/calendar",
    icon: CalendarMonthOutlinedIcon,
  },
];

const SideBar = ({ children }) => {
  const isDesctop = useMediaQuery("(min-width:960px)");

  console.log(isDesctop);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);

  const toggleDrowerOpen = () => {
    setOpen((current) => !current);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "flex-end" : "center",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
          }}
        >
          <IconButton onClick={toggleDrowerOpen}>
            {!open ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
        {open && (
          <Avatar
            alt="brimeks logo"
            src="/brimeks-logo.png"
            sx={{
              width: "6rem",
              height: "4rem",
              backgroundColor: "#ffffff",
              mr: "auto",
              ml: "auto",
              mb: "1rem",
            }}
          />
        )}

        <List>
          <Link href="/">
            <ListItem
              disablePadding

              // sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Tooltip title="Дашборд" placement="right">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Дашборд"
                    sx={open ? { opacity: 1, ml: "1.5rem" } : { opacity: 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </Link>
          {open && (
            <Typography sx={{ mt: "2rem", ml: "1.5rem", mb: "1rem" }}>
              Управление
            </Typography>
          )}

          {routes?.map((item) => (
            <Link href={item.path}>
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <Tooltip title={item.label} placement="right">
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={open ? { opacity: 1, ml: "1.5rem" } : { opacity: 0 }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            </Link>
          ))}
          {open && (
            <Typography sx={{ mt: "2rem", ml: "1.5rem", mb: "1rem" }}>
              Приложения
            </Typography>
          )}
          {appRoutes?.map((item) => (
            <Link href={item.path}>
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <Tooltip title={item.label} placement="right">
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={open ? { opacity: 1, ml: "1.5rem" } : { opacity: 0 }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, ml: "1rem" }}>
        {children}
      </Box>
    </Box>
  );
};

export default SideBar;
