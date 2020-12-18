import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import ProductCards from './component/ProductCards'

import shoes from './api'
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff'
  },
  bnav: {
    width: '100%',
  },
  card: {
    maxWidth: 345,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  return (
    <div className="app">
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
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
          <Button color="inherit" component={Link} to={'/'}>Home</Button>
          <Button color="inherit" component={Link} to={'Launch'}>Launch</Button>
        </Toolbar>
      </AppBar>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="Launch" element={<Launch />} >
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
      </Routes>
      </div>
      <Paper elevation={3} className="bottom-nav">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.bnav}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    </Router>
    </div>
  );
}

function Home1() {
  return <div>
    <h1>Welcome Home</h1>
  </div>
}

function Launch() {
  return (<div>
    <h1>Launch</h1>
    <Outlet />
  </div>)
}

function LaunchIndex() {
  const classes = useStyles();
  return (
          <Grid container spacing={3}>
            <Grid item sm={12} md={3} >
              <h1>Hello</h1>
            </Grid>
            <Grid item sm={12} md={9}  >
              
              <Grid container spacing={3}>
                {Object.entries(shoes).map(([slug, {name, img}]) =>
                <Grid item sm={12} md={6}  key={slug}>
                  <ProductCards slug={slug} name={name} image={img} />
                </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
)}

function LaunchShoe() {
  return (<div>
    <h1>Hello</h1>
    <ul>
      {Object.entries(shoes).map(([slug, {name, img}]) => 
      <li key={slug}>
        <h2>{name}</h2>
        <img src={img} alt=""/>
      </li>
      )}
    </ul>
  </div>)
}

export default App;
