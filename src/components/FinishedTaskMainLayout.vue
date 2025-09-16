<script setup>
import HeaderHomePage from './HeaderHomePage.vue';
import Sidebar from './Sidebar.vue';
import { ref, onMounted } from "vue";

const finished = ref([]);

// Load tasks from localStorage
function loadTasks() {
    const saved = localStorage.getItem("todos");
    if (saved) {
        const all = JSON.parse(saved);
        finished.value = all.filter(t => t.completed && !t.deleted);
    }
}
const message = ref("")
// ✅ Undo finished task
function undoTask(id) {
    const saved = localStorage.getItem("todos");
    if (!saved) return;

    let all = JSON.parse(saved);
    all = all.map(t =>
        t.id === id ? { ...t, completed: false } : t
    );
    message.value = "Undo na haw";

    // auto hide after 2s
    setTimeout(() => {
        message.value = "";
    }, 2000);

    localStorage.setItem("todos", JSON.stringify(all));
    window.dispatchEvent(new Event("todos-updated"));
}
const alert = ref("")
// ✅ Move to deleted list (instead of removing)
function deleteTask(id) {
    const saved = localStorage.getItem("todos");
    if (!saved) return;

    let all = JSON.parse(saved);
    all = all.map(t =>
        t.id === id ? { ...t, deleted: true } : t
    );
    alert.value = "Delete na haw";

    // auto hide after 2s
    setTimeout(() => {
        alert.value = "";
    }, 3000);

    localStorage.setItem("todos", JSON.stringify(all));
    window.dispatchEvent(new Event("todos-updated"));
}

onMounted(() => {
    loadTasks();
    window.addEventListener("todos-updated", loadTasks);
});
</script>

<template>
    <div class="finish">
        <!-- ✅ Alert Message -->
        <transition name="fade">
            <div v-if="message"
                class="p-3 rounded-lg text-white text-center font-medium bg-green-400 w-50 absolute left-215 top-25">
                {{ message }}
            </div>
        </transition>
        <!-- ✅ Alert Message -->
        <transition name="fade">
            <div v-if="alert"
                class="p-3 rounded-lg text-white text-center font-medium bg-green-400 w-50 absolute left-215 top-25">
                {{ alert }}
            </div>
        </transition>
        <div
            class="absolute top-1/3 left-1/3 bottom-1/4 right-1/3 bg-white shadow rounded-2xl p-5 text-center space-y-5">

            <p class="font-bold text-gray-700">Your Finished Tasks</p>
            <div class="shadow-sm rounded-lg p-3 h-75 overflow-y-auto">
                <p v-if="finished.length === 0" class="text-gray-700 text-sm">
                    No finished task yet.
                </p>

                <!-- ✅ Finished tasks list -->
                <ul v-else class="mt-2 space-y-2">
                    <li v-for="task in finished" :key="task.id"
                        class="flex justify-between items-center bg-sky-200 rounded-lg p-2">

                        <!-- Left side: Task name -->
                        <span class="text-gray-800">{{ task.name }}</span>

                        <!-- Right side: Actions -->
                        <div class="flex space-x-3">
                            <button @click="undoTask(task.id)"
                                class="text-blue-500 hover:text-blue-700 font-semibold text-sm">
                                Undo
                            </button>
                            <button @click="deleteTask(task.id)"
                                class="text-red-500 hover:text-red-700 font-semibold text-sm">
                                Delete
                            </button>
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
.finish {
    min-height: 100vh;
    background: linear-gradient(to bottom right, #89CFF0, #5DADE2);
}
</style>
