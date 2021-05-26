import { Box, Divider, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: '30px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 300,
    textTransform: 'none',
    marginBottom: '30px'
  },
  count: {
    fontSize: '67px',
    lineHeight: '67px',
    fontWeight: 100,
    margin: '15px 0 35px 0'
  },
  statGroupItem: {
    padding: 0,
  },
  dividerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    width: '40%'
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
    },
  },
}))

interface CallPanelProps {
  title: string,
  count: string
}

export default function CallPanel({title, count}: CallPanelProps) {
  const classes = useStyles()

  return (
    <Paper elevation={5} className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.dividerWrapper}>
        <Divider className={classes.divider} />
      </Box>
      <Typography variant="h4" className={classes.count}>
        {count}
      </Typography>
      <Box className={classes.statGroupItem}>
        <Typography
          variant="caption"
          display="block"
          className={classes.statLeft}
        >
          More Stats
        </Typography>
      </Box>
    </Paper>
  )
}
