<script setup>

import HeaderHomePage from './HeaderHomePage.vue';
import MainAddTask from './MainAddTask.vue';
import Sidebar from './Sidebar.vue';



</script> 
<template>
    <div  class="newtask">
          <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  w-150 bg-white shadow rounded-2xl p-5 text-center space-y-3">
        <p class=" font-bold text-gray-700">Your Task</p>
        <p class="text-gray-700 text-sm">No added task yet.</p>
    </div>
        <HeaderHomePage/>
         <Sidebar/>
         
    </div>
  
    

   
</template>

<style scoped>
    .newtask{
         min-height: 100vh; 
        background: linear-gradient(to bottom right, #89CFF0, #5DADE2);
    }
</style>