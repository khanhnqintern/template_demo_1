<template>
    <div>
        <!-- Mobile View -->
        <div class="lg:hidden">
            <img :src="currentImage" alt="" class="w-full h-auto">
        </div>

        <!-- Desktop View -->
        <div class="hidden lg:flex relative flex-col justify-center items-center mt-5">
            <div class="bg-white shadow-md rounded-md relative overflow-hidden">
                <button @click="prevSlide"
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-transparent bg-opacity-50 text-white rounded-md">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <img :src="slides[currentSlide].image" alt="" class="w-full h-auto rounded-md">
                <button @click="nextSlide"
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-transparent bg-opacity-50 text-white rounded-md">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div class="absolute bottom-4 left-0 right-0 flex justify-center">
                <div class="flex space-x-2">
                    <span v-for="(slide, index) in slides" :key="index"
                        :class="{ 'bg-blue-500': currentSlide === index, 'bg-gray-300': currentSlide !== index }"
                        class="h-2 w-2 rounded-full cursor-pointer" @click="setSlide(index)"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentSlide = ref(0);
const slides = [
    {
        image: '/src/assets/slide1.png'
    },
    {
        image: '/src/assets/slide2.png'
    }
];

const currentImage = computed(() => slides[currentSlide.value].image);

const prevSlide = () => {
    currentSlide.value = (currentSlide.value === 0) ? slides.length - 1 : currentSlide.value - 1;
};

const nextSlide = () => {
    currentSlide.value = (currentSlide.value === slides.length - 1) ? 0 : currentSlide.value + 1;
};

const setSlide = (index) => {
    currentSlide.value = index;
};
</script>

<style scoped>
/* Make buttons semi-transparent */
button {
    background-color: rgba(0, 0, 0, 0.5);
    /* Black with 50% opacity */
    border: none;
    /* Remove border */
    color: white;
    /* White text for the icons */
    padding: 10px;
    /* Some padding for better click area */
    border-radius: 50%;
    /* Round buttons */
    transition: background-color 0.3s ease;
    /* Smooth transition */
}

button:hover {
    background-color: rgba(0, 0, 0, 0.7);
    /* Darker on hover */
}

/* Adjust the icon size */
button i {
    font-size: 1.5em;
}
</style>
