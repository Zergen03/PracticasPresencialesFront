// stores/userItemsStore.ts
import type { UserItems } from "@/models/UserItems"
import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"

const api = axios.create({
  baseURL: "https://localhost:5213/api/UserItems",
  headers: {
    "Content-Type": "application/json"
  }
})

export const useUserItemsStore = defineStore('userItems', () => {
  const userItems = ref<UserItems[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // GET /api/UserItems
  const fetchAll = async () => {
    loading.value = true
    try {
      const res = await api.get('/')
      userItems.value = res.data
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // GET /api/UserItems/{userId}
  const fetchByUserId = async (userId: number) => {
    loading.value = true
    try {
      const res = await api.get(`/${userId}`)
      userItems.value = res.data
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // POST /api/UserItems
  const create = async (userItem: Omit<UserItems, "Id">) => {
    try {
      const res = await api.post('/', userItem)
      userItems.value.push(res.data)
    } catch (err: any) {
      error.value = err.message
    }
  }

  // DELETE /api/UserItems/{userId}
  const removeByUser = async (userId: number) => {
    try {
      await api.delete(`/${userId}`)
      userItems.value = userItems.value.filter(ui => ui.User_Id !== userId)
    } catch (err: any) {
      error.value = err.message
    }
  }

  return {
    userItems,
    loading,
    error,
    fetchAll,
    fetchByUserId,
    create,
    removeByUser
  }
})
