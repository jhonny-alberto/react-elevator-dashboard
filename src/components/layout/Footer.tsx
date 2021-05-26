import { 
  Container,
  Link,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../../assets/images/lifetech-footer.webp';
import google from '../../assets/images/google-play-button.webp';
import appstore from '../../assets/images/app-store-logo.webp'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#333f49',
  },
  footer: {
    width: '75%',
    padding: 0
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
  },
  google: {
    content: `url(${google})`,
  },
  logo: {
    content: `url(${logo})`,
  },
  appstore: {
    content: `url(${appstore})`,
  },
  copyright: {
    fontSize: '14px',
    color: '#919191',
    textAlign: 'center',
    paddingBottom: '30px',
  }
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth={false}>
      <Container className={classes.footer}>
        <Container className={classes.logoWrapper}>
          <Link href="#">
            <img alt="logo" className={classes.google} />
          </Link>
          <Link href="#">
            <img alt="logo" className={classes.logo} />
          </Link>
          <Link href="#">
            <img alt="logo" className={classes.appstore} />
          </Link>
        </Container>
        <Typography variant="caption" display="block" className={classes.copyright} gutterBottom>
          Copyright 2021 Liftech Inc. All Rights Reserved
        </Typography>
      </Container>
    </Container>
  )
}
