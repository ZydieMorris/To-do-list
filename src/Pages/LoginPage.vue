<script setup>
import { RouterLink } from 'vue-router';
import LoginButton from "../components/LoginButton.vue";

</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-[#89CFF0] via-[#5DADE2] to-[#6C5CE7]">
        <div
            class="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-2xl shadow-xl p-10">
            <!-- Welcome -->
            <div class="text-center space-y-.5">
                <p class=" font-bold text-2xl text-gray-800">Welcome Back</p>
                <div class="text-gray-600 text-sm">Log in to access your ToDoList tasks</div>
            </div>
            <!-- Input -->
            <div class="mt-4">
                <!-- Email -->
                <div class="flex flex-col space-y-1">
                    <label class="font-semibold text-gray-500 text-sm outline-none ">Email or Username</label>
                    <input type="text" placeholder="Enter your email"
                        class="border border-gray-400 p-2 rounded-lg text-sm">
                </div>
                <!-- Password -->
                <div class="flex flex-col space-y-1 mt-3">
                    <label class="font-semibold text-gray-500 text-sm outline-none">Password</label>
                    <input type="text" placeholder="Enter your password"
                        class="border border-gray-400 p-2 rounded-lg text-sm">
                </div>
            </div>
            <!-- Remember me & Password -->
            <div class="mt-2 flex justify-between ">
                <div class="space-x-1 ">
                    <input type="checkbox" class="h-4">
                    <label class="text-xs align-text-top text-gray-500">Remember me</label>
                </div>
                <div>
                    <RouterLink to="/forgotpassword" class="text-xs align-text-top text-blue-400 hover:text-blue-500">
                    Forgot password?</RouterLink>
                </div>
            </div>
            <!-- Button -->
            <div class="mt-3">
                <RouterLink to="/home">
                    <LoginButton>Sign in</LoginButton>
                </RouterLink>
            </div>
            <!-- SignUp -->
            <div class="text-center mt-4 text-gray-500 text-sm">
                <p>Don't have an account?
                    <span class="text-blue-700 font-semibold hover:text-blue-400">
                        <RouterLink to="/signup">Sign up</RouterLink>
                    </span>
                </p>
            </div>

        </div>
    </div>
</template>
