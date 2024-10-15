import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const MessageBox = styled(Box)(({ theme, sender }) => ({
  maxWidth: '70%',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(1),
  backgroundColor: sender === 'user' ? theme.palette.primary.main : theme.palette.background.paper,
  color: sender === 'user' ? theme.palette.primary.contrastText : theme.palette.text.primary,
  alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
}));

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Paper elevation={3} sx={{ height: '400px', overflowY: 'auto', p: 2, bgcolor: 'background.blueGray' }}>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            {message.sender === 'user' && (
                <div className='flex gap-2 justify-end items-center'>
                <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300?random=1" />
                <MessageBox sender={message.sender} className=''>
                    <Typography variant="body1">{message.text}</Typography>
                </MessageBox>
              </div>
            )}
            {message.sender === 'bot' && (
              <div className='flex gap-2 justify-start items-center'>
                <Avatar alt="Chat Bot" src="https://picsum.photos/200/300?random=3" />
                <MessageBox sender={message.sender} className=''>
                    <Typography variant="body1">{message.text}</Typography>
                </MessageBox>
              </div>
            )}
            <Typography variant="caption" color="text.secondary" alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}>
              {new Date(message.timestamp).toLocaleTimeString()}
            </Typography>
          </ListItem>
        ))}
      </List>
      <div ref={chatEndRef} />
    </Paper>
  );
};

export default ChatWindow;