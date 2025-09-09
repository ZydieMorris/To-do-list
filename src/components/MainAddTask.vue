<!-- components/TodoList.vue -->
<script setup>
import {ref} from "vue"

const todos = ref([
    {
        id: 1,
        name:"Lupad",
        isComplete: false,
    }
]);

const newTodo = ref("");

function addTodo(){
    if(newTodo.value.trim() === "") return;
    todos.value.push({
        id: Math.random(),
        name: newTodo.value,
        isComplete: false,
    });
    newTodo.value = "";
}
</script>

<template>
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 bg-white shadow rounded-2xl p-10">
    <!-- Title -->
    <div class="text-center space-y-2">
      <p class="font-bold text-3xl text-gray-700">TodoList</p>
      <p class="text-gray-500">Organize your tasks efficiently</p>
    </div>

    <!-- Input -->
    <div class="mt-9 flex justify-between">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Add a new task..."
        class="border border-gray-300 p-3 rounded-xl w-100 font-medium border-2"
      />
      <button
        class="bg-[#2980b9] hover:bg-[#409ad5] p-3 px-5 rounded-xl text-white font-semibold"
        @click="addTodo"
      >
        Add Task
      </button>
    </div>

    <!-- Todo List -->
    <ul class="mt-6 space-y-2">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex items-center justify-between border-b pb-2"
      >
        <span :class="{ 'line-through text-gray-400': todo.isComplete }">
          {{ todo.name }}
        </span>
        <input type="checkbox" v-model="todo.isComplete" />
      </li>
    </ul>

    <!-- Footer -->
    <div class="mt-10">
      <p class="text-gray-500 text-center">Keep your productivity on track!</p>
    </div>
  </div>
</template>
