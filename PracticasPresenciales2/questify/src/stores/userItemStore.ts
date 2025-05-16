import type { UserItem } from "@/models/UserItem"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserItemStore = defineStore('userItem', () => {
    const userItem = ref<UserItem[]>([])
    return { userItem }
})