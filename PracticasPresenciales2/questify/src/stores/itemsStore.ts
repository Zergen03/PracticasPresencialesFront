import type { Items } from "@/models/Items"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useItemsStore = defineStore('items', () => {
    const items = ref<Items[]>([])
    return { items }
})