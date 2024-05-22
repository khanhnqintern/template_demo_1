<template>
    <div class="ml-3 mr-3">
        <div class="hidden lg:block">
            <TheSlide />
        </div>
        <nav class="lg:hidden justify-between flex overflow-auto py-2 gap-10">
            <a href="#" class=" font-bold text-lg text-teal-400 border-b-2 border-teal-400">All</a>
            <a href="#" class="font-normal text-lg text-slate-700 ">Courses</a>
            <a href="#" class="font-normal text-lg text-slate-700">Wishlist</a>
            <a href="#" class="font-normal text-lg text-slate-700">Completed</a>
        </nav>

        <div class="border-t border-gray-200"></div>
        <div class="mt-5">
            <div class="flex justify-between">
                <div>
                    <p class="hidden lg:block font-bold text-xl">Popular Search</p>
                    <p class="hidden lg:block mt-1 font-light text-base">We know the best things for You. Top picks for
                        You.
                    </p>
                </div>
                <div class="hidden lg:flex items-center">
                    <button
                        class=" w-[180px] h-[40px] font-normal text-nowrap text-sm  border rounded border-gray-300 ml-1 mr-1">All
                        Rated
                        <select name="" id=""></select>
                    </button>
                    <button
                        class=" w-[180px] h-[40px] font-normal text-nowrap text-sm  border rounded border-gray-300 ml-1 mr-1">Recently
                        added
                        <select name="" id=""></select>
                    </button>
                </div>
            </div>
            <!-- Card 1 -->
            <div class="grid grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
                <router-link :to="{ name: 'detail' }" v-for="(card, index) in cards" :key="index"
                    class="max-w-72 mb-4 p-2">
                    <img class=" rounded-lg object-cover" :src="card.image" alt="Placeholder">
                    <div class="py-4">
                        <div class="font-bold text-xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{{
                            card.title }}</div>
                        <div class="flex items-center">
                            <i class="fa-regular fa-user mr-2"></i>
                            <p class="text-green-300">{{ card.author }}</p>
                        </div>
                        <p class="text-gray-700 text-base line-clamp-2">
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
                </router-link>
            </div>
            <div class="grid grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
                <router-link :to="{ name: 'detail' }" v-for="(card, index) in cards" :key="index"
                    class="max-w-72 mb-4 p-2">
                    <img class=" rounded-lg object-cover" :src="card.image" alt="Placeholder">
                    <div class="py-4">
                        <div class="font-bold text-xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{{
                            card.title }}</div>
                        <div class="flex items-center">
                            <i class="fa-regular fa-user mr-2"></i>
                            <p class="text-green-300">{{ card.author }}</p>
                        </div>
                        <p class="text-gray-700 text-base line-clamp-2">
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
                </router-link>
            </div>

            <div class=" justify-between w-[420px] mx-auto hidden lg:flex">
                <button>
                    <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <rect x="40.5" y="36.5" width="40" height="36" rx="2.5" transform="rotate(-180 40.5 36.5)"
                                stroke="#1B1B1B" stroke-opacity="0.6" />
                            <path
                                d="M23 24.2894C23.39 23.8994 23.39 23.2694 23 22.8794L19.12 18.9994L23 15.1194C23.39 14.7294 23.39 14.0994 23 13.7094C22.61 13.3194 21.98 13.3194 21.59 13.7094L17 18.2994C16.61 18.6894 16.61 19.3194 17 19.7094L21.59 24.2994C21.97 24.6794 22.61 24.6794 23 24.2894Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </g>
                    </svg>

                </button>
                <div class="flex">
                    <button class="px-1">
                        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.500122" width="37" height="36" rx="11.5" fill="#F9F9F9"
                                fill-opacity="0.9" />
                            <rect x="0.5" y="0.500122" width="37" height="36" rx="11.5" stroke="#3DCBB1" />
                            <path
                                d="M18.7534 24.0001V15.9431H16.8004V15.0961C17.4071 15.0961 17.8784 15.0518 18.2144 14.9631C18.5504 14.8745 18.7884 14.7391 18.9284 14.5571C19.0731 14.3751 19.1524 14.1488 19.1664 13.8781H20.0904V24.0001H18.7534Z"
                                fill="#3DCBB1" />
                        </svg>
                    </button>
                    <button class="px-1">
                        <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.500122" width="40" height="36" rx="11.5" stroke="#1B1B1B"
                                stroke-opacity="0.6" />
                            <path
                                d="M17.1981 24.0001V23.2091V22.7961C17.1981 22.2781 17.2937 21.8301 17.4851 21.4521C17.6811 21.0741 17.9377 20.7451 18.2551 20.4651C18.5771 20.1805 18.9271 19.9261 19.3051 19.7021C19.6877 19.4781 20.0681 19.2635 20.4461 19.0581C20.8287 18.8481 21.1787 18.6311 21.4961 18.4071C21.8134 18.1785 22.0677 17.9218 22.2591 17.6371C22.4551 17.3478 22.5531 17.0071 22.5531 16.6151C22.5531 16.1018 22.3711 15.6841 22.0071 15.3621C21.6477 15.0401 21.1601 14.8791 20.5441 14.8791C19.8814 14.8791 19.3494 15.0658 18.9481 15.4391C18.5467 15.8125 18.3204 16.3095 18.2691 16.9301H16.9811C16.9951 16.3468 17.1397 15.8148 17.4151 15.3341C17.6904 14.8488 18.0941 14.4615 18.6261 14.1721C19.1581 13.8828 19.8137 13.7381 20.5931 13.7381C21.2697 13.7381 21.8577 13.8595 22.3571 14.1021C22.8564 14.3401 23.2414 14.6761 23.5121 15.1101C23.7874 15.5395 23.9251 16.0411 23.9251 16.6151C23.9251 17.1378 23.8294 17.5858 23.6381 17.9591C23.4467 18.3325 23.1924 18.6568 22.8751 18.9321C22.5624 19.2028 22.2194 19.4455 21.8461 19.6601C21.4727 19.8748 21.0971 20.0825 20.7191 20.2831C20.3411 20.4791 19.9957 20.6868 19.6831 20.9061C19.3704 21.1208 19.1184 21.3681 18.9271 21.6481C18.7357 21.9281 18.6401 22.2618 18.6401 22.6491V22.8521H23.9811V24.0001H17.1981Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                    </button>
                    <button class="px-1">
                        <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.500122" width="40" height="36" rx="11.5" stroke="#1B1B1B"
                                stroke-opacity="0.6" />
                            <path
                                d="M16.8958 16.8251C16.8958 16.1718 17.0545 15.6165 17.3718 15.1591C17.6892 14.6971 18.1115 14.3448 18.6388 14.1021C19.1708 13.8595 19.7565 13.7381 20.3958 13.7381C21.0958 13.7381 21.7142 13.8408 22.2508 14.0461C22.7875 14.2468 23.2075 14.5408 23.5108 14.9281C23.8142 15.3155 23.9658 15.7891 23.9658 16.3491C23.9658 16.8485 23.8072 17.3011 23.4898 17.7071C23.1725 18.1085 22.6872 18.4235 22.0338 18.6521C22.4772 18.7735 22.8645 18.9508 23.1958 19.1841C23.5272 19.4175 23.7838 19.7045 23.9658 20.0451C24.1478 20.3811 24.2388 20.7685 24.2388 21.2071C24.2388 21.6691 24.1408 22.0845 23.9448 22.4531C23.7535 22.8171 23.4828 23.1275 23.1328 23.3841C22.7828 23.6361 22.3698 23.8298 21.8938 23.9651C21.4178 24.0958 20.8998 24.1588 20.3398 24.1541C19.6445 24.1495 19.0308 24.0211 18.4988 23.7691C17.9715 23.5171 17.5562 23.1648 17.2528 22.7121C16.9495 22.2548 16.7862 21.7135 16.7628 21.0881H18.0578C18.1558 21.7181 18.4125 22.2011 18.8278 22.5371C19.2432 22.8731 19.7635 23.0411 20.3888 23.0411C20.8835 23.0411 21.3152 22.9641 21.6838 22.8101C22.0525 22.6515 22.3372 22.4345 22.5378 22.1591C22.7385 21.8838 22.8388 21.5618 22.8388 21.1931C22.8388 20.7871 22.7268 20.4441 22.5028 20.1641C22.2788 19.8841 21.9732 19.6718 21.5858 19.5271C21.1985 19.3778 20.7668 19.3008 20.2908 19.2961L19.3808 19.2751V18.1761L20.2488 18.1551C20.6922 18.1458 21.0888 18.0618 21.4388 17.9031C21.7888 17.7398 22.0642 17.5275 22.2648 17.2661C22.4702 17.0001 22.5728 16.7085 22.5728 16.3911C22.5728 16.1111 22.4865 15.8521 22.3138 15.6141C22.1412 15.3715 21.8915 15.1778 21.5648 15.0331C21.2428 14.8885 20.8508 14.8161 20.3888 14.8161C20.0248 14.8161 19.6772 14.8885 19.3458 15.0331C19.0145 15.1731 18.7415 15.3901 18.5268 15.6841C18.3122 15.9781 18.1978 16.3585 18.1838 16.8251H16.8958Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                    </button>
                    <button class="px-1">
                        <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.500122" width="42" height="36" rx="11.5" stroke="#1B1B1B"
                                stroke-opacity="0.6" />
                            <path
                                d="M16.8218 24.0001V22.3481H18.3618V24.0001H16.8218ZM20.6909 24.0001V22.3481H22.2309V24.0001H20.6909ZM24.56 24.0001V22.3481H26.1V24.0001H24.56Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                    </button>
                    <button class="px-1">
                        <svg width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.500122" width="49" height="36" rx="11.5" stroke="#1B1B1B"
                                stroke-opacity="0.6" />
                            <path
                                d="M20.2076 24.1541C19.6476 24.1541 19.125 24.0491 18.6396 23.8391C18.159 23.6245 17.7553 23.3211 17.4286 22.9291C17.1066 22.5371 16.9083 22.0681 16.8336 21.5221H18.0936C18.2103 21.9841 18.453 22.3598 18.8216 22.6491C19.1903 22.9338 19.6383 23.0761 20.1656 23.0761C20.763 23.0761 21.274 22.9198 21.6986 22.6071C22.128 22.2945 22.4476 21.8115 22.6576 21.1581C22.8676 20.5048 22.947 19.6671 22.8956 18.6451C22.779 18.9998 22.5946 19.3125 22.3426 19.5831C22.0906 19.8491 21.7873 20.0591 21.4326 20.2131C21.078 20.3671 20.686 20.4441 20.2566 20.4441C19.5893 20.4441 19.0013 20.3135 18.4926 20.0521C17.984 19.7908 17.5873 19.4175 17.3026 18.9321C17.0226 18.4468 16.8826 17.8658 16.8826 17.1891C16.8826 16.5125 17.0226 15.9151 17.3026 15.3971C17.5826 14.8791 17.984 14.4731 18.5066 14.1791C19.0293 13.8851 19.65 13.7381 20.3686 13.7381C21.1526 13.7381 21.8316 13.9411 22.4056 14.3471C22.9796 14.7485 23.423 15.3271 23.7356 16.0831C24.0483 16.8345 24.2046 17.7375 24.2046 18.7921C24.2046 19.9261 24.0483 20.8921 23.7356 21.6901C23.4276 22.4881 22.975 23.0995 22.3776 23.5241C21.785 23.9441 21.0616 24.1541 20.2076 24.1541ZM20.3966 19.3451C20.77 19.3451 21.1246 19.2588 21.4606 19.0861C21.7966 18.9135 22.0696 18.6848 22.2796 18.4001C22.4943 18.1108 22.6016 17.7958 22.6016 17.4551C22.6063 16.9325 22.5176 16.4728 22.3356 16.0761C22.1536 15.6748 21.8946 15.3621 21.5586 15.1381C21.2226 14.9095 20.8306 14.7951 20.3826 14.7951C19.972 14.7951 19.608 14.8931 19.2906 15.0891C18.978 15.2851 18.7306 15.5581 18.5486 15.9081C18.3713 16.2581 18.2826 16.6641 18.2826 17.1261C18.2826 17.8028 18.4623 18.3418 18.8216 18.7431C19.181 19.1445 19.706 19.3451 20.3966 19.3451ZM29.3239 13.7381C29.9726 13.7381 30.5536 13.8455 31.0669 14.0601C31.5803 14.2748 31.9863 14.5875 32.2849 14.9981C32.5836 15.4088 32.7329 15.9081 32.7329 16.4961C32.7329 17.0468 32.5836 17.5088 32.2849 17.8821C31.9909 18.2555 31.6106 18.5401 31.1439 18.7361C31.4846 18.8015 31.8089 18.9601 32.1169 19.2121C32.4296 19.4641 32.6863 19.7698 32.8869 20.1291C33.0876 20.4885 33.1879 20.8641 33.1879 21.2561C33.1879 21.8395 33.0269 22.3481 32.7049 22.7821C32.3876 23.2161 31.9396 23.5545 31.3609 23.7971C30.7823 24.0351 30.1033 24.1541 29.3239 24.1541C28.5493 24.1541 27.8726 24.0351 27.2939 23.7971C26.7153 23.5545 26.2649 23.2161 25.9429 22.7821C25.6256 22.3481 25.4669 21.8395 25.4669 21.2561C25.4669 20.8641 25.5649 20.4885 25.7609 20.1291C25.9616 19.7698 26.2183 19.4641 26.5309 19.2121C26.8436 18.9601 27.1703 18.8015 27.5109 18.7361C27.0489 18.5401 26.6663 18.2555 26.3629 17.8821C26.0643 17.5088 25.9149 17.0468 25.9149 16.4961C25.9149 15.9081 26.0643 15.4088 26.3629 14.9981C26.6616 14.5875 27.0676 14.2748 27.5809 14.0601C28.0989 13.8455 28.6799 13.7381 29.3239 13.7381ZM29.3239 18.1901C29.9399 18.1901 30.4393 18.0385 30.8219 17.7351C31.2093 17.4318 31.4029 17.0095 31.4029 16.4681C31.4029 15.9221 31.2093 15.4928 30.8219 15.1801C30.4346 14.8628 29.9353 14.7041 29.3239 14.7041C28.7126 14.7041 28.2133 14.8628 27.8259 15.1801C27.4386 15.4975 27.2449 15.9268 27.2449 16.4681C27.2449 17.0095 27.4386 17.4318 27.8259 17.7351C28.2133 18.0385 28.7126 18.1901 29.3239 18.1901ZM29.3239 23.1041C30.0753 23.1041 30.6749 22.9361 31.1229 22.6001C31.5709 22.2595 31.7949 21.8091 31.7949 21.2491C31.7949 20.8805 31.6923 20.5515 31.4869 20.2621C31.2863 19.9728 31.0016 19.7465 30.6329 19.5831C30.2643 19.4151 29.8279 19.3311 29.3239 19.3311C28.8246 19.3311 28.3906 19.4151 28.0219 19.5831C27.6579 19.7465 27.3733 19.9728 27.1679 20.2621C26.9673 20.5515 26.8669 20.8805 26.8669 21.2491C26.8669 21.8091 27.0886 22.2595 27.5319 22.6001C27.9799 22.9361 28.5773 23.1041 29.3239 23.1041Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                    </button>
                </div>
                <button>
                    <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="40" height="36" rx="2.5" stroke="#1B1B1B" stroke-opacity="0.6" />
                        <path
                            d="M18 12.7106C17.61 13.1006 17.61 13.7306 18 14.1206L21.88 18.0006L18 21.8806C17.61 22.2706 17.61 22.9006 18 23.2906C18.39 23.6806 19.02 23.6806 19.41 23.2906L24 18.7006C24.39 18.3106 24.39 17.6806 24 17.2906L19.41 12.7006C19.03 12.3206 18.39 12.3206 18 12.7106Z"
                            fill="#1B1B1B" fill-opacity="0.6" />
                    </svg>

                </button>
            </div>
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
import TheSlide from '@/components/TheHomePage/TheSlide.vue'

const cards = ref(cardsData);
</script>
<style>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>