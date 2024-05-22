<template>
    <div class="container mx-auto sm:px-28">
        <div class="mx-auto max-w-[504px]">
            <TheHeader/>
            <div class=" mt-14 ml-5 mr-5">
                <p class="text-gray-500 font-base text-lg mb-8">
                    Join us and get more benefits. We promise to keep your data safely.
                </p>

                <!-- Input mail -->
                <div class="mb-8">
                    <div class="relative">
                        <input type="email"
                            class=" w-full h-10 mr-auto bg-gray-300 opacity-30 rounded pl-2 pr-10 placeholder-gray-900"
                            placeholder="Email Address">
                        <i
                            class="fa-regular fa-envelope absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900"></i>
                    </div>
                </div>

                <!-- input password -->
                <div class="mb-8">
                    <div class="relative">
                        <input type="email"
                            class=" w-full h-10 mr-auto bg-gray-300 opacity-30 rounded pl-2 pr-10 placeholder-gray-900"
                            placeholder="Password">
                        <i
                            class="fa-solid fa-lock absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900"></i>
                    </div>
                </div>

                <!-- Button Login -->
                <div class="flex items-center justify-center mb-2">
                    <button
                        class=" text-center text-white w-full border-2 hover:border-sky-300 bg-red-600 items-center px-36 py-3 font-bold rounded-2xl ">
                        Login
                    </button>
                </div>

                <p class="text-gray-900 font-base text-medium text-center ml-7 mr-10 mb-8">
                    or you can
                </p>

                <!-- Button Facebook -->
                <div class="flex items-center justify-center mb-3">
                    <button
                        class=" w-full border-2 hover:border-sky-300  bg-sky-700 items-center px-14 py-3 font-bold rounded-2xl ">
                        <div class=" flex justify-center">
                            <img style="width: 21px;" src="/src/assets/facebook.png" alt="">
                            <span class="text-white ml-2">
                                Continue with Facebook
                            </span>
                        </div>
                    </button>
                </div>

                <!-- Button Apple -->
                <div class="flex items-center justify-center mb-2">
                    <button
                        class=" w-full border-2 hover:border-sky-300  bg-black items-center px-16 py-3 font-bold rounded-2xl ">
                        <div class=" flex justify-center">
                            <img style="width: 21px;" src="/src/assets/apple.png" alt="">
                            <span class="text-white ml-2">
                                Continue with Apple
                            </span>
                        </div>
                    </button>
                </div>

                <!-- Button Google -->
                <div class="flex items-center justify-center">
                    <button
                        class=" w-full border-2 hover:border-sky-300 bg-white items-center px-16 py-3 font-bold rounded-2xl ">
                        <div class=" flex justify-center">
                            <img style="width: 21px;" src="/src/assets/goole.png" alt="">
                            <span class="text-gray-800 ml-2">
                                Continue with Google
                            </span>
                        </div>
                    </button>
                </div>

                <!-- Button Need an Account? Sign Up -->
                <div class="flex justify-center mr-3 mt-14">
                    <p class="text-base mr-2 text-gray-500">Need an Account?</p>
                    <button class="text-base font-bold mr-2 text-teal-500">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute  } from 'vue-router';
import TheHeader from './TheHeader.vue';

const router = useRouter();


const handleResize = () => {
  if (window.innerWidth >= 1024) {
    router.push({ path: '/homepage', query: { modalLogin: 'true' } });
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>