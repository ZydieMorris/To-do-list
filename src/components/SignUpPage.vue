<script setup>
import LoginButton from '../components/LoginButton.vue'

import { RouterLink } from 'vue-router';

function Create() {
    alert('Successfully created')
}
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-[#89CFF0] to-[#5DADE2]">
        <div
            class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-140 bg-white shadow rounded-2xl p-10">
            <!-- Create description -->
            <div class="text-center space-y-1">
                <p class="text-2xl font-bold text-gray-700">Create Account</p>
                <p class="text-gray-500 text-sm">Sign up to start managing your tasks</p>
            </div>
            <!-- Input Username -->
            <div class="mt-5 space-y-2 ">
                <!-- Username -->
                <div class="flex flex-col space-y-1">
                    <label class="font-semibold text-gray-500 text-sm outline-none ">Username</label>
                    <input type="text" placeholder="Choose username"
                        class="border border-gray-400 p-3 rounded-lg text-sm">
                </div>
                <!-- Email -->
                <div class="flex flex-col space-y-1">
                    <label class="font-semibold text-gray-500 text-sm outline-none ">Email</label>
                    <input type="text" placeholder="Enter your email"
                        class="border border-gray-400 p-3 rounded-lg text-sm">
                </div>
                <!-- Password -->
                <div class="flex flex-col space-y-1">
                    <label class="font-semibold text-gray-500 text-sm outline-none ">Password</label>
                    <input type="password" placeholder="Create a password"
                        class="border border-gray-400 p-3 rounded-lg text-sm">
                </div>
                <!-- Confirm Password -->
                <div class="flex flex-col space-y-1">
                    <label class="font-semibold text-gray-500 text-sm outline-none ">Confirm Password</label>
                    <input type="password" placeholder="Confirm your password"
                        class="border border-gray-400 p-3 rounded-lg text-sm">
                </div>
                <!-- Sign Up Button -->
                <div class="mt-4">
                    <RouterLink to="/" @click="Create">
                        <LoginButton>
                            Create account
                        </LoginButton>
                    </RouterLink>
                </div>
                <!--  -->
                <div class="text-center mt-6 text-gray-500 text-sm">
                    <p>Don't have an account?
                        <span class="text-blue-700 font-semibold hover:text-blue-400">
                            <RouterLink to="/" @click="CreateAccount">Sign in</RouterLink>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>