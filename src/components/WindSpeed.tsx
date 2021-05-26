import { useState, useCallback } from 'react'
import { Box, FormControl, NativeSelect, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const chartOptions = {
  chart: {
    zoomType: 'x',
  },
  title: {
    text: 'Wind Speed By Floor',
  },
  yAxis: {
    title: {
      text: '',
    },
  },
  legend: {
    enabled: true,
    align: 'center',
    verticalAlign: 'top',
    squareSymbol: true,
    itemStyle: {
      color: '#000000',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 'normal',
      textOverflow: 'ellipsis',
    },
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '76%',
    padding: '38px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    marginBottom: '50px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '170px !important',
  },
  timRangeSelect: {
    marginLeft: '10px',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    border: '1px solid #00000050'
  },
  setting: {
    position: 'absolute',
    top: '30px',
    left: '35px',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  compareButton: {
    transition: 'all 0.2s ease, visibility 0s',
    backgroundColor: '#00B1ED',
    color: '#fff',
    borderRadius: '5px',
    textTransform: 'none',
    '&:hover': {
      color: '#00000030',
      backgroundColor: '#00B1ED',
    }
  }
}))

interface WindSpeedProps {
  timeValue: string[],
  windSpeed: number[],
  TimeRanges: string[]
}

export default function WindSpeed({ timeValue, windSpeed, TimeRanges }: WindSpeedProps) {
  const classes = useStyles()

  const [curTimeRange, setCurTimeRange] = useState(0)

  const handleChange = useCallback(
    (event) => {
      if (event.target.name === 'timeRange') {
        setCurTimeRange(event.target.value)
      }
    },
    [setCurTimeRange]
  )

  return (
    <Box className={classes.root}>
      <Box className={classes.setting}>
        <FormControl
          variant="filled"
          className={classes.formControl}
          style={{ minWidth: 200 }}
        >
          <NativeSelect
            value={curTimeRange}
            onChange={handleChange}
            name="timeRange"
            className={classes.timRangeSelect}
          >
            {TimeRanges.map((range, index) => (
              <option value={index} key={index}>{range}</option>
            ))}
          </NativeSelect>
        </FormControl>
        <Button
          variant="contained"
          className={classes.compareButton}
        >
          Compare
        </Button>
      </Box>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          ...chartOptions,
          xAxis: {
            categories: timeValue,
          },
          series: [
            {
              name: 'Wind Speed By Floor',
              data: windSpeed,
            },
          ],
        }}
      />
    </Box>
  )
}
