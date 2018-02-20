import {
    RISK_CHANGED
} from './types'

export const riskChanged = (value) => ({
    type: RISK_CHANGED,
    payload: value
})
