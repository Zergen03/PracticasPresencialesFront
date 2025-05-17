// stores/itemsStore.ts
import type { Items } from "@/models/Items"
import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"

const api = axios.create({
  baseURL: "https://localhost:5213/api/Items",
  headers: {
    "Content-Type": "application/json"
  }
})

export const useItemsStore = defineStore('items', () => {
  const items = ref<Items[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // GET /api/Items
  const fetchAll = async () => {
    loading.value = true
    try {
      const res = await api.get('/')
      items.value = res.data
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // GET /api/Items/{id}
  const fetchById = async (id: number): Promise<Items | null> => {
    try {
      const res = await api.get(`/${id}`)
      return res.data
    } catch (err: any) {
      error.value = err.message
      return null
    }
  }

  // POST /api/Items
  const create = async (item: Omit<Items, 'Id'>) => {
    try {
      const res = await api.post('/', item)
      items.value.push(res.data)
    } catch (err: any) {
      error.value = err.message
    }
  }

  // PUT /api/Items
  const update = async (item: Items) => {
    try {
      await api.put('/', item)
      const index = items.value.findIndex(i => i.Id === item.Id)
      if (index !== -1) {
        items.value[index] = item
      }
    } catch (err: any) {
      error.value = err.message
    }
  }

  // DELETE /api/Items/{id}
  const remove = async (id: number) => {
    try {
      await api.delete(`/${id}`)
      items.value = items.value.filter(i => i.Id !== id)
    } catch (err: any) {
      error.value = err.message
    }
  }

  return {
    items,
    loading,
    error,
    fetchAll,
    fetchById,
    create,
    update,
    remove
  }
})
