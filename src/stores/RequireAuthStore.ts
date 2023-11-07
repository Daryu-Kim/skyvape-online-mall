import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRequireAuth = defineStore('requireAuth', () => {
  const token = localStorage.getItem("token");

  return { token }
})
