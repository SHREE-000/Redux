export const increment = (add) => {
    return {
        type : 'INCREMENT',
        payload : add
    }
}

export const decrement = (dec) => {
    return {
        type : 'DECREMENT',
        payload : dec
    }
}