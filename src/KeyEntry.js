import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    width: '100%',
  },
  buttton: {
    position: 'relative',
  },
  thinker: {
    position: 'absolute',
    top: '17%',
    left: '33%',
  }
}));

export default function KeyEntry(props) {
  const classes = useStyles();
  const store = useStore();

  let [thinking, setThinking] = useState(false);

  const fetchMarket = (e) => {
    let key = document.getElementById('api-key').value;
    setThinking(true);
    let req = new Request(
      `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=BTC,ETH,XRP,CRO,BCH&interval=1d,30d&convert=CAD&per-page=100&page=1`,
      {
        mode: 'cors',
        method: 'GET',
      }
    );
    fetch(req).then((response) => response.json()).then(data => {
      console.log(data);
    }).catch(() => {
      // TODO: INVALID KEY
      console.error('screaming')
    });
  }

  return (
    <Paper className={classes.container}>
      <TextField
        id="api-key"
        label="API-key"
        placeholder="xxxxxxxxx"
        helperText={<i>Get one from <a href="https://p.nomics.com/cryptocurrency-bitcoin-api">p.nomics.com</a>!</i>}
        fullWidth
        margin="normal"
        disabled={thinking}
      />
      <Button variant="contained" color="primary" size="medium" onClick={fetchMarket} disabled={thinking} className={classes.buttton}>
        Fetch
        {thinking && <CircularProgress size={24} className={classes.thinker} />}
      </ Button>
    </Paper>
  );
}