import { createSlice } from "@reduxjs/toolkit";

export const roundSlice = createSlice({
    name: "parkour",

    initialState: {
        roundMode: null,
        roundLevels: null,
        toDown: null,
        currentPlace: null,
        currentJumper: null
    },

    reducers: {
        setMode: (state, action) => {
            state.roundMode = action.payload;
        },
        setLevels: (state, action) => {
            state.roundLevels = action.payload;
        },
        setDown: (state, action) => {
            state.toDown = action.payload;
        },
        setCurrentPlace: (state, action) => {
            state.currentPlace = action.payload;
        },
        setCurrentJumper: (state, action) => {
            state.currentJumper = action.payload
        },
        setRoundToNull: (state) => {
            Object.keys(state).forEach(key => state[key] = null)
        },
        setRoundFromList: (state, action) => {
            Object.keys(action.payload).forEach(key => state[key] = action.payload[key])
        }
    }
})

export const {
    setMode, 
    setLevels, 
    setDown,
    setCurrentPlace,
    setCurrentJumper,
    setRoundToNull,
    setRoundFromList
} = roundSlice.actions

export const roundReducer = roundSlice.reducer