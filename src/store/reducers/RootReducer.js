import AuthReducer from './authReducer'
import PrescriptionReducer from './PrescriptionReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth:AuthReducer,
    prescription:PrescriptionReducer
})

export default rootReducer