<script setup>
import LoginButton from './LoginButton.vue';

</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-[#89CFF0] via-[#5DADE2] to-[#6C5CE7] ">
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl w-100 h-auto rounded-xl p-10">
            <div class="text-center space-y-4">
                <p class="font-bold text-2xl text-gray-700">Forgot Password</p>
                <p class="text-gray-600 text-normal">Please enter your email address to receive a password reset link.
                </p>
            </div>
            <div class="mt-5">
                <input type="text" placeholder="Email Address" class="border border-gray-400 p-2 rounded-lg w-full">
            </div>
            <div class="mt-5 ">
                <RouterLink to="">
                    <LoginButton>Reset Link</LoginButton>
                </RouterLink>
                </div>
            <div class="text-center mt-4">
                 <RouterLink to="/"><span class="text-blue-500 ">Back to login</span></RouterLink>
           
            </div>
        </div>
    </div>
</template>