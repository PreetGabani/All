export const add_data = (title,body) => {
    return {
        type : "ADD_DATA",
        payload : {
            title : title,
            body : body
        }
    }
}
