import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Title from './Title'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title as ChartTitle,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    width: '100%',
  },
}));


const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

function KChart(props) {
  const classes = useStyles();

  let coinData = [];
  if (props.data) {
    for (let coin in props.data) {
      coinData.push({
        id: coin.id,
        name: coin.name,
        price: coin.price,
        max: coin.high,
      });
    }
  }

  console.log(coinData);
  return (
    <Paper className={classes.container}>
      <Title>
        Chart
      </Title>
      <Chart
        data={coinData}
      >
        <ArgumentAxis />
        <ValueAxis
          max={10}
        />

        <BarSeries
          name="Current Price"
          valueField="price"
          argumentField="id"
        />
        <BarSeries
          name="Highest Price"
          valueField="max"
          argumentField="id"
        />
        <Animation />
        <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
        <ChartTitle text="Price of Various Crypto" />
        <Stack
          stacks={[
            { series: ['price', 'max'] },
          ]}
        />
      </Chart>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {data: state.data};
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(KChart)