export const saveToStorage = (value: any, key: string, storage = localStorage) => {
    storage.setItem(key, JSON.stringify(value))
}

export const getItem = (key, storage = localStorage) => JSON.parse(storage.getItem(key))

export const getItems = (keys: Array<string>, pretext = "", storage = localStorage) => {
    let object = {}

    keys.forEach(key => {
        object[key] = getItem(`${pretext}-${key}`, storage)
    })

    return object
}