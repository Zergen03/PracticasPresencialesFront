import type { User } from "@/models/User"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore('User', {
  state: () => ({
    token: ''
  }),
  actions: {
    setUser(token: string) {
      this.token = token
    },
    logout() {
      this.token = ''
    }
  }
})
