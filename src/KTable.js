import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect, useStore } from 'react-redux';
import Title from './Title'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    width: '100%',
  },
}));

function createEmpty() {
  return { name: '-', price: '-', change: '-' };
}

function KTable() {
  const classes = useStyles();

  const store = useStore().getState();
  let rows = Array(10).fill(createEmpty(), 0);
  if (store.status) {
    // TODO:
    rows = [{ name: '1', price: '1', change: '1' }];
  }

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Title>
        Table
            </Title>
      <Table className={classes.table} size="small" aria-label="Coin Data">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.name + i}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(KTable)
