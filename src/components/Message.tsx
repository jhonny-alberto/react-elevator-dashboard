import { useState, useCallback } from 'react'
import { Paper, Typography, Button, TextField, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: '30px',
    borderRadius: '10px',
    width: '76%',
  },
  messageForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '20px',
    fontWeight: 300,
    textTransform: 'none',
    marginBottom: '30px',
  },
  sendButton: {
    display: 'block',
    transition: 'all 0.2s ease, visibility 0s',
    backgroundColor: '#00B1ED',
    color: '#fff',
    borderRadius: '5px',
    textTransform: 'none',
    margin: '45px 0 15px 0',
    letterSpacing: '2px',
    '&:hover': {
      color: '#00000030',
      backgroundColor: '#00B1ED',
    }
  },
  formControl: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageInput: {
    padding: 0,
    width: '80%'
  }
}))

interface MessageProps { }

export default function CallPanel(props: MessageProps) {
  const classes = useStyles()

  const [errorState, setErrorState] = useState(false);

  const handleSend = useCallback((e) => {
    console.log('sdfsdfsdfsf')
    setErrorState(true)
  }, [setErrorState])

  return (
    <Paper elevation={0} className={classes.root} id="message_panel">
      <form noValidate autoComplete="off">
        <Typography variant="h2" className={classes.title}>
          Send Text Message
        </Typography>
        {
          errorState && 
          <TextField
            error
            id="outlined-error-helper-text"
            label=""
            variant="outlined"
            placeholder="Type your message"
            helperText="Please enter your message."
            className={classes.messageInput}
          />
        }
        {
          !errorState && 
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            placeholder="Type your message"
            className={classes.messageInput}
          />
        }
        <FormControl variant="filled" className={classes.formControl}>
          <Button
            variant="contained"
            className={classes.sendButton}
            onClick={handleSend}
          >
            Send
          </Button>
        </FormControl>
      </form>
    </Paper>
  )
}
