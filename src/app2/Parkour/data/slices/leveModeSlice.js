import { createSlice } from "@reduxjs/toolkit";

import { levelsImagePack } from "../images/levelsImagePack";
import { modeImages } from "../images/modesImagePack";

export const levelModeSlice = createSlice({
    name: "levelModeSlice",

    initialState: {
        levels: [
            "Одинарний",
            "Двійний",
            "Трійний",
            "Три або Чотири",
            "Вниз",
            "Вгору",
            "Таймбрейк",
            "Середній",
            "Вниз-середній",
            "Божествений",
            "Проліт",
            "Наосліп",
            "Дзеркало",
            "Перевернутий",
            "Перестрибування ближнє",
            "Перестрибування дальнє"
        ],
        levelImages: levelsImagePack,
        modes: [
            "Класичний",
            "Два рівні",
            "Одне HP"
        ],
        modeImages: modeImages
    }
})

export const levelModeReducer = levelModeSlice.reducer