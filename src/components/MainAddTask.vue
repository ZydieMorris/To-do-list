<!-- components/TodoList.vue -->
<script setup>
import { ref, watch, onMounted } from "vue"
const todos = ref([]);
const newTodo = ref("");
const message = ref("");

function addTodo() {
  if (!newTodo.value) return;
  todos.value.push({
    id: Math.random(),
    name: newTodo.value,
    isComplete: false,
  });
  newTodo.value = "";
  message.value = "Successfully added!";

  // auto hide after 2s
  setTimeout(() => {
    message.value = "";
  }, 2000);
}

function remove(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

onMounted(() => {
  const saved = localStorage.getItem("todos");
  if (saved) {
    todos.value = JSON.parse(saved);
  }
});

watch(todos, (newTodos) => {
  localStorage.setItem("todos", JSON.stringify(newTodos));
}, { deep: true });

</script>

<template>
  <div>
    <!-- ✅ Alert Message -->
    <transition name="fade">
      <div v-if="message"
        class="p-3 rounded-lg text-white text-center font-medium bg-green-400 w-50 absolute left-215 top-25">
        {{ message }}
      </div>
    </transition>
  </div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 bg-white shadow rounded-2xl p-10">
    <!-- Title -->
    <div class="text-center space-y-2">
      <p class="font-bold text-3xl text-gray-700">TodoList</p>
      <p class="text-gray-500">Organize your tasks efficiently</p>
    </div>

    <!-- Input -->
    <div class="mt-9 flex justify-between">
      <input v-model="newTodo" type="text" placeholder="Add a new task..."
        class=" border-gray-300 p-3 rounded-xl w-100 font-medium border-2" />
      <button class="bg-[#2980b9] hover:bg-[#409ad5] p-3 px-5 rounded-xl text-white font-semibold" @click="addTodo">
        Add Task
      </button>

    </div>

    <!-- Footer -->
    <div class="mt-10">
      <p class="text-gray-500 text-center">Keep your productivity on track!</p>
    </div>
  </div>
</template>
