<template>
    <div class="ml-5">
        <div class="hidden lg:flex ">
            <nav class="flex justify-start overflow-x-auto py-2 flex-nowrap w-full">
                <button class="font-normal text-nowrap text-sm  border rounded border-gray-300 px-2 py-1 ml-1 mr-1">All
                    Recommendation
                    <select name="" id=""></select>
                </button>
                <button
                    class="font-normal text-nowrap text-sm  border rounded border-gray-300 px-2 py-1 ml-1 mr-1">Adobe
                    Illustrator
                    <select name="" id=""></select>
                </button>
                <button
                    class="font-normal text-nowrap text-sm  border rounded border-gray-300 px-2 py-1 ml-1 mr-1">Adobe
                    Photoshop
                    <select name="" id=""></select>
                </button>
                <button class="font-normal text-nowrap text-sm  border rounded border-gray-300 px-2 py-1 ml-1 mr-1">UI
                    Desiign
                    <select name="" id=""></select>
                </button>
                <button
                    class="hidden xl:block font-normal text-nowrap text-sm  border rounded border-gray-300 px-2 py-1 ml-1 mr-1">Web
                    Programming
                    <select name="" id=""></select>
                </button>
            </nav>
            <div class="flex w-3/12 py-2 justify-end">
                <button
                    class="w-[150px] xl:w-[180px] h-[40px] border rounded-xl hover:border-sky-300 bg-teal-400 text-white font-bold ml-1 mr-1">Apply
                    Filter</button>
            </div>
        </div>
        <div class="hidden lg:flex justify-start overflow-x-auto py-2 flex-nowrap w-full mt-5">
            <div class="mr-auto">
                <p class="font-light text-lg">Showing 2,312 results of Kitani Studio.</p>
            </div>
            <div>
                <button class=" w-[180px] h-[40px] font-normal text-nowrap text-sm  border rounded border-gray-300 ml-1 mr-1">Top Rated
                    <select name="" id=""></select>
                </button>
            </div>
        </div>
        <div class="mt-7">
            <p class="lg:hidden xl:block text-2xl font-bold">Popular Search</p>
            <p class="lg:hidden xl:block mt-1 font-light text-lg">We know the best things for You. Top picks for You.</p>
            <!-- Card 1 -->
            <div
                class="flex lg:flex-wrap gap-5 mt-5 overflow-x-auto lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4">
                <router-link :to="{ name: 'detail' }" v-for="(card, index) in cards" :key="index"
                    class="max-w-md rounded overflow-hidden mb-4 w-full min-w-72">
                    <img class="w-full rounded-lg object-cover h-40" :src="card.image" alt="Placeholder">
                    <div class="py-4">
                        <div class="font-bold text-xl mb-2">{{ card.title }}</div>
                        <div class=" flex items-center">
                            <i class="fa-regular fa-user mr-2"></i>
                            <p class=" text-green-300">{{ card.author }}</p>
                        </div>
                        <p class="text-gray-700 text-base">
                            {{ card.description }}
                        </p>
                    </div>
                    <div class="flex items-center">
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <span class="ml-2 text-gray-700">(5.0k)</span>
                    </div>
                    <div class="text-left">
                        <p class="text-xl font-bold text-gray-900">$80 <span
                                class="text-base line-through text-gray-500">$100</span></p>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="mt-7 hidden lg:block">
            <p class="lg:hidden text-2xl font-bold">Popular Search</p>
            <p class="lg:hidden mt-1 font-light text-lg">We know the best things for You. Top picks for You.</p>
            <!-- Card 1 -->
            <div
                class="flex lg:flex-wrap gap-5 mt-5 overflow-x-auto lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4">
                <router-link :to="{ name: 'detail' }" v-for="(card, index) in cards" :key="index"
                    class="max-w-md rounded overflow-hidden mb-4 w-full min-w-72">
                    <img class="w-full rounded-lg object-cover h-40" :src="card.image" alt="Placeholder">
                    <div class="py-4">
                        <div class="font-bold text-xl mb-2">{{ card.title }}</div>
                        <div class=" flex items-center">
                            <i class="fa-regular fa-user mr-2"></i>
                            <p class=" text-green-300">{{ card.author }}</p>
                        </div>
                        <p class="text-gray-700 text-base">
                            {{ card.description }}
                        </p>
                    </div>
                    <div class="flex items-center">
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <i class="fa-solid fa-star text-yellow-300"></i>
                        <span class="ml-2 text-gray-700">(5.0k)</span>
                    </div>
                    <div class="text-left">
                        <p class="text-xl font-bold text-gray-900">$80 <span
                                class="text-base line-through text-gray-500">$100</span></p>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="mt-7 lg:hidden">
            <p class="text-2xl font-bold">Popular Instructor</p>
            <p class="mt-1 font-light text-lg">We know the best things for You. Top picks for You.</p>
            <div class="flex lg:flex-wrap mt-5 overflow-x-auto lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
                <!-- Card 1 -->
                <div v-for="(card, index) in popular" :key="index"
                    class="lg:w-72 lg:h-96 gap-0 rounded-tl-3xl px-4 mb-4 w-36 h-64 min-w-48">
                    <div class="relative w-full h-full rounded-[18px] overflow-hidden">
                        <img class="w-full h-full object-cover rounded-[18px]" :src="card.image" alt="Course Image">
                        <div class="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                            <div class="font-bold text-xl text-center">{{ card.name }}</div>
                            <div class="font-light text-sm text-center">{{ card.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="justify-center mt-10 hidden lg:flex">
            <button
            class="border rounded-xl hover:border-sky-300 bg-teal-400 text-white font-bold px-28 py-2 ml-1 mr-1">Show More</button>
        </div>

        <div class="relative mt-20 mb-16 hidden lg:block">
            <img src="/src/assets/image2.png" alt="">
            <div
                class="absolute top-6 left-6 right-6 xl:top-10 xl:left-10 2xl:top-14 2xl:left-10 flex items-start justify-center flex-col ">
                <div class="flex w-full justify-between">
                    <div class="w-1/2">
                        <p class="text-white rounded-md text-lg xl:text-2xl 2xl:text-4xl font-semibold p-1">Join and get
                            amazing discount</p>
                        <p class="text-white rounded-md text-sm xl:text-lg 2xl:text-2xl font-light p-1">With our
                            responsive themes and mobile and desktop apps</p>
                    </div>
                    <div class="w-1/2 flex justify-between">
                        <div class="w-2/3 flex items-center">
                            <input type="text"
                                class="2xl:w-96 2xl:h-11 xl:w-72 xl:h-9 lg:w-52 lg:h-9 bg-gray-100 opacity-30 rounded pl-2 placeholder-gray-900"
                                placeholder="Email Address">
                        </div>
                        <div class="w-1/3 flex items-center">
                            <button
                                class="2xl:w-32 2xl:h-11 xl:w-24 xl:h-9 lg:w-20 lg:h-9 mx-2 bg-teal-400 font-bold rounded-sm">
                                <span class="text-white text-center">Buy</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import cardsData from '@/assets/cardsData.json';
import popularInstructor from '@/assets/popularInstructor.json';

const cards = ref(cardsData);

const popular = ref(popularInstructor);

</script>