<script setup>
import HeaderHomePage from './HeaderHomePage.vue';
import Sidebar from './Sidebar.vue';
import { ref, watch, onMounted } from "vue"

const todos = ref([]);
const newTodo = ref("");

// Load saved todos from localStorage
onMounted(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
        todos.value = JSON.parse(saved);
    }
});

// Remove task
function remove(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
}

// Save todos whenever they change
watch(todos, (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
}, { deep: true });
</script>

<template>
    <div class="newtask">
        <div
            class="absolute top-1/3 left-1/3 bottom-1/4 right-1/3  bg-sky-100 shadow rounded-2xl p-5 text-center space-y-5">
            <p class="font-bold text-gray-700 text-2xl">Your Task</p>
            <div class="shadow-sm rounded-lg p-3 h-75 overflow-y-auto">
                <!-- Show message if no tasks -->
                <p v-if="todos.length === 0" class="text-gray-700 text-sm">
                    No added task yet.
                </p>
                <!-- Task List -->
                <ul v-else class="mt-2 space-y-2">
                    <li v-for="todo in todos" :key="todo.id"
                        class="flex justify-between items-center bg-sky-200 rounded-lg p-2">
                        <!-- Task Name -->
                        <p class="text-gray-700">{{ todo.name }}</p>
                        <!-- Action Buttons -->
                        <div class="flex space-x-2">
                            <img src="/images/edit.png" class="h-4 cursor-pointer">
                            <img src="/images/check.png" class="h-4 cursor-pointer">
                            <img src="/images/delete.png" class="h-4 cursor-pointer" @click="remove(todo.id)">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <HeaderHomePage />
        <Sidebar />
    </div>
</template>

<style scoped>
.newtask {
    min-height: 100vh;
    background: linear-gradient(to bottom right, #89CFF0, #5DADE2);
}
</style>
