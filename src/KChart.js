import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const useStyles = makeStyles((theme) => ({
}));

const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
  ];

function KChart() {
  const classes = useStyles();

  return (
    <Paper>
        <Chart
        data={data}
        >
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="value" argumentField="argument" />
        </Chart>
    </Paper>
  );
}

export default KChart;
