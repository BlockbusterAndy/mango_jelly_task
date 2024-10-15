import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage, receiveMessage } from '../features/chatSlice';
import { Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim()) {
      dispatch(sendMessage(message));
      setMessage('');
      // Simulate receiving a message
      dispatch(receiveMessage());
    }
  };

  return (
    <Box sx={{ display: 'flex', mt: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type a message..."
        sx={{ 
          mr: 1,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'primary.main',
            },
            '&:hover fieldset': {
              borderColor: 'primary.light',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        onClick={handleSend}
        sx={{ minWidth: '100px' }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;