import { useState, useCallback } from 'react'
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import authBack from '../assets/images/auth_back.webp'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    marginTop: theme.spacing(17),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '37px',
    marginBottom: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginBottom: theme.spacing(5),
  },
  textfield: {
    marginBottom: theme.spacing(2),
  },
  submit: {
    display: 'block',
    transition: 'all 0.2s ease, visibility 0s',
    backgroundColor: '#00B1ED',
    color: '#fff',
    borderRadius: '5px',
    margin: theme.spacing(0, 0, 1),
    textTransform: 'none',
    letterSpacing: '2px',
    fontWeight: 100,
    width: '40%',
    '&:hover': {
      color: '#00000030',
      backgroundColor: '#00B1ED',
    },
  },
  itemWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  authBack: {
    content: `url(${authBack})`,
    position: 'absolute',
    top: 0,
    right: '10%',
    opacity: 0.3
  }
}))

export default function Login() {
  const classes = useStyles()

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleChange = useCallback(event => {
    const name = event.target.name
    const value = event.target.value

    if(name === 'username')
      setUserName(value)
    else if(name === 'password')
      setUserPassword(value)
  }, [setUserName, setUserPassword])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <img alt="auth-back" className={classes.authBack} />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.title}>
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={userName}
            id="username"
            label=""
            placeholder="Username"
            name="username"
            autoComplete="username"
            autoFocus
            className={classes.textfield}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={userPassword}
            name="password"
            label=""
            placeholder="Password"
            type="password"
            id="password"
            className={classes.textfield}
            onChange={handleChange}
          />
          <Grid container>
            <Grid
              item
              xs
              className={classes.itemWrapper}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs
              className={classes.itemWrapper}
            >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
