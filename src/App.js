import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import KChart from './KChart';
import KTable from './KTable';
import KeyEntry from './KeyEntry'

import { Provider } from 'react-redux'
import coinReducer from './coinReducer'

import { createStore } from 'redux';

const store = createStore(coinReducer);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    
  },
  toolbar: {

  },
  main: {
    width: '100%',
  },
  topBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();

  let RenderTopBar = () => {
    return <AppBar position="absolute">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
        >
          <Avatar alt="Supreme Invention" src="./logo192.png" />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
        Supreme Invention
        </Typography>
      </Toolbar>
    </AppBar>
  };

  let RenderContent = () => {
      return (
        <main className={classes.main}>
          <Container className={classes.container}>
            <div className={classes.topBarSpacer} />
            <KeyEntry />
            <div className={classes.topBarSpacer} />
            <KChart />
            <div className={classes.topBarSpacer} />
            <KTable />
          </Container>
        </main>
      );
  };

  return (
    <div className={classes.root}>
      <Provider store={store}>
        <CssBaseline />
        <RenderTopBar />
        <RenderContent />
      </Provider>
    </div>
  );
}

export default App;
