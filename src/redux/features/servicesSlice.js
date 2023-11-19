import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jsonData from '../../../public/services.json';

const initialState = {
    jsonData: [],
    isLoading: true,
    isError: false,
    error: '',
};


export const fetchData = createAsyncThunk('data/fetchData', async () => {
    try {
        const response = await fetch(jsonData);
        const data = response;
        console.log(data);
        return data;
    } catch (error) {
        throw Error('Error fetching data');
    }
});


const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jsonData = action;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            });
    },
});

export const selectJsonData = (state) => state;
console.log(selectJsonData);

export default dataSlice.reducer;
