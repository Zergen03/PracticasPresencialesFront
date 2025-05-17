// stores/toDoTaskStore.ts
import type { ToDoTask } from "@/models/ToDoTask"
import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"

const api = axios.create({
  baseURL: "https://localhost:5213/api/Task",
  headers: {
    "Content-Type": "application/json"
  }
})

export const useToDoTaskStore = defineStore('toDoTask', () => {
  const toDoTask = ref<ToDoTask[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // GET /api/Task
  const fetchAll = async () => {
    loading.value = true
    try {
      const res = await api.get('/')
      toDoTask.value = res.data
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // GET /api/Task/{id}
  const fetchById = async (id: number): Promise<ToDoTask | null> => {
    try {
      const res = await api.get(`/${id}`)
      return res.data
    } catch (err: any) {
      error.value = err.message
      return null
    }
  }

  // GET /api/Task/category/{categoryId}
  const fetchByCategory = async (categoryId: number) => {
    loading.value = true
    try {
      const res = await api.get(`/category/${categoryId}`)
      toDoTask.value = res.data
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // POST /api/Task
  const create = async (task: Omit<ToDoTask, 'Id'>) => {
    try {
      const res = await api.post('/', task)
      toDoTask.value.push(res.data)
    } catch (err: any) {
      error.value = err.message
    }
  }

  // PUT /api/Task/{id}
  const update = async (id: number, updated: Partial<ToDoTask>) => {
    try {
      await api.put(`/${id}`, updated)
      const index = toDoTask.value.findIndex(t => t.Id === id)
      if (index !== -1) {
        toDoTask.value[index] = {
          ...toDoTask.value[index],
          ...updated
        }
      }
    } catch (err: any) {
      error.value = err.message
    }
  }

  // DELETE /api/Task/{id}
  const remove = async (id: number) => {
    try {
      await api.delete(`/${id}`)
      toDoTask.value = toDoTask.value.filter(t => t.Id !== id)
    } catch (err: any) {
      error.value = err.message
    }
  }

  return {
    toDoTask,
    loading,
    error,
    fetchAll,
    fetchById,
    fetchByCategory,
    create,
    update,
    remove
  }
})
