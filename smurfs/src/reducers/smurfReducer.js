import {FETCH_DATA_SUCCESS} from '../actions/smurfActions'
import {POST_DATA_SUCCESS} from '../actions/smurfActions'


const initialState = { 
    data: []
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_SUCCESS:
            // console.log(action.payload)
            return {
                ...state,
                data: action.payload
            }
        case POST_DATA_SUCCESS:
            
            return {
                ...state,
                data: action.payload
            }  
        default:
            return state
    }
}