const initialData = {
    list: []
}

const AddDataReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_DATA":
            const { id, name, address, city, date, status } = action.payload;
            return {
                ...state,
                list: [...state.list,
                {
                    id: id,
                    name: name,
                    address: address,
                    city: city,
                    date: date,
                    status: status
                }
                ]
            }

        case "DELETE_DATA":
            const newList = state.list.filter((item) => item.id !== action.payload)
            // console.log(newList)

            return {
                list: newList
            }
        default: return state;

        case "UPDATE_DATA":

            const updateData = state.list.map((item) => item.id === action.payload.id ? action.payload : item)
            return {
                list: updateData
            }
    }
}

export default AddDataReducer;

