import type { UserItems } from "@/models/UserItems"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserItemsStore = defineStore('userItems', () => {
    const userItems = ref<UserItems[]>([])
    return { userItems }
})