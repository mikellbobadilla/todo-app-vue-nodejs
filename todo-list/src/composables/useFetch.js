import axios from 'axios'
import { ref } from 'vue'

export function useGetTodos(url) {
  const todos = ref(null)
  const error = ref(null)
  const isLoading = ref(true)

  axios
    .get(url)
    .then(res => todos.value = res.data)
    .catch(err => error.value = err)
    .finally(() => isLoading.value = false)

  return {
    todos,
    error,
    isLoading
  }
}