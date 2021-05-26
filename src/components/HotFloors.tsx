import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FloorPanel from './FloorPanel'
import FloorStatePanel  from './FloorStatePanel'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: '10px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '38px 70px !important',
    marginBottom: '50px'
  },
  gridGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '35px 0',
  },
  gridGroupLast: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 0 50px 0',
  },
  gridItem: {
    width: '20%',
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
    padding: 0
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
}))

interface HotFloorsProps {}

export default function HotFloors(props: HotFloorsProps) {
  const classes = useStyles()

  return (
    <Grid
      container
      alignItems="center"
      justify="flex-end"
      direction="column"
      spacing={2}
    >
      <Grid xs={9} className={classes.root} container>
        <Typography variant="h2" className={classes.groupTitle}>
          Hot Floors
        </Typography>
        <Grid xs={12} className={classes.gridGroup} container>
          <Grid item className={classes.gridItem}>
            <FloorPanel />
          </Grid>
          <Grid item className={classes.gridItem}>
            <FloorPanel />
          </Grid>
          <Grid item className={classes.gridItem}>
            <FloorPanel />
          </Grid>
          <Grid item className={classes.gridItem}>
            <FloorPanel />
          </Grid>
        </Grid>
        <Typography variant="h2" className={classes.groupTitle}>
          All Floors
        </Typography>
        <Grid xs={12} container>
          <Grid container spacing={2} className={classes.gridGroup}>
            <Grid item className={classes.gridItem}>
              <FloorStatePanel />
            </Grid>
            <Grid item className={classes.gridItem}>
              <FloorStatePanel />
            </Grid>
            <Grid item className={classes.gridItem}>
              <FloorStatePanel />
            </Grid>
            <Grid item className={classes.gridItem}>
              <FloorStatePanel />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.gridGroupLast}>
            <Grid item className={classes.gridItem}>
              <FloorStatePanel />
            </Grid>
            <Grid item className={classes.gridItem}>
              <FloorStatePanel />
            </Grid>
            <Grid item className={classes.gridItem}>
              <FloorStatePanel />
            </Grid>
            <Grid item className={classes.gridItem}>
              <FloorStatePanel />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} className={classes.moreWrapper} container>
          <Typography
            variant="caption"
            display="block"
            className={classes.more}
          >
            More
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
