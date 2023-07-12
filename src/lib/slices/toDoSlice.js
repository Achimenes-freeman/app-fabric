import {createSlice} from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
    name: 'ToDo',
    initialState: {
        tasks: [
            {
                id: 1,
                title: 'Name of Task',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex quod cumque ea ipsam quibusdam dolores saepe, optio at, debitis sequi accusamus eius aliquid vel, nostrum eum ab minima voluptatem.',
                isDone: false,
            }
        ],
        theme: 'light'
    },

    reducers: {
        changeCompletion(state, action){
            state.tasks = state.tasks.map((task) => {
                task.id === action.payload && {...task, isDone: !task.isDone}
            })
        },

        deleteTask(state, action){
            state.tasks = state.tasks.filter(task => {
                task.id !== action.payload
            })
        },

        addNewTask(state, action){
            state.tasks.push(action.payload)
        }
    }
})

export const {changeCompletion, deleteTask, addNewTask} = toDoSlice.actions

export default toDoSlice.reducer