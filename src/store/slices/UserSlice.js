import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user_email: false
}

// Create a user slice with its reducer functons defined
const userSlice = createSlice({
    // Name and Initial state of the slice
    name: "users",
    initialState,

    // Reducer function defined
    reducers: {
        addUser(state, action) {
            state.user_email = action.payload;
        },
        clearUser(state){
            state.user_email = false
        },
    },
});

export const {addUser, clearUser} = userSlice.actions;
export default userSlice.reducer;