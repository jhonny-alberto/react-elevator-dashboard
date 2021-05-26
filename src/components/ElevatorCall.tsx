import { useState, useCallback } from 'react'
import { Grid, Typography, FormControl, NativeSelect } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CallPanel from './CallPanel'

import { IElevatorCall } from '../interfaces/model'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    borderRadius: '10px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '38px 17% !important',
    marginBottom: '50px',
  },
  gridGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '54px 0',
  },
  gridItem: {
    width: '45%',
  },
  groupTitle: {
    fontSize: '20px',
    fontWeight: 100,
    textAlign: 'center',
    textTransform: 'none',
  },
  moreWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  more: {
    position: 'relative',
    fontSize: '12px',
    display: 'inline-block',
    '&::after': {
      position: 'absolute',
      content: "''",
      top: '5px',
      right: '-24px',
      width: '0px',
      height: '0px',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '5px solid #00B1ED',
    },
  },
  formControl: {
    position: 'absolute',
    top: '35px',
    left: '40px',
    margin: theme.spacing(1),
    minWidth: 120,
  },
  timRangeSelect: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginLeft: '10px',
    border: '1px solid #00000050',
  },
}))

interface ElevatorCallProps {
  calls: IElevatorCall[],
  TimeRanges: string[]
}

export default function ElevatorCall({ calls, TimeRanges}: ElevatorCallProps) {
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
    <Grid
      container
      alignItems="center"
      justify="flex-end"
      direction="column"
      spacing={2}
    >
      <Grid xs={9} className={classes.root} container>
        <FormControl variant="filled" className={classes.formControl}>
          <NativeSelect
            value={curTimeRange}
            onChange={handleChange}
            name="timeRange"
            className={classes.timRangeSelect}
          >
            {TimeRanges.map((range, index) => (
              <option value={index} key={index}>
                {range}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
        <Typography variant="h2" className={classes.groupTitle}>
          Elevator Calls
        </Typography>
        <Grid xs={12} className={classes.gridGroup} container>
          {calls.map((call, index) => (
            <Grid item className={classes.gridItem} key={index}>
              <CallPanel title={call.title} count={call.count} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
