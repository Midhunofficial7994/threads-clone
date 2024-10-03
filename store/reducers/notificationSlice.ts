import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/axios/axiosInstance";

interface User {
  _id: string;
  name: string;
}

interface Notification {
  id: string;
  description: string;
  senderUserId: User; // Treat `senderUserId` as an object instead of an array
}

interface NotificationState {
  notifications: Notification[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NotificationState = {
  notifications: [],
  status: 'idle',
  error: null,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (userId) {
        const response = await axiosInstance.get(`users/notification/${userId}`);
        return response.data.notifications;
      }
      throw new Error('User ID not found in localStorage');
    } catch (error: any) {
      console.error('Failed to fetch notifications:', error);
      throw error.response?.data?.message || error.message;
    }
  }
);

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch notifications';
      });
  },
});

export default notificationsSlice.reducer;