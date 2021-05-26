import { useCallback, useEffect, useState } from 'react'
import { Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/Hero'
import HotFloors from '../components/HotFloors'
import WindSpeed from '../components/WindSpeed'
import ElevatorCall from '../components/ElevatorCall'
import Message from '../components/Message'

import { IElevatorCall } from '../interfaces/model'

import { getElevatorLogEntries } from '../shared'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'transparent',
    minHeight: '100vh',
    padding: '0px',
    margin: '0px',
  },
  main: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#e8e6e6',
    paddingTop: '40px'
  },
}))

const TimeRanges = [
  'Today',
  'Yesterday',
  'This Week',
  'Last Week',
  'Custom Dates',
]

const callContent: IElevatorCall[] = [
  {
    title: 'SOS calls',
    count: '7'
  },
  {
    title: 'Standard calls',
    count: '327'
  }
]
interface DashboardProps {
  chartData: []
}

export default function Dashboard({chartData}: DashboardProps) {
  const classes = useStyles()

  const [windSpeed, setWindSpeed] = useState<number[]>([])
  const [timeValue, setTimeValue] = useState<string[]>([])
  const [elevatorValue, setElevatorValue] = useState({
    startTime: '',
    endTime: '',
    ewtTime: ''
  })

  const parseData = useCallback(
    (data: any) => {
      // const elevatorLogEntries: any = getElevatorLogEntries(data)
      // const currentDate = '2021-05-09'  //set the current date
      // setElevatorValue({
      //   startTime: elevatorLogEntries[currentDate].startTime,
      //   endTime: elevatorLogEntries[currentDate].endTime,
      //   ewtTime: elevatorLogEntries[currentDate].ewtTime,
      // })
      const filtered = data.filter((item: any) => item[3] === 'wind_speed')
      
      let parsedWindSpeedValues: number[] = []
      let parsedTimeValues: string[] = []
      
      filtered.forEach(
        (item: any, idx: number) => {
          parsedWindSpeedValues.push(parseFloat(item[2]));
          parsedTimeValues.push(item[4]);
        }
      )

      setWindSpeed(parsedWindSpeedValues)
      setTimeValue(parsedTimeValues)
    },
    [setWindSpeed, setTimeValue]
  )

  useEffect(() => {
    const abortController = new AbortController()

    parseData(chartData)

    return function cleanup() {
      abortController.abort()
    }
  }, [chartData])

  const handleError = (data: any) => {
    console.log(data)
  }

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header>
        <Box></Box>
      </Header>
      <Hero
        startTime={elevatorValue.startTime}
        endTime={elevatorValue.endTime}
        ewtTime={elevatorValue.ewtTime}
        TimeRanges={TimeRanges}
      />
      {/* <CSVReader onError={handleError}></CSVReader> */}
      <Box className={classes.main}>
        <HotFloors></HotFloors>
        <WindSpeed
          timeValue={timeValue}
          windSpeed={windSpeed}
          TimeRanges={TimeRanges}
        ></WindSpeed>
        <ElevatorCall
          calls={callContent}
          TimeRanges={TimeRanges}
        ></ElevatorCall>
        <Message></Message>
      </Box>
      <Footer />
    </Container>
  )
}
