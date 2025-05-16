import { User } from "@/models/User"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore('User', () => {
    const user = ref<User[]>([])
    return { user }
})