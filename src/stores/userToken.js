import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserTokenStore = defineStore('userToken', () => {
  const token = ref('')
  const username = ref('')
  function updateToken(payload) {
    token.value = payload
  }
  function clearToken() {
    token.value = ''
  }
  function udpateUsername(payload) {
    username.value = payload
  }
  return { token, username, updateToken, clearToken, udpateUsername }
}, {
  persist: {
    paths: ['token']
  }
})
