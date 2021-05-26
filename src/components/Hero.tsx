import { useState, useCallback } from 'react'
import { Link } from 'react-scroll'
import { Grid, Container, FormControl, NativeSelect, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Panel from './Panel'

import background from '../assets/images/header-background.webp'
import vector from '../assets/images/vector.webp'
import textIcon from '../assets/images/text.svg'
import view from '../assets/images/view.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    background: `url(${background})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 0',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  itemGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  panelGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    padding: 0,
  },
  panelItem: {
    width: '22%',
    padding: 0,
  },
  timRangeSelect: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginLeft: '10px',
    border: '1px solid #00000050',
  },
  categorySelect: {
    backgroundColor: '#ffffff50',
    borderRadius: '5px',
  },
  vectorImg: {
    content: `url(${vector})`,
  },
  kph: {
    fontSize: '13px',
    color: '#fff',
    margin: 0,
  },
  temper: {
    fontSize: '16px',
    color: '#fff',
    margin: 0,
  },
  button: {
    transition: 'all 0.2s ease, visibility 0s',
    background: '#FFFFFF',
    padding: '12px 15px',
    borderRadius: '30px',
    margin: '0px 4px 0px 0px',
    letterSpacing: '0.1em',
    color: '#000000',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textTransform: 'none',
    '&:hover': {
      color: '#757575',
      background: '#FFFFFF',
      textDecoration: 'none'
    },
  },
  textIcon: {
    content: `url(${textIcon})`,
    marginLeft: '10px',
    verticalAlign: 'middle' 
  },
  view: {
    content: `url(${view})`,
  },
}))

interface HeroProps {
  startTime: string,
  endTime: string,
  ewtTime: string,
  TimeRanges: string[]
}

export default function Hero({startTime, endTime, ewtTime, TimeRanges}: HeroProps) {
  const classes = useStyles()

  const [curTimeRange, setCurTimeRange] = useState(0)
  const [curCategory, setCurCategory] = useState(0)

  const handleChange = useCallback(
    (event) => {
      if (event.target.name === 'timeRange') {
        setCurTimeRange(event.target.value)
      }
    },
    [setCurTimeRange]
  )

  return (
    <Container className={classes.root} maxWidth={false}>
      <Grid item xs={9} className={classes.itemGroup} container>
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
        <FormControl
          variant="filled"
          className={classes.formControl}
          style={{ minWidth: 200 }}
        >
          <NativeSelect
            value={curCategory}
            onChange={handleChange}
            name="category"
            className={classes.categorySelect}
          >
            {TimeRanges.map((range, index) => (
              <option value={index} key={index}>
                {range}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
        <img alt="vector" className={classes.vectorImg} />
        <Typography
          variant="caption"
          display="block"
          className={classes.kph}
          gutterBottom
        >
          - kph
        </Typography>
        <Typography
          variant="caption"
          display="block"
          className={classes.temper}
          gutterBottom
        >
          16°C
        </Typography>
        <Link
          activeClass="active"
          to="message_panel"
          spy={true}
          smooth={true}
          duration={500}
          className={classes.button}
        >
          Send Text
          <img className={classes.textIcon} alt="text-icon" />
        </Link>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          endIcon={<img className={classes.view} alt="view" />}
        >
          Live View
        </Button>
      </Grid>
      <Container className={classes.panelGroup}>
        <Container className={classes.panelItem}>
          <Panel
            statCategory="Operation"
            startTime={startTime}
            endTime={endTime}
            ewtTime={ewtTime}
          />
        </Container>
        <Container className={classes.panelItem}>
          <Panel
            statCategory="TTT"
            startTime={startTime}
            endTime={endTime}
            ewtTime={ewtTime}
          />
        </Container>
        <Container className={classes.panelItem}>
          <Panel
            statCategory="LWT"
            startTime={startTime}
            endTime={endTime}
            ewtTime={ewtTime}
          />
        </Container>
        <Container className={classes.panelItem}>
          <Panel
            statCategory="EWT"
            startTime={startTime}
            endTime={endTime}
            ewtTime={ewtTime}
          />
        </Container>
      </Container>
    </Container>
  )
}
