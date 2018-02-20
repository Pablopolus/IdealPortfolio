import {
    RISK_CHANGED
} from '../actions/types'

const INITIAL_STATE = 1

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case RISK_CHANGED:
            return action.payload
        default:
            return state
    }
}
