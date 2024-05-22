<template>
    <div class="container mx-auto sm:px-28">
        <div class="mx-auto max-w-[504px]">
            <div class="flex justify-between ">
                <div class="flex">
                    <!-- come back -->
                    <button @click="$router.back()" class="block lg:hidden ml-5">
                        <i class="fa-solid fa-arrow-left text-xl mr-3"></i>
                    </button>
                    <!-- Logo -->
                    <div class="flex items-center gap-2 py-2 mx-1">
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_36_4140)">
                                <rect width="43" height="43" rx="21.5" fill="#3DCBB1" />
                                <rect x="4.70312" y="4.70312" width="33.5938" height="33.5938" rx="16.7969"
                                    fill="#3DCBB1" />
                                <path
                                    d="M29.7594 23.8086C34.2105 23.8086 36.9199 26.6728 36.9199 31.9367V43.7031H29.7594V32.9043C29.7594 31.5883 29.1401 30.6981 27.7854 30.6981C26.1211 30.6981 25.5018 32.0141 25.5018 33.5623V43.7031H18.3413V32.9043C18.3413 31.5883 17.722 30.6981 16.3673 30.6981C14.703 30.6981 14.0837 32.0141 14.0837 33.5623V43.7031H6.92322V24.3504H14.0837V26.1696C15.2062 24.7762 16.9866 23.8086 19.3476 23.8086C21.5539 23.8086 23.1795 24.6214 24.1858 26.2083C25.4244 24.7762 27.1661 23.8086 29.7594 23.8086Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_36_4140">
                                    <rect width="43" height="43" rx="21.5" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span class="font-extrabold text-surface-dark">MyCourse.io</span>
                    </div>
                </div>
                <div class="flex">
                    <!-- Button Cart -->
                    <div class="flex items-center justify-end ml-auto ">
                        <button class=" ml-3 mr-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.99609 3C1.99609 3.55 2.44609 4 2.99609 4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H18.9961C19.5461 17 19.9961 16.55 19.9961 16C19.9961 15.45 19.5461 15 18.9961 15H7.99609L9.09609 13H16.5461C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.53609 2.57C5.37609 2.22 5.01609 2 4.63609 2H2.99609C2.44609 2 1.99609 2.45 1.99609 3ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM16.0061 20C16.0061 18.9 16.8961 18 17.9961 18C19.0961 18 19.9961 18.9 19.9961 20C19.9961 21.1 19.0961 22 17.9961 22C16.8961 22 16.0061 21.1 16.0061 20Z"
                                    fill="#1B1B1B" />
                            </svg>
                        </button>
                    </div>
                    <button class="ml-5">
                        <i class="fa-solid fa-magnifying-glass text-lg"></i>
                    </button>
                </div>
            </div>
            <div class="border-t border-gray-200"></div>
            <div class=" mt-14 ml-5 mr-5">
                <p class="text-gray-500 font-base text-lg mb-8">
                    Join us and get more benefits. We promise to keep your data safely.
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

                <p class="text-gray-900 font-base text-medium text-center mt-3 mb-8">
                    or you can
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
                        Create Account
                    </button>
                </div>

                <!-- Button Need an Account? Sign Up -->
                <div class="flex justify-center mr-3 mt-14">
                    <p class="text-base mr-2 text-gray-500">Already have an Account?</p>
                    <button class="text-base font-bold mr-2 text-teal-500">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    router.push({ path: '/homepage', query: { modalSignUp: 'true' } });
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>