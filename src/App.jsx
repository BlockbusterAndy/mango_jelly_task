import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Box, Paper } from '@mui/material';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0F18',
      paper: '#1A2333',
      blueGray: '#0f172a'
    },
    primary: {
      main: '#84cc16', // text-lime-600
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0aec0',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0A0F18',
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper' }}>
              <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
                Chat App
              </Typography>
              <ChatWindow />
              <MessageInput />
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;