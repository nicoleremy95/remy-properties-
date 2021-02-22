import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ButtonRemyExternal from '../ButtonRemyExternal/ButtonRemyExternal';
import './Appbar.css';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  contact: {
    backgroundColor: 'black',
    height: '300px'
  },
  box:{
    marginBottom: '120px'
  },
  appbar: {
    backgroundColor: 'white',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
    color: 'black',
    textTransform: 'uppercase'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navigation: {
    textTransform: 'capitalize'
  },
  appBarLinkBlack: {
    textDecoration: "none",
    color: "black",
    paddingRight: '1vw',
    paddingLeft: '1vw',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: 'var(--backgroundColor)',
      color: 'var(--thirdColor)'
   },
  },
  apply: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
}));

export default function Appbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
          <Link to="/properties" className={classes.appBarLinkBlack}>
            <h4 className={classes.navigation} >properties</h4>
          </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
          <Link to="/neighborhoods" className={classes.appBarLinkBlack}>
            <h4 className={classes.navigation} >neighborhoods</h4>
          </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
            <MailIcon />
        </IconButton>
        <p>about</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
            <NotificationsIcon />
        </IconButton>
        <p>properties</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
            <NotificationsIcon />
        </IconButton>
        <p>neighborhoods</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
            <NotificationsIcon />
        </IconButton>
        <p>people</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>contact</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <div className={classes.box}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title}  >
            <Link to="/" className={classes.appBarLinkBlack}>
            <h1>remy properties</h1>
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/about" className={classes.appBarLinkBlack}>
              <h4 className={classes.navigation} >about</h4>
            </Link>
            <Link to="/people" className={classes.appBarLinkBlack}>
              <h4 className={classes.navigation} >people</h4>
            </Link>
            <Link to="/properties" className={classes.appBarLinkBlack}>
              <h4 className={classes.navigation} >properties</h4>
            </Link>
            <Link to="/neighborhoods" className={classes.appBarLinkBlack}>
              <h4 className={classes.navigation} >neighborhoods</h4>
            </Link>
            <Link to="/contact" className={classes.appBarLinkBlack}>
              <h4 className={classes.navigation} >contact us</h4>
            </Link>
            <div className={classes.apply}>
              <ButtonRemyExternal text="Apply Today" link="https://remyproperties.managebuilding.com/Resident/rental-application/"/>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      </div>
      
    </div>
  );
}
