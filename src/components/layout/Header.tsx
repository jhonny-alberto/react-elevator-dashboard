import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/lifetech.webp';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.default,
    height: '56px',
    boxShadow: 'none',
  },
  logo: {
    content: `url(${logo})`,
  },
  appBar: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  btnDemo: {
    transition: 'all 0.2s ease, visibility 0s',
    background: '#00B1ED',
    boxShadow: '3px 3px 2px rgb(0 0 0 / 31%)',
    borderRadius: '5px',
    textTransform: 'none',
    color: '#fff',
    '&:hover': {
      color: '#757575',
      background: '#00B1ED',
      boxShadow: '3px 3px 2px rgb(0 0 0 / 31%)',
    },
  },
  signin: {
    position: 'absolute',
    right: '5%',
    top: '20px',
    textDecoration: 'none',
    fontSize: '15px',
    color: '#00000050'
  }
}))

interface HeaderProps {
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: HeaderProps) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Header(props: HeaderProps) {
  const classes = useStyles()

  return (
    <Container>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.header}>
          <Container className={classes.appBar}>
            <Link to="/">
              <img alt="logo" className={classes.logo} />
            </Link>
            <Button variant="contained" className={classes.btnDemo}>
              Request a demo
            </Button>
          </Container>
          <Link to="/login" className={classes.signin}>
            Sign in
          </Link>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Container>
  )
}
