export const randomInteger = (max = 1, min = 0) => Math.floor((Math.random() * max) + min)

export const randomElement = (array: Array<any>) => array[randomInteger(array.length)]