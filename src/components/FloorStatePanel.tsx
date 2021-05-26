import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import person from '../assets/images/vector-person.webp'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  index: {
    fontSize: '21px',
    width: '20%',
  },
  count: {
    fontSize: '18px',
    color: '#fff',
  },
  person: {
    content: `url(${person})`,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    color: '#fff',
    width: '70%',
  },
  itemLeft: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    width: '50%',
    padding: '10px',
  },
  itemRight: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00B1ED',
    width: '50%',
    padding: '10px',
  },
  arrowGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowDropUp: {
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid white',
    marginBottom: '5px',
  },
  arrowDropDown: {
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '5px solid white',
  },
}))

interface FloorStatePanelProps {}

export default function FloorPanel(props: FloorStatePanelProps) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.index}>
        1
      </Typography>
      <Box className={classes.item}>
        <Box className={classes.itemLeft}>
          <Typography
            variant="caption"
            display="block"
            className={classes.count}
          >
            15
          </Typography>
          <img alt="person" className={classes.person}></img>
        </Box>
        <Box className={classes.itemRight}>
          <Typography
            variant="caption"
            display="block"
            className={classes.count}
          >
            65
          </Typography>
          <Box className={classes.arrowGroup}>
            <Box className={classes.arrowDropUp} />
            <Box className={classes.arrowDropDown} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
