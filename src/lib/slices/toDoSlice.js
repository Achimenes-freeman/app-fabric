import {createSlice} from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
    name: 'ToDo',
    initialState: {
        tasks: [],
        theme: 'dark'
    },

    reducers: {
        changeCompletion(state, action){
            state.tasks = state.tasks.map((task) => {
                return task.id === action.payload ? {...task, isDone: !task.isDone} : task
            })
        },

        deleteTask(state, action){
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },

        addNewTask(state, action){
            const newTask = {
                id: Date.now().toString(),
                title: action.payload,
                isDone: false
            }
            state.tasks.push(newTask)
        },

        changeTheme(state, action){
            state.theme = action.payload
        }
    }
})

export const {changeCompletion, deleteTask, addNewTask, changeTheme} = toDoSlice.actions

export default toDoSlice.reducer