import { createSlice } from "@reduxjs/toolkit";

import { viedinskImagePack } from "../images/viedinskImagePack"

export const plushesSlice = createSlice({
    name: "plushSlice",

    initialState: {
        plushes: [
            {
                name: "Анастасія",
                nationality: "Вієдінськ",
            },
            {
                name: "Твіті",
                nationality: "Вієдінськ",
            },
            {
                name: "Вінні Пух",
                nationality: "Вієдінськ"
            },
            {
                name: "Бабуся",
                nationality: "Вієдінськ"
            },
            {
                name: "Божествіна",
                nationality: "Вієдінськ"
            },
            {
                name: "Воділа",
                nationality: "Вієдінськ"
            },
            {
                name: "Вчений",
                nationality: "Вієдінськ"
            },
            {
                name: "Детектив",
                nationality: "Вієдінськ"
            },
            {
                name: "Дід",
                nationality: "Вієдінськ"
            },
            {
                name: "Дід Мавп",
                nationality: "Вієдінськ"
            },
            {
                name: "Жаб-Рєн",
                nationality: "Вієдінськ"
            },
            {
                name: "Жан-Пєр",
                nationality: "Вієдінськ"
            },
            {
                name: "Заєць",
                nationality: "Вієдінськ"
            },
            {
                name: "Кит",
                nationality: "Вієдінськ"
            },
            {
                name: "Кінь",
                nationality: "Вієдінськ"
            },
            {
                name: "Ковбой",
                nationality: "Вієдінськ"
            },
            {
                name: "Кубут",
                nationality: "Вієдінськ"
            },
            {
                name: "Лев 1",
                nationality: "Вієдінськ"
            },
            {
                name: "Левчик",
                nationality: "Вієдінськ"
            },
            {
                name: "Лікар",
                nationality: "Вієдінськ"
            },
            {
                name: "Мія",
                nationality: "Вієдінськ"
            },
            {
                name: "Моднік",
                nationality: "Вієдінськ"
            },
            {
                name: "Петро",
                nationality: "Вієдінськ"
            },
            {
                name: "Рад. Пух",
                nationality: "Вієдінськ"
            },
            {
                name: "Роберт",
                nationality: "Вієдінськ"
            },
            {
                name: "Семен",
                nationality: "Вієдінськ"
            },
            {
                name: "Твігі",
                nationality: "Вієдінськ"
            },
            {
                name: "Том",
                nationality: "Вієдінськ"
            },
            {
                name: "Царевич 2",
                nationality: "Вієдінськ"
            },
        ],
        plushesImages: viedinskImagePack
    }
})

export const plushesReducer = plushesSlice.reducer