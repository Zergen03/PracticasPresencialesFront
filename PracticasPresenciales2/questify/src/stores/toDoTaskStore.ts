import type { ToDoTask } from "@/models/ToDoTask"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useToDoTaskStore = defineStore('toDoTask', () => {
    const toDoTask = ref<ToDoTask[]>([])
    return { toDoTask }
})