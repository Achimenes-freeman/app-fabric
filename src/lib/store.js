import { configureStore } from '@reduxjs/toolkit'
import toDoSlice from './slices/toDoSlice'

export const ReduxStore = configureStore({
    reducer: {
        toDoPage: toDoSlice
    }
})