import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacter = createAsyncThunk('swapi/fetchCharacter', async () => {
    const response = await axios.get('https://swapi.py4e.com/api/people/1');
    return response.data;
});

const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        character: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        clearCharacter: (state) => {
        state.character = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCharacter.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCharacter.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.character = action.payload;
        })
        .addCase(fetchCharacter.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export const { clearCharacter } = swapiSlice.actions;
export default swapiSlice.reducer;