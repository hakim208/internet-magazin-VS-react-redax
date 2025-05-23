import { configureStore } from '@reduxjs/toolkit'
import counterSlece from '../counter/counterSlece'

export const store = configureStore({
    reducer: {
        counter: counterSlece
    }
})