'use client'
import { ToDoApp } from "./components/ToDoApp/ToDoApp"
import { ReduxStore } from "@/lib/store";
import { Provider } from "react-redux";

export default function ToDoPage() {
  return (
    <Provider store={ReduxStore}>
      <ToDoApp />
    </Provider>
  )
}