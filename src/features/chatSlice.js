import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate receiving a message
export const receiveMessage = createAsyncThunk(
  'chat/receiveMessage',
  async (_, { dispatch }) => {
    const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1-4 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        const message = {
          id: Date.now(),
          text: 'This is a simulated received message.',
          sender: 'bot',
          timestamp: new Date().toISOString(),
        };
        resolve(message);
      }, delay);
    });
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    currentUser: 'user',
  },
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload,
        sender: state.currentUser,
        timestamp: new Date().toISOString(),
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(receiveMessage.fulfilled, (state, action) => {
      state.messages.push(action.payload);
    });
  },
});

export const { sendMessage } = chatSlice.actions;
export default chatSlice.reducer;