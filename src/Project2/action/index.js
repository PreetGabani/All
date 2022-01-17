export const add_data = (name, address, city, date, status) => {
    return {
        type: "ADD_DATA",
        payload: {
            id: new Date().getTime().toString(),
            name: name,
            address: address,
            city: city,
            date: date,
            status: status,
        }
    }
}

export const delete_data = (id) => {
    return {
        type: "DELETE_DATA",
        payload: id
    }
}

export const update_data = (name, address, city, date, status,id) => {
    return {
        type: "UPDATE_DATA",
        payload: {
            name: name,
            address: address,
            city: city,
            date: date,
            status: status,
            id:id
        }
    }
}
