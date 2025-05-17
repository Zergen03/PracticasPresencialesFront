import type { Category } from "@/models/Category"
import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"

// Configuración base de Axios
const api = axios.create({
  baseURL: "https://localhost:5213/api/Category",
  headers: {
    "Content-Type": "application/json"
  }
})

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // GET /api/Category
  const fetchAll = async () => {
  loading.value = true
  try {
    const res = await api.get('/', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJhc2QiLCJyb2xlIjoiYWRtaW4iLCJuYmYiOjE3NDc0OTI4MDgsImV4cCI6MTc0ODA5NzYwOCwiaWF0IjoxNzQ3NDkyODA4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDEvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwLyJ9.ePRSTx0VUr6JI8FDuFt2Tl3p1uShZvoGJ8TFZ71sdP0`
      }
    })
    categories.value = res.data
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}


  // GET /api/Category/{id}
  const fetchById = async (id: number): Promise<Category | null> => {
    try {
      const res = await api.get(`/${id}`)
      return res.data
    } catch (err: any) {
      error.value = err.message
      return null
    }
  }

  // GET /api/Category/user/{userId}
  const fetchByUser = async (userId: number) => {
    loading.value = true
    try {
      const res = await api.get(`/user/${userId}`)
      categories.value = res.data
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // POST /api/Category
  const create = async (category: Omit<Category, "Id">) => {
    try {
      const res = await api.post('/', category)
      categories.value.push(res.data)
    } catch (err: any) {
      error.value = err.message
    }
  }

  // PUT /api/Category/{id}
  const update = async (id: number, updated: Partial<Category>) => {
    try {
      await api.put(`/${id}`, updated)
      const index = categories.value.findIndex(c => c.Id === id)
      if (index !== -1) {
        categories.value[index] = {
          ...categories.value[index],
          ...updated
        }
      }
    } catch (err: any) {
      error.value = err.message
    }
  }

  // DELETE /api/Category/{id}
  const remove = async (id: number) => {
    try {
      await api.delete(`/${id}`)
      categories.value = categories.value.filter(c => c.Id !== id)
    } catch (err: any) {
      error.value = err.message
    }
  }

  return {
    categories,
    loading,
    error,
    fetchAll,
    fetchById,
    fetchByUser,
    create,
    update,
    remove
  }
})
