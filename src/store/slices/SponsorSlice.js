import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sponsor_email: false
}

// Create a user slice with its reducer functons defined
const sponsorSlice = createSlice({
    // Name and Initial state of the slice
    name: "sponsors",
    initialState,

    // Reducer function defined
    reducers: {
        addSponsor(state, action) {
            state.sponsor_email = action.payload;
        },
        addSponsorId(state, action) {
            state.sponsorId = action.payload;
        },
        clearSponsor(state){
            state.sponsor_email = false
        },
    },
});

export const {addSponsor, clearSponsor, addSponsorId} = sponsorSlice.actions;
export default sponsorSlice.reducer;