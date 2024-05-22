<template>
    <div class="container flex mx-auto">
        <!-- menu 3 dashes -->
        <button v-if="routeName === 'homepage'" class="block lg:hidden ml-5">
            <i class="fa-solid fa-bars text-teal-500 text-lg"></i>
        </button>
        <!-- come back -->
        <button
            v-if="routeName === 'login' || routeName === 'signup' || routeName === 'search' || routeName === 'mycourse' || routeName === 'account'"
            @click="$router.back()" class="block lg:hidden ml-5">
            <i class="fa-solid fa-arrow-left text-xl mr-3"></i>
        </button>

        <!-- Logo -->
        <div class="flex items-center gap-2 py-2 mx-1 mr-auto">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_36_4140)">
                    <rect width="43" height="43" rx="21.5" fill="#3DCBB1" />
                    <rect x="4.70312" y="4.70312" width="33.5938" height="33.5938" rx="16.7969" fill="#3DCBB1" />
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

        <!-- Input Search -->
        <div
            class="hidden rounded-xl w-[400px] mx-auto lg:inline-flex self-center bg-gray-100 items-center hover:border-sky-300 border border-gray-300 justify-center">
            <input class=" relative grow w-1/2 mt-1 bg-transparent p-2" type="text" placeholder="Search for course">
            <i class=" fa-solid fa-magnifying-glass text-lg"></i>
        </div>

        <!-- Button Search -->
        <button
            v-if="routeName === 'login' || routeName === 'signup' || routeName === 'search' || routeName === 'account'"
            class="ml-auto lg:hidden">
            <i class=" ml-3 mr-3 fa-solid fa-magnifying-glass text-lg"></i>
        </button>

        <!-- Become Instructor -->
        <div class="flex items-center justify-end ">
            <a class="hidden lg:flex ml-3 mr-3 ">Become Instructor</a>
        </div>

        <!-- Button Cart -->
        <div v-if="routeName === 'homepage' || routeName === 'detail' || routeName === 'login' || routeName === 'signup' || routeName === 'search' || routeName === 'mycourse' || routeName === 'account'"
            class="flex items-center justify-end">
            <button class=" ml-3 mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M1.99609 3C1.99609 3.55 2.44609 4 2.99609 4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H18.9961C19.5461 17 19.9961 16.55 19.9961 16C19.9961 15.45 19.5461 15 18.9961 15H7.99609L9.09609 13H16.5461C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.53609 2.57C5.37609 2.22 5.01609 2 4.63609 2H2.99609C2.44609 2 1.99609 2.45 1.99609 3ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM16.0061 20C16.0061 18.9 16.8961 18 17.9961 18C19.0961 18 19.9961 18.9 19.9961 20C19.9961 21.1 19.0961 22 17.9961 22C16.8961 22 16.0061 21.1 16.0061 20Z"
                        fill="#1B1B1B" />
                </svg>
            </button>
        </div>

        <!-- Button Login -->
        <div v-if="routeName === 'homepage'" class="flex items-center justify-end ">
            <button @click="showModalLogin"
                class="hover:border-sky-300 hidden lg:flex ml-3 mr-3 items-center px-4 py-2 font-bold border-2 border-black rounded-2xl ">
                <span>Login</span>
            </button>
        </div>

        <!-- Button Sign Up -->
        <div v-if="routeName === 'homepage'" class="flex items-center justify-end ">
            <button @click="showModalSignUp"
                class=" border-2 hover:border-sky-300 hidden lg:flex bg-teal-400 ml-3 items-center px-4 py-2 font-bold rounded-2xl ">
                <span class="text-white ">Sign Up</span>
            </button>
        </div>

        <!-- notification bell -->
        <button
            v-if="routeName === 'homepage' || routeName === 'detail' || routeName === 'search' || routeName === 'mycourse' || routeName === 'account'"
            class="mr-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.0013 8.95833V13.125L16.0763 14.2C16.6013 14.725 16.2263 15.625 15.4846 15.625H4.5096C3.76793 15.625 3.40126 14.725 3.92626 14.2L5.00126 13.125V8.95833C5.00126 6.39167 6.3596 4.25833 8.75126 3.69167V3.125C8.75126 2.43333 9.3096 1.875 10.0013 1.875C10.6929 1.875 11.2513 2.43333 11.2513 3.125V3.69167C13.6346 4.25833 15.0013 6.4 15.0013 8.95833ZM11.6679 16.4583C11.6679 17.375 10.9179 18.125 10.0013 18.125C9.07626 18.125 8.3346 17.375 8.3346 16.4583H11.6679Z"
                    fill="#1B1B1B" fill-opacity="0.6" />
            </svg>
        </button>

        <!-- Button Account -->
        <router-link :to="{ name: 'account' }"
            v-if="routeName === 'search' || routeName === 'mycourse' || routeName === 'account' || routeName === 'detail'"
            class="hidden lg:flex px-2 items-center">
            <button @click="Account">
                <img class="max-w-10" src="/src/assets/avatar.png" alt="">
            </button>
        </router-link>

        <!-- menu 3 dashes -->
        <div v-if="routeName === 'mycourse'" class="lg:hidden items-center flex mr-3 ">
            <button>
                <img src="/src/assets/3gach.png" alt="">
            </button>
        </div>

    </div>
    <div class="border-t border-gray-200"></div>

    <!-- Modal Login -->
    <div v-if="modalLogin" class="hidden lg:flex fixed z-20 inset-0 bg-black bg-opacity-50 items-center justify-center">
        <div class="bg-white rounded-xl relative" style="width: 800px; height: 550px;">
            <!-- Your login form here -->
            <div class="flex">
                <div class=" w-1/2">
                    <img class="relative" src="/src/assets/imageLogin.png" alt="">
                    <div class=" flex flex-col">
                        <div class="absolute bottom-5 left-5 flex">
                            <div class="w-2/6">
                                <img class="mt-1 min-w-14 h-14 rounded-full border-4"
                                    src="https://s3-alpha-sig.figma.com/img/b896/4af0/c42901c04884c10443121741bce1ef5b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mNgCrX~SbdCKtceVJfThdgfnc7cdJLs1z8aTEMaq37ceia-ElB-WqUaF23eZbIFTSBGaKJbLNhr6tQxem3Lxmg5UGvY3sDaPWpnvLwAnGYRkN~lZ0iL1HI-~cfpvkfXUSomJ2tw8-SVK8ry0hENzhTpRas19xZ1O9rJElfkld2J-8iVjxpZ06Nq4ixkpPG9R0fv4BJa4s03j-Qa2iym4EUsAQGqDiJUoMk6R4bR-fov8Mlkg3j8wFzsoT9FF-VX1LZGJ2gDLmkuV6HUZhBoKGdeX7I59t-0tWNvLkvh2UKMiXCU-35IiJ8TCpArgWX6TYM~1FVNlMaLSBmukPyXCcg__"
                                    alt="">
                            </div>
                            <div class="w-full ml-3 mt-1">
                                <p class=" text-white text-xl font-bold ">
                                    Jane Kitani
                                </p>
                                <p class="text-gray-300 text-base font-normal">
                                    Graphic Designer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-1/2">
                    <div class="mx-auto max-w-[504px]">
                        <!-- Logo -->
                        <div class="flex items-center mt-3 ml-5 gap-2 py-2 mx-1">
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
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
                        <div class=" ml-5 mr-5">
                            <p class="text-gray-500 font-base text-lg mb-4">
                                Join us and get more benefits. We promise to keep your data safely.
                            </p>

                            <!-- Input mail -->
                            <div class="mb-4">
                                <div class="relative">
                                    <input type="email"
                                        class=" w-full h-10 mr-auto bg-gray-300 opacity-30 rounded pl-2 pr-10 placeholder-gray-900"
                                        placeholder="Email Address">
                                    <i
                                        class="fa-regular fa-envelope absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900"></i>
                                </div>
                            </div>

                            <!-- input password -->
                            <div class="mb-4">
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
                                    class=" text-center text-white w-full border-2 hover:border-sky-300 bg-teal-400 items-center px-36 py-2 font-bold rounded-2xl ">
                                    Login
                                </button>
                            </div>

                            <p class="text-gray-900 font-base text-medium text-center mb-3">
                                or you can
                            </p>

                            <!-- Button Facebook -->
                            <div class="flex items-center justify-center mb-3">
                                <button
                                    class=" w-full border-2 hover:border-sky-300  bg-sky-700 items-center px-14 py-2 font-bold rounded-2xl ">
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
                                    class=" w-full border-2 hover:border-sky-300  bg-black items-center px-16 py-2 font-bold rounded-2xl ">
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
                                    class=" w-full border-2 hover:border-sky-300 bg-white items-center px-16 py-2 font-bold rounded-2xl ">
                                    <div class=" flex justify-center">
                                        <img style="width: 21px;" src="/src/assets/goole.png" alt="">
                                        <span class="text-gray-800 ml-2">
                                            Continue with Google
                                        </span>
                                    </div>
                                </button>
                            </div>

                            <!-- Button Need an Account? Sign Up -->
                            <div class="flex justify-center mt-4">
                                <p class="text-base mr-2 text-gray-500">Need an Account?</p>
                                <button class="text-base font-bold mr-2 text-teal-500">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Close button -->
            <button @click="turnOffModalLogin" class="absolute top-0 right-0 mt-4 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>

    <!-- Modal Sign Up -->
    <div v-if="modalSignUp"
        class="hidden lg:flex fixed z-20 inset-0 bg-black bg-opacity-50 items-center justify-center">
        <div class="bg-white rounded-xl relative" style="width: 800px; height: 550px;">
            <!-- Your login form here -->
            <div class="flex">
                <div class=" w-1/2">
                    <img class="relative" src="/src/assets/imageLogin.png" alt="">
                    <div class=" flex flex-col">
                        <div class="absolute bottom-5 left-5 flex">
                            <div class="w-2/6">
                                <img class="mt-1 min-w-14 h-14 rounded-full border-4"
                                    src="https://s3-alpha-sig.figma.com/img/b896/4af0/c42901c04884c10443121741bce1ef5b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mNgCrX~SbdCKtceVJfThdgfnc7cdJLs1z8aTEMaq37ceia-ElB-WqUaF23eZbIFTSBGaKJbLNhr6tQxem3Lxmg5UGvY3sDaPWpnvLwAnGYRkN~lZ0iL1HI-~cfpvkfXUSomJ2tw8-SVK8ry0hENzhTpRas19xZ1O9rJElfkld2J-8iVjxpZ06Nq4ixkpPG9R0fv4BJa4s03j-Qa2iym4EUsAQGqDiJUoMk6R4bR-fov8Mlkg3j8wFzsoT9FF-VX1LZGJ2gDLmkuV6HUZhBoKGdeX7I59t-0tWNvLkvh2UKMiXCU-35IiJ8TCpArgWX6TYM~1FVNlMaLSBmukPyXCcg__"
                                    alt="">
                            </div>
                            <div class="w-full ml-3 mt-1">
                                <p class=" text-white text-xl font-bold ">
                                    Jane Kitani
                                </p>
                                <p class="text-gray-300 text-base font-normal">
                                    Graphic Designer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-1/2">
                    <div class="mx-auto max-w-[504px]">
                        <!-- Logo -->
                        <div class="flex items-center mt-3 ml-5 gap-2 py-2 mx-1">
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
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
                        <div class=" ml-5 mr-5">
                            <p class="text-gray-500 font-base text-lg mb-4">
                                Join us and get more benefits. We promise to keep your data safely.
                            </p>

                            <!-- Button Facebook -->
                            <div class="flex items-center justify-center mb-2">
                                <button
                                    class=" w-full border-2 hover:border-sky-300  bg-sky-700 items-center px-14 py-2 font-bold rounded-2xl ">
                                    <div class=" flex justify-center">
                                        <img style="width: 21px;" src="/src/assets/facebook.png" alt="">
                                        <span class="text-white ml-2">
                                            Sign Up with Facebook
                                        </span>
                                    </div>
                                </button>
                            </div>

                            <!-- Button Apple -->
                            <div class="flex items-center justify-center mb-2">
                                <button
                                    class=" w-full border-2 hover:border-sky-300  bg-black items-center px-16 py-2 font-bold rounded-2xl ">
                                    <div class=" flex justify-center">
                                        <img style="width: 21px;" src="/src/assets/apple.png" alt="">
                                        <span class="text-white ml-2">
                                            Sign Up with Apple
                                        </span>
                                    </div>
                                </button>
                            </div>

                            <!-- Button Google -->
                            <div class="flex items-center justify-center">
                                <button
                                    class=" w-full border-2 hover:border-sky-300 bg-white items-center px-16 py-2 font-bold rounded-2xl ">
                                    <div class=" flex justify-center">
                                        <img style="width: 21px;" src="/src/assets/goole.png" alt="">
                                        <span class="text-gray-800 ml-2">
                                            Sign Up with Google
                                        </span>
                                    </div>
                                </button>
                            </div>

                            <p class="text-gray-900 font-base text-medium text-center mt-1 mb-3">
                                or you can
                            </p>

                            <!-- Input mail -->
                            <div class="mb-4">
                                <div class="relative">
                                    <input type="email"
                                        class=" w-full h-10 mr-auto bg-gray-300 opacity-30 rounded pl-2 pr-10 placeholder-gray-900"
                                        placeholder="Email Address">
                                    <i
                                        class="fa-regular fa-envelope absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900"></i>
                                </div>
                            </div>

                            <!-- input password -->
                            <div class="mb-4">
                                <div class="relative">
                                    <input type="email"
                                        class=" w-full h-10 mr-auto bg-gray-300 opacity-30 rounded pl-2 pr-10 placeholder-gray-900"
                                        placeholder="Password">
                                    <i
                                        class="fa-solid fa-lock absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900"></i>
                                </div>
                            </div>

                            <!-- Button Create Account -->
                            <div class="flex items-center justify-center mb-2">
                                <button
                                    class=" text-center text-white w-full border-2 hover:border-sky-300 bg-teal-400 items-center px-16 py-2 font-bold rounded-2xl ">
                                    Create Account
                                </button>
                            </div>

                            <!-- Button Need an Account? Sign Up -->
                            <div class="flex justify-center mt-4">
                                <p class="text-base mr-2 text-gray-500">Already have an Account?</p>
                                <button class="text-base font-bold mr-2 text-teal-500">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Close button -->
            <button @click="turnOffModalSignUp" class="absolute top-0 right-0 mt-4 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';


// login
const modalLogin = ref(false);
const router = useRouter();
const route = useRoute()
const routeName = computed(() => route.name);

const showModalLogin = () => {
    if (window.innerWidth >= 1024) {
        modalLogin.value = true;
    } else {
        router.push({ name: 'login' });
    }
};

const turnOffModalLogin = () => {
    modalLogin.value = false;
};

// Sign Up
const modalSignUp = ref(false);

const showModalSignUp = () => {
    if (window.innerWidth >= 1024) {
        modalSignUp.value = true;
    } else {
        router.push({ name: 'signup' });
    }
};

const turnOffModalSignUp = () => {
    modalSignUp.value = false;
};

const handleResize = () => {
    if (window.innerWidth < 1024 && modalLogin.value) {
        modalLogin.value = false;
        router.push({ name: 'login' });
    }
    if (window.innerWidth < 1024 && modalSignUp.value) {
        modalSignUp.value = false;
        router.push({ name: 'signup' });
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>