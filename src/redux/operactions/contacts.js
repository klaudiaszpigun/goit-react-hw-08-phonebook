import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      data.sort((x, y) => x.name.localeCompare(y.name));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        contact,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('API error:', error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      console.log(`Attempting to delete contact with id: ${contactId}`);
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log('Delete response:', response.data);
      return contactId;
    } catch (error) {
      console.error('Delete error:', error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
