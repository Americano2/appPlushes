import { configureStore } from '@reduxjs/toolkit'

import { plushesReducer } from './data/slices'

import { gameReducer, roundReducer, levelModeReducer} from './Parkour/data/slices/'

export default configureStore({
    reducer: {
        plushes: plushesReducer,
        parkourLevelMode: levelModeReducer,
        parkourGame: gameReducer,
        parkourRound: roundReducer
    }
})