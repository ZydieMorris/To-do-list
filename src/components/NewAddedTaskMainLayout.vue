<script setup>
import HeaderHomePage from './HeaderHomePage.vue';
import Sidebar from './Sidebar.vue';
import { ref, watch, onMounted } from "vue";

const todos = ref([]);
const newTodo = ref("");

// ✅ Modal states
const showModal = ref(false);
const editingId = ref(null);
const editingText = ref("");

// ✅ Alert (auto hide)
const showAlert = ref(false);
const alertMessage = ref("");

// helper: notify other components
function dispatchTodosUpdated() {
    window.dispatchEvent(new CustomEvent('todos-updated'));
}

// Load saved todos
onMounted(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            todos.value = parsed.map(t => ({
                ...t,
                completed: t.completed ?? false,
                deleted: t.deleted ?? false
            }));
        } catch {
            todos.value = [];
        }
    }
});

// ✅ "Delete"
function remove(id) {
    todos.value = todos.value.map(t => t.id === id ? { ...t, deleted: true } : t);
    dispatchTodosUpdated();
}

// ✅ Open modal for editing
function startEdit(todo) {
    editingId.value = todo.id;
    editingText.value = todo.name;
    showModal.value = true;
}

// ✅ Save edit
function saveEdit() {
    todos.value = todos.value.map((todo) =>
        todo.id === editingId.value ? { ...todo, name: editingText.value } : todo
    );
    closeModal();
    dispatchTodosUpdated();
}

// ✅ Close edit modal
function closeModal() {
    showModal.value = false;
    editingId.value = null;
    editingText.value = "";
}
const message = ref("")
// ✅ Toggle complete + show temporary alert
function toggleComplete(id) {
    const todo = todos.value.find(t => t.id === id);
    if (todo) {
        todos.value = todos.value.map((t) =>
            t.id === id ? { ...t, completed: true } : t
        );
        message.value = "Marked as Done!";

  // auto hide after 2s
  setTimeout(() => {
    message.value = "";
  }, 4000);

        dispatchTodosUpdated();
    }
}

// Save todos whenever they change
watch(todos, (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
}, { deep: true });
</script>

<template>
    <div class="newtask">
    <!-- ✅ Alert Message -->
    <transition name="fade">
      <div v-if="message"
        class="p-3 rounded-lg text-white text-center font-medium bg-green-400 w-50 absolute left-215 top-25">
        {{ message }}
      </div>
    </transition>

        <div
            class="absolute top-1/3 left-1/3 bottom-1/4 right-1/3 bg-white shadow rounded-2xl p-5 text-center space-y-5">

            <p class="font-bold text-gray-700 text-2xl">Your Task</p>
            <div class="shadow-sm rounded-lg p-3 h-75 overflow-y-auto">

                <!-- Show message if no pending tasks -->
                <p v-if="todos.filter(t => !t.completed && !t.deleted).length === 0" class="text-gray-700 text-sm">
                    No added task yet.
                </p>

                <!-- Task List -->
                <ul v-else class="mt-2 space-y-2">
                    <li v-for="todo in todos.filter(t => !t.completed && !t.deleted)" :key="todo.id"
                        class="flex justify-between items-center bg-sky-200 rounded-lg p-2">

                        <!-- Task Name -->
                        <p class="text-gray-700">{{ todo.name }}</p>

                        <div class="flex space-x-2">
                          
                                <img src="/images/check.png" class="h-4 cursor-pointer" @click="toggleComplete(todo.id)" />
                            <!-- ✏️ Edit -->
                            <img src="/images/edit.png" class="h-4 cursor-pointer" @click="startEdit(todo)" />
                            <!-- 🗑️ Delete -->
                            <img src="/images/delete.png" class="h-4 cursor-pointer" @click="remove(todo.id)" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Edit Modal -->
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50">
            <div class="bg-white p-6 rounded-xl shadow-lg w-96">
                <h2 class="text-lg font-bold mb-4">Edit Task</h2>
                <input v-model="editingText" class="border rounded p-2 w-full mb-4" />
                <div class="flex justify-end space-x-2">
                    <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                    <button @click="saveEdit"
                        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
                </div>
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
