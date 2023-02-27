<script setup>
import Navbar from '../components/Navbar.vue'
import Todo from '../components/Todo.vue'
import Spinner from '../components/Spinner.vue'
import { useGetTodos } from '../composables/useFetch'

const { todos, isLoading, error } = useGetTodos('/api/todos')

</script>
<template>
  <Navbar />
<main class="main container-md">
    <Spinner v-if="isLoading" />
    
    <section v-else class="row">
      <Todo v-for="todo in todos" 
        :key="todo.id" 
        :title="todo.title" 
        :content="todo.content" 
        :date="todo.date" 
      />
        </section>
  </main>
</template>