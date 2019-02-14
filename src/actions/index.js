import actionTypes from "./actionTypes";

export const hexChanger = hex => (dispatch) => {

    const validHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#" + hex)

    if(hex.length > 2 &&  validHex) {
        
        dispatch({
            type:  actionTypes.CHANGE_HAX,
            payload: hex
        })
        
        dispatch({
            type:  actionTypes.HEX_ERROR,
            payload: false
        })
        
    } else {
        dispatch({
            type:  actionTypes.HEX_ERROR,
            payload: "Please insert a valid hex"
        })
    }
}