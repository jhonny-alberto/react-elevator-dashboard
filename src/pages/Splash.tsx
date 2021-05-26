import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect } from 'react'
import logo from '../assets/recoverypad_logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    minHeight: '100vh',
  },
  logo: {
    minHeight: '100%',
    width: '100%',
    padding: '20vh 5vw',
  },
}))

interface SplashProps {
  sendTo: string
  timeout?: number
}

export default function Splash(props: SplashProps) {
  const classes = useStyles()

  useEffect(() => {
    setTimeout(function () {
      window.location.replace(props.sendTo)
    }, props.timeout || 2000)
  })

  return (
    <Container className={classes.root}>
      <Grid container alignItems="center" justify="flex-end" direction="column">
        <Grid item xs={12}>
          <img className={classes.logo} src={logo} />
        </Grid>
      </Grid>
    </Container>
  )
}
