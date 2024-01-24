import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/UserSlice'; 
import SponsorSlice from "./slices/SponsorSlice";


// A function to take state as input and save it in local storage
const saveToLocalStorage = (state) => {
  try {
    // Convert the given state to json
    const serializedState = JSON.stringify(state);
    // Load the state in local storage
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Error saving state to local storage:', err);
  }
};


// A function to load state from local storage and return the state
const loadFromLocalStorage = () => {
  try {
    // Load the redux state from local storage
    const serializedState = localStorage.getItem('reduxState');
    // Return state in json format if exists, else return undefied
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error('Error loading state from local storage:', err);
    return undefined;
  }
};


// Loading the state from local storage
const persistedState = loadFromLocalStorage();

// Initialize a redux config store with the reducers
// Will act as a global store, accessed by App using <Provider> wrapped in index.js
const store = configureStore({
    reducer: {
        users: userSlice, // Access the reducer property of userSlice
        sponsors: SponsorSlice // Access the reducer property of sponsorSlice
    },

    // Loaded state
    preloadedState: persistedState,
});

// Subscribe to the created store, as soon as an action is dispatched, run function defined
store.subscribe(() => {
    // Get the loaded state
    const { users, sponsors } = store.getState();
    // Save the state to local storage
    saveToLocalStorage({ users, sponsors });
  });

export default store;
