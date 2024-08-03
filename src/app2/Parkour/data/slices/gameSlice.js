import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",

    initialState: {
        stage: null,
        numberPlaces: null,
        listPlaces: null,
        allowedLevels: null,
        allowedModes: null
    },

    reducers: {
        setStage: (state, action) => {
            state.stage = action.payload;
        },
        setListPlaces: (state, action) => {
            state.listPlaces = action.payload;
        },
        setAllowedLevels: (state, action) => {
            state.allowedLevels = action.payload;
        },
        setAllowedModes: (state, action) => {
            state.allowedModes = action.payload;
        },
        setNumberPlaces: (state, action) => {
            state.numberPlaces = action.payload
        },
        setAllFromList: (state, action) => {
            Object.keys(action.payload).forEach(key => state[key] = action.payload[key])
        }
    }
})

export const {
    setStage,
    setListPlaces,
    setAllowedLevels,
    setAllowedModes,
    setNumberPlaces,
    setAllFromList
} = gameSlice.actions

export const gameReducer = gameSlice.reducer