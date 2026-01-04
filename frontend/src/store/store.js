import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice/authSlice"
import adminProducsReducer from './admin/productSlice'



const store = configureStore({
    reducer : {
        auth : authReducer,
        adminProducts : adminProducsReducer
    }
})

export default store