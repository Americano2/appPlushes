export const getIndexes = (array: Array<any>) => array.map((el, index) => index)

export const excludeArray = (array1 : Array<any>, array2 : Array<any>) => array2 ? array1.filter(el => !array2.includes(el)) : array1

export const checkLengthColumns = (array: Array<Array<any>>) => array.map(el => el.length)

export const toggleValueArray = (array: Array<any>, value: any) => {
    let newArray = [...array]

    if(newArray.includes(value))
        newArray.splice(newArray.indexOf(value), 1)
    else
        newArray.unshift(value)

    return newArray
}
