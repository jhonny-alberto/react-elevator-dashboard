import { Container, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    padding: theme.spacing(1),
    borderRadius: '20px',
  },
  titleGroup: {
    padding: '23px 0',
  },
  title: {
    fontSize: '20px',
    color: '#000000',
    fontWeight: 300,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: '9px',
    textAlign: 'center',
    color: '#000000',
    fontWeight: 500,
  },
  operationTimeWrapper: {
    display: 'flex',
    border: '1px solid black',
    borderRadius: '10px',
    textAlign: 'center',
    height: '65px',
    padding: 0,
  },
  operationTimeWrapper1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '65px',
    padding: 0,
  },
  operationTime: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    '&:first-child': {
      borderRight: '1px solid black',
    },
  },
  operationTimeInner: {
    textAlign: 'center',
    width: '100%',
    padding: 0,
  },
  operationTimeInner1: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operationTimeTitle: {
    fontSize: '16px',
    margin: 0,
  },
  operationTimeSubTitle: {
    fontSize: '14px',
    margin: 0,
  },
  statGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '0 10px',
    height: '50px',
  },
  statGroupItem: {
    padding: 0,
  },
  statGroupItemMax: {
    textAlign: 'end',
    padding: 0,
  },
  statLeft: {
    position: 'relative',
    fontSize: '12px',
    display: 'inline-block',
    '&::after': {
      position: 'absolute',
      content: "''",
      top: '2px',
      right: '-10px',
      width: '0px',
      height: '0px',
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderLeft: '5px solid #00B1ED',
    }
  },
  statRight: {
    fontSize: '12px',
  },
  statMax: {
    fontSize: '12px',
    fontWeight: 'bold',
  },
  contentTitle: {
    fontSize: '33px',
    color: '#00000050',
  },
  contentSupTitle: {
    fontSize: '13px',
    color: '#00000050',
  },
}))

interface PanelProps {
  statCategory: string,
  startTime: string,
  endTime: string,
  ewtTime: string
}

export default function Panel({ statCategory, startTime, endTime, ewtTime }: PanelProps) {
  const classes = useStyles()

  const [subTitle, setSubTitle] = useState('')
  const [contentValue, setContentValue] = useState('')

  useEffect(() => {
    switch (statCategory) {
      case 'Operation':
        setSubTitle('(hours average)')
        break
      case 'TTT':
        setSubTitle('(Total Travel Time)')
        break
      case 'LWT':
        setSubTitle('(Load Wait Time)')
        break
      case 'EWT':
        setSubTitle('(Elevator Wait Time)')
        setContentValue(ewtTime)
        break
    }
  })

  return (
    <Paper elevation={0} className={classes.root}>
      <Container className={classes.titleGroup}>
        <Typography variant="h3" className={classes.title}>
          {statCategory}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          className={classes.subTitle}
          gutterBottom
        >
          {subTitle}
        </Typography>
      </Container>
      {statCategory === 'Operation' && (
        <Container className={classes.operationTimeWrapper} maxWidth={false}>
          <Container className={classes.operationTime} maxWidth={false}>
            <Container className={classes.operationTimeInner}>
              <Typography variant="h4" className={classes.operationTimeTitle}>
                Start
              </Typography>
              <Typography
                variant="caption"
                display="block"
                className={classes.operationTimeSubTitle}
                gutterBottom
              >
                {/* {startTime} */}
                08:00
              </Typography>
            </Container>
          </Container>
          <Container className={classes.operationTime} maxWidth={false}>
            <Container className={classes.operationTimeInner} maxWidth={false}>
              <Typography variant="h4" className={classes.operationTimeTitle}>
                Finish
              </Typography>
              <Typography
                variant="caption"
                display="block"
                className={classes.operationTimeSubTitle}
                gutterBottom
              >
                {/* {endTime} */}
                17:00
              </Typography>
            </Container>
          </Container>
        </Container>
      )}
      {statCategory !== 'Operation' && (
        <Container className={classes.operationTimeWrapper1}>
          <Container className={classes.operationTimeInner1}>
            <Typography variant="h4" className={classes.contentTitle}>
              {/* {contentValue}  */} 0.00
              <sup className={classes.contentSupTitle}>Min.</sup>
            </Typography>
          </Container>
        </Container>
      )}
      <Container className={classes.statGroup}>
        <Container className={classes.statGroupItem}>
          <Typography
            variant="caption"
            display="block"
            className={classes.statLeft}
            gutterBottom
          >
            More Stats
          </Typography>
        </Container>
        {statCategory !== 'Operation' && (
          <Container className={classes.statGroupItemMax}>
            <Typography
              variant="caption"
              display="block"
              className={classes.statMax}
              gutterBottom
            >
              Max.
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={classes.statRight}
              gutterBottom
            >
              2.5 min/Avg.
            </Typography>
          </Container>
        )}
      </Container>
    </Paper>
  )
}
