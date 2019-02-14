import actionTypes from '../actions/actionTypes'; 

const initialState = {
    hex: null,
    hexError: false
};

const hexReducer = (state = initialState, action) => {
     
        console.log("action.payload");
        console.log(action);
    switch(action.type) {
        case actionTypes.CHANGE_HAX:
            return {
                ...state,
                hex: action.payload
            }
        case actionTypes.HEX_ERROR:
            return {
                ...state,
                hexError: action.payload
            }
        default:    
            return state
    }
}

export default hexReducer;