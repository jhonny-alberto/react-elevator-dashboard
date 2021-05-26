import { Container, Divider, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import person from '../assets/images/person.png'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 300,
    textTransform: 'none'
  },
  subTitle: {
    fontSize: '21px',
    fontWeight: 300,
    lineHeight: '35px'
  },
  personCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  personCountNumber: {
    fontSize: '41px',
    margin: '0 8px 0 0'
  },
  personCountAvatar: {
    content: `url(${person})`,
    width: '25px',
    height: '40px',
    opacity: 0.5,
    border: '1px solid #000000',
    borderRadius: '7px'
  },
}))

interface FloorPanelProps {
}

export default function FloorPanel(props: FloorPanelProps) {
  const classes = useStyles()

  return (
    <Paper elevation={5} className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Floor
      </Typography>
      <Typography variant="h4" className={classes.subTitle}>
        21
      </Typography>
      <Divider />
      <Container className={classes.personCount}>
        <Typography
          variant="caption"
          display="block"
          className={classes.personCountNumber}
          gutterBottom
        >
          7
        </Typography>
        <img alt="person" className={classes.personCountAvatar} />
      </Container>
    </Paper>
  )
}
