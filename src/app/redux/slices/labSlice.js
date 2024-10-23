import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; // Import required functions from Redux Toolkit
import axios from 'axios'; // Import Axios for making HTTP requests

// Define the async thunk for fetching lab request data
export const fetchLabRequests = createAsyncThunk('labRequests/fetchLabRequests', async () => {
  const response = await axios.get('https://hms-backend-gold.vercel.app/lab/lab_requests/get-lab-requests'); // Fetch data from the API
  return response.data; // Return the data from the response
});

// Define the async thunk for posting new lab request data
export const addLabRequest = createAsyncThunk('labRequests/addLabRequest', async (newRequest) => {
  const response = await axios.post('https://hms-backend-gold.vercel.app/lab/lab_requests/add-lab-request', newRequest); // Post data to the API
  return response.data; // Return the data from the response
});

// Define the async thunk for updating existing lab request data
export const updateLabRequest = createAsyncThunk('labRequests/updateLabRequest', async (updatedRequest) => {
  const response = await axios.put(`https://hms-backend-gold.vercel.app/lab/lab_requests/update-lab-request/${updatedRequest.request_id}`, updatedRequest); // Update data in the API
  return response.data; // Return the data from the response
});

// Define the async thunk for deleting lab request data
export const deleteLabRequest = createAsyncThunk('labRequests/deleteLabRequest', async (request_id) => {
  await axios.delete(`https://hms-backend-gold.vercel.app/lab/lab_requests/delete-lab-request/${request_id}`); // Delete data from the API
  return request_id; // Return the deleted request ID
});

// Define the async thunk for fetching lab result data
export const fetchLabResults = createAsyncThunk('labResults/fetchLabResults', async () => {
  const response = await axios.get('https://hms-backend-gold.vercel.app/lab/lab_results'); // Fetch data from the API
  return response.data; // Return the data from the response
});

// Define the async thunk for posting new lab result data
export const addLabResult = createAsyncThunk('labResults/addLabResult', async (newResult) => {
  const response = await axios.post('https://hms-backend-gold.vercel.app/lab/lab_results/add_lab_results', newResult); // Post data to the API
  return response.data; // Return the data from the response
});

// Define the async thunk for updating existing lab result data
export const updateLabResult = createAsyncThunk('labResults/updateLabResult', async (updatedResult) => {
  const response = await axios.put(`https://hms-backend-gold.vercel.app/lab/lab_results/update_lab_results/${updatedResult.result_id}`, updatedResult); // Update data in the API
  return response.data; // Return the data from the response
});

// Define the async thunk for deleting lab result data
export const deleteLabResult = createAsyncThunk('labResults/deleteLabResult', async (result_id) => {
  await axios.delete(`https://hms-backend-gold.vercel.app/lab/lab_results/delete_lab_results/${result_id}`); // Delete data from the API
  return result_id; // Return the deleted result ID
});

// Create the slice
const labRequestSlice = createSlice({
  name: 'labRequests', // Name of the slice
  initialState: {
    labRequests: [], // Initial state for lab requests
    labResults: [], // Initial state for lab results
    status: 'idle', // Initial status
    error: null // Initial error state
  },
  reducers: {}, // No reducers needed for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchLabRequests.pending, (state) => {
        state.status = 'loading'; // Set status to loading when request is pending
      })
      .addCase(fetchLabRequests.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when request is fulfilled
        state.labRequests = action.payload; // Set the fetched data
      })
      .addCase(fetchLabRequests.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when request is rejected
        state.error = action.error.message; // Set the error message
      })
      .addCase(addLabRequest.pending, (state) => {
        state.status = 'loading'; // Set status to loading when request is pending
      })
      .addCase(addLabRequest.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when request is fulfilled
        state.labRequests.push(action.payload); // Add the new request to the state
      })
      .addCase(addLabRequest.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when request is rejected
        state.error = action.error.message; // Set the error message
      })
      .addCase(updateLabRequest.pending, (state) => {
        state.status = 'loading'; // Set status to loading when request is pending
      })
      .addCase(updateLabRequest.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when request is fulfilled
        const index = state.labRequests.findIndex(request => request.request_id === action.payload.request_id); // Find the index of the updated request
        if (index !== -1) {
          state.labRequests[index] = action.payload; // Update the request in the state
        }
      })
      .addCase(updateLabRequest.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when request is rejected
        state.error = action.error.message; // Set the error message
      })
      .addCase(deleteLabRequest.pending, (state) => {
        state.status = 'loading'; // Set status to loading when request is pending
      })
      .addCase(deleteLabRequest.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when request is fulfilled
        state.labRequests = state.labRequests.filter(request => request.request_id !== action.payload); // Remove the deleted request from the state
      })
      .addCase(deleteLabRequest.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when request is rejected
        state.error = action.error.message; // Set the error message
      })
      .addCase(fetchLabResults.pending, (state) => {
        state.status = 'loading'; // Set status to loading when request is pending
      })
      .addCase(fetchLabResults.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when request is fulfilled
        state.labResults = action.payload; // Set the fetched data
      })
      .addCase(fetchLabResults.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when request is rejected
        state.error = action.error.message; // Set the error message
      })
      .addCase(addLabResult.pending, (state) => {
        state.status = 'loading'; // Set status to loading when request is pending
      })
      .addCase(addLabResult.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when request is fulfilled
        state.labResults.push(action.payload); // Add the new result to the state
      })
      .addCase(addLabResult.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when request is rejected
        state.error = action.error.message; // Set the error message
      })
      .addCase(updateLabResult.pending, (state) => {
        state.status = 'loading'; // Set status to loading when request is pending
      })
      .addCase(updateLabResult.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when request is fulfilled
        const index = state.labResults.findIndex(result => result.result_id === action.payload.result_id); // Find the index of the updated result
        if (index !== -1) {
          state.labResults[index] = action.payload; // Update the result in the state
        }
      })
      .addCase(updateLabResult.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when request is rejected
        state.error = action.error.message; // Set the error message
      })
      .addCase(deleteLabResult.pending, (state) => {
        state.status = 'loading'; // Set status to loading when request is pending
      })
      .addCase(deleteLabResult.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when request is fulfilled
        state.labResults = state.labResults.filter(result => result.result_id !== action.payload); // Remove the deleted result from the state
      })
      .addCase(deleteLabResult.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when request is rejected
        state.error = action.error.message; // Set the error message
      });
  }
});

export default labRequestSlice.reducer; // Export the reducer
