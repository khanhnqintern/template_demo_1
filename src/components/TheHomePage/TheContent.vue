<template>
    <div class="">
        <nav class="lg:hidden justify-start flex overflow-auto py-2 gap-10">
            <a href="#" class=" font-bold text-lg text-teal-400 border-b-2 border-teal-400">All</a>
            <a href="#" class="font-normal text-lg text-slate-700 ">Illustrator</a>
            <a href="#" class="font-normal text-lg text-slate-700">Photoshop</a>
            <a href="#" class="font-normal text-lg text-slate-700">UI Desiign</a>
        </nav>
        <TheSlide/>
        <nav class="hidden lg:flex justify-start overflow-x-auto py-2 w-full flex-nowrap">
            <button class="font-normal text-nowrap text-lg text-teal-400 border-2 border-teal-400 rounded-lg px-2 py-1 ml-1 mr-1 mt-3">All Recommendation</button>
            <button class="font-normal text-nowrap text-lg text-gray-500 border-2 border-gray-400 rounded-lg px-2 py-1 ml-1 mr-1 mt-3">Adobe Illustrator</button>
            <button class="font-normal text-nowrap text-lg text-gray-500 border-2 border-gray-400 rounded-lg px-2 py-1 ml-1 mr-1 mt-3">Adobe Photoshop</button>
            <button class="font-normal text-nowrap text-lg text-gray-500 border-2 border-gray-400 rounded-lg px-2 py-1 ml-1 mr-1 mt-3">UI Desiign</button>
            <button class="font-normal text-nowrap text-lg text-gray-500 border-2 border-gray-400 rounded-lg px-2 py-1 ml-1 mr-1 mt-3">Web Programming</button>
        </nav>
        <div class="mt-7">
            <p class="text-2xl font-bold">More from Kitani Studio</p>
            <p class="mt-1 font-light text-lg">We know the best things for You. Top picks for You.</p>
            <!-- Card 1 -->
            <div class="flex lg:flex-wrap gap-5 mt-5 overflow-x-auto lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4">
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
        <div class="mt-7">
            <p class="text-2xl font-bold">Trending Course</p>
            <p class="mt-1 font-light text-lg">We know the best things for You. Top picks for You.</p>
            <!-- Card 1 -->
            <div class="flex lg:flex-wrap gap-5 mt-5 overflow-x-auto lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4">
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
            <!-- Card 2 -->
            <div class="flex lg:flex-wrap gap-5 mt-5 overflow-x-auto lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4">
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
        <div class="mt-7">
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
    </div>
</template>
<script setup>
import { ref } from 'vue';
import TheSlide from './TheSlide.vue';
import cardsData from '@/assets/cardsData.json';
import popularInstructor from '@/assets/popularInstructor.json';

const cards = ref(cardsData);

const popular = ref(popularInstructor);

</script>
