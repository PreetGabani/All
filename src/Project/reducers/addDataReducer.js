const initialData = {
    list : []
}

const addDataReducer = (state=initialData , action) => {
    switch(action.type){
        case "ADD_DATA":
            // const {title, body} = action.payload;

            return {
                ...state,
                list:[...state.list,action.payload]
            }
            default : return state;
    }
}

export default addDataReducer;

