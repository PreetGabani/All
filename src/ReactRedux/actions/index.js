export const incNumber = (val) => {
    return {
        type : "Increment",
        payload  : val
    }
}

export const decNumber = (val) => {
    return {
        type : "Decrement",
        payload  : val
    }
}