<script setup>
import SidebarButton from './SidebarButton.vue';

</script>
<template>

<div class="absolute left-10 top-30 bottom-10  bg-white text-[#2E86C1]  w-70 rounded-2xl shadow-lg p-5">
    <div class="text-center font-bold text-gray-700">
        <p>Task Categories</p>
    </div>
    <!-- Button -->
    <div class="flex flex-col space-y-2 mt-5">
                
                    <RouterLink to="/home"><SidebarButton>Add Task</SidebarButton> </RouterLink>
                
        <RouterLink to="/home/newtask">
                   <SidebarButton >
       New Added Task
        </SidebarButton>
        </RouterLink>
          <RouterLink to="/home/finished"><SidebarButton>Finished Task</SidebarButton> </RouterLink>
            <RouterLink to="/home/deleted"><SidebarButton>Deleted Task</SidebarButton> </RouterLink>
                
    </div>
    <div class="absolute bottom-10 right-8 font-semibold bg-[#2980b9] hover:bg-[#409ad5] flex space-x-2 p-2 text-white rounded-lg">
        <RouterLink to="/" class="">Logout</RouterLink>
        <img src="/images/logout.png" class="h-5">
    </div>
</div>
</template>