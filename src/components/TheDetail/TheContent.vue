<template>
    <div class="mt-10 mb-10">
        <!-- title for computer -->
        <div class="hidden lg:block">
            <p class="text-gray-700 text-sm font-normal mb-1">
                Development / Mobile Engineer
            </p>
            <p class="text-gray-700 font-bold text-2xl mb-1">
                Make Uber Clone App
            </p>
            <div class="flex items-center mb-1">
                <p class="text-red-500 text-sm font-normal">
                    Steven Arnatouvic
                </p>
                <i class="fa-solid fa-star text-yellow-300 ml-7"></i>
                <span class="ml-1 text-gray-700">4.8</span>
                <span class="ml-1 text-gray-500">(1,812 ratings)</span>
            </div>
        </div>

        <!-- Content, vide, price and buy button-->
        <div class="flex justify-between">

            <!-- left content -->
            <div class="xl:w-2/3 xl:mr-5 justify-center items-center">

                <!-- video -->
                <div class="relative w-793 h-445 top-62 left-30">
                    <img class="rounded-lg"
                        src="https://s3-alpha-sig.figma.com/img/d546/037f/77da3b1b22ee3988c2bc8e9328996eee?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0nuOefMlAbht6wE9mGe1PlOKutwOn8PtYOZUmOsk4sJnhhZP2fkjpRZYv9ZMCzmHHhTGH6PmjDZ2KNSRWRWwQRku9nG9rbLurJkp4wqpXoErw9jWxywl2uhQZsFVuMuTjXiEr4jBI~-o10ZoBs~vbdLlgNSp-nJrVBOyLmOdM7~NqNkQFuKrlQ3aF~kaFj8UqILPetskVuMUcTPK4ffPqYR5em59PMCY3ZaxRzaokpeV0YKB9KWWyvY4QbMGR71C5hBWIx16NiH-CeMXnmvf14fiwFQ4iGLO811kgFwM1I73cuDSZUNthmDTgn8wYn7k4bFB8avyW8fMZG552ZP0Q__"
                        alt="">
                    <button @click="$router.back()"
                        class="z-10 lg:hidden absolute top-0 left-0 mt-3 ml-4 bg-transparent border-none">
                        <i class="text-white fa-solid fa-arrow-left"></i>
                    </button>
                    <button
                        class="absolute top-24 left-52 lg:top-36 lg:left-80 transform translate-x-1/2 translate-y-1/2 bg-transparent border-none">
                        <i
                            class="pt-4 pb-4 pl-5 pr-5 rounded-full text-1xl bg-slate-800 text-red-400 lg:bg-slate-500 lg:rounded-lg fa-solid fa-play lg:text-teal-400 lg:text-4xl opacity-80 hover:opacity-100 transition-opacity duration-300"></i>
                    </button>
                </div>

            </div>

            <!-- Right content -->
            <div class="w-1/3 hidden xl:block">
                <!-- price, buy button -->
                <div class="max-w-md rounded overflow-hidden bg-white shadow-md">
                    <p class=" ml-5 mb-2 text-2xl font-bold text-gray-900">US$22.40
                        <span class="text-sm font-medium line-through text-gray-500">$30.13</span>
                    </p>
                    <p class=" ml-5 mb-2 rounded-md text-center text-base font-medium bg-purple-500 text-white"
                        style="width: 75px;">20% OFF</p>
                    <button
                        class="ml-3 mr-3 mt-3 border-2 hover:border-sky-300 bg-teal-400 py-2 font-bold rounded-2xl w-80">
                        <span class="text-white text-center ">Buy</span>
                    </button>
                    <button class="ml-3 mr-5 mt-3 border-2 hover:border-sky-300 py-2 font-bold rounded-2xl w-80">
                        <span class="text-gray-400 text-center">
                            <i class="fa-regular fa-heart"></i>
                            Wishlist</span>
                    </button>
                    <p class="ml-5 mt-5 flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM9 7H7V9H9V7ZM16 9H12C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7H16C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9ZM16 13H12C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 11H9V13H7V11ZM9 15H7V17H9V15ZM5 19H19V5H5V19Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                        <span class=" ml-5 text-sm font-normal text-gray-900">22 Section</span>
                    </p>
                    <p class="ml-5 mt-3 flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21 3.5H3C1.9 3.5 1 4.4 1 5.5V18.5C1 19.6 1.9 20.5 3 20.5H21C22.1 20.5 23 19.6 23 18.5V5.5C23 4.4 22.1 3.5 21 3.5ZM21 17.5C21 18.05 20.55 18.5 20 18.5H12V5.5H20C20.55 5.5 21 5.95 21 6.5V17.5ZM13.75 9H19.25C19.66 9 20 9.34 20 9.75C20 10.16 19.66 10.5 19.25 10.5H13.75C13.34 10.5 13 10.16 13 9.75C13 9.34 13.34 9 13.75 9ZM19.25 11.5H13.75C13.34 11.5 13 11.84 13 12.25C13 12.66 13.34 13 13.75 13H19.25C19.66 13 20 12.66 20 12.25C20 11.84 19.66 11.5 19.25 11.5ZM13.75 14H19.25C19.66 14 20 14.34 20 14.75C20 15.16 19.66 15.5 19.25 15.5H13.75C13.34 15.5 13 15.16 13 14.75C13 14.34 13.34 14 13.75 14Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                        <span class=" ml-5 text-sm font-normal text-gray-900">152 Lectures</span>
                    </p>
                    <p class="ml-5 mt-3 flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21 5.9001H13.41L16.35 2.9601C16.55 2.7601 16.55 2.4501 16.35 2.2501C16.15 2.0501 15.84 2.0501 15.64 2.2501L12 5.8901L8.36 2.2501C8.16 2.0501 7.85 2.0501 7.65 2.2501C7.45 2.4501 7.45 2.7601 7.65 2.9601L10.59 5.9001H3C1.9 5.9001 1 6.7901 1 7.9001V19.9001C1 21.0001 1.9 21.9001 3 21.9001H21C22.1 21.9001 23 21.0001 23 19.9001V7.9001C23 6.7901 22.1 5.9001 21 5.9001ZM10.5 17.0501L14.48 14.7701C15.15 14.3901 15.15 13.4201 14.48 13.0301L10.5 10.7501C9.83 10.3701 9 10.8601 9 11.6201V16.1701C9 16.9401 9.83 17.4301 10.5 17.0501ZM4 19.9001H20C20.55 19.9001 21 19.4501 21 18.9001V8.9001C21 8.3501 20.55 7.9001 20 7.9001H4C3.45 7.9001 3 8.3501 3 8.9001V18.9001C3 19.4501 3.45 19.9001 4 19.9001Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                        <span class=" ml-5 text-sm font-normal text-gray-900">21h 33m total lenghts</span>
                    </p>
                    <p class="ml-5 mt-3 flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14 4.65179V4.45179C14 3.82179 14.63 3.37179 15.21 3.60179C18.6 4.89179 21 8.16179 21 12.0018C21 15.8418 18.6 19.1118 15.21 20.4018C14.63 20.6218 14 20.1818 14 19.5518V19.3518C14 18.9718 14.24 18.6418 14.6 18.5018C17.18 17.4718 19 14.9418 19 12.0018C19 9.06179 17.18 6.53179 14.6 5.50179C14.25 5.36179 14 5.03179 14 4.65179ZM3 10.0018V14.0018C3 14.5518 3.45 15.0018 4 15.0018H7L10.29 18.2918C10.92 18.9218 12 18.4718 12 17.5818V6.41179C12 5.52179 10.92 5.07179 10.29 5.70179L7 9.00179H4C3.45 9.00179 3 9.45179 3 10.0018ZM16.5 12.0018C16.5 10.2318 15.48 8.71179 14 7.97179V16.0218C15.48 15.2918 16.5 13.7718 16.5 12.0018Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                        <span class=" ml-5 text-sm font-normal text-gray-900">English</span>
                    </p>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="flex ml-3 mt-2 mr-3 lg:ml-0 lg:mt-10 lg:mr-0">

            <!-- Left Content -->
            <div class="lg:w-2/3 w-full mr-5">

                <!-- title for phone, description, comments -->
                <div class=" block lg:hidden">
                    <p class="text-gray-700 font-bold text-lg mb-1">
                        Make Uber Clone App
                    </p>
                    <p class="text-teal-500 text-sm font-normal">
                        Steven Arnatouvic
                    </p>
                    <div class="flex mt-2 justify-between">
                        <div class="">
                            <p class="text-lg font-bold text-gray-900">US$22.40</p>
                            <div class="flex">
                                <span class="text-lg font-medium  text-gray-500">$30.13</span>
                                <p class="ml-2 rounded-md flex items-center justify-center text-sm font-medium bg-purple-500 text-white"
                                    style="width: 40px;">
                                    20%</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex">
                                <i class="ml-auto text-lg fa-solid fa-star text-yellow-300"></i>
                                <span class="text-lg font-bold text-gray-700">4.8</span>
                            </div>
                            <div>
                                <span class="ml-1 text-gray-500">(1,812 ratings)</span>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Description, Courses, Review -->
                <div>
                    <nav class="flex mt-5">
                        <a href="#" class="font-normal text-lg mr-10 py-2 text-slate-700">Description</a>
                        <a href="#"
                            class="font-bold text-lg mr-10 py-2 text-slate-700 border-b-2 border-teal-400 lg:border-red-700">Courses</a>
                        <a href="#" class="font-normal text-lg mr-10 py-2 text-slate-700">Review</a>
                    </nav>
                    <div class="block lg:hidden border-t border-gray-200"></div>

                    <!-- About Course -->
                    <div class="hidden lg:block">
                        <p class="text-gray-700 text-xl font-bold mt-5">
                            About Course
                        </p>
                        <p class="text-gray-500 text-lg font-normal mt-2">
                            Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
                            Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally
                            adoptable. The core library is focused on the view layer only, and is easy to pick up and
                            integrate with other libraries or existing projects. On the other hand, Vue is also
                            perfectly capable of powering sophisticated Single-Page Applications when used in
                            combination with modern tooling and supporting libraries.
                        </p>
                    </div>

                    <!-- Review -->
                    <div class="hidden lg:block mt-10 mb-5">
                        <p class="text-gray-700 text-xl font-bold mt-5">
                            Review
                        </p>
                    </div>

                    <!-- Commnets -->
                    <div class=" flex flex-col">
                        <!-- Commnets 1 -->
                        <div class=" flex mt-6 mb-6 lg:mt-2">
                            <div class="w-1/12 mr-auto sm:w-1/12 sm:mr-5 xl:mr-2 2xl:mr-0">
                                <img class=" mt-1 min-w-11 h-12 rounded-full"
                                    src="https://s3-alpha-sig.figma.com/img/6fb1/2dd9/4761d0b747352f178c49faa623d741c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDbQozfjFIaQmvBzwWaS6eSw8iIC61KWMqgb7pNgLJ9QmuOQknGvKdGWTryAEeCmZ7~8ku-8Lv5laDBSAPxn-6MJY8zsSGmqVMgNVm62j3T9DqGeNtK8pmm4dnLL4rRRGoqGqw4kvCc~rw7Z-9CIaCGFtzhJOcF9RBKd2GdpfZDez7W53cmgSFzqZtHLvExJLlYROCb~n6e80KG2x4lNcIJyv1KbjC4GVqO819QT-jBpFZOQEgi6sRTYHxgzbd3~HPixH6ggOPMrltydKVJLv-P8E~e6KoVIyKu0hZGiHD1aBrzB50DtrsLpFRQNrG2M0XRmZtn~C14Vi2Mnwy~46Q__"
                                    alt="">
                            </div>
                            <div class="w-10/12 lg:mr-auto">
                                <p class="text-teal-400 text-xl font-bold ">
                                    Leonardo Da Vinci
                                </p>
                                <p class="text-gray-300 text-base font-normal">
                                    To Day
                                </p>
                                <p class="text-gray-500 text-xl font-normal">
                                    Loved the course. I've learned some very subtle tecniques, expecially on leaves.
                                </p>
                            </div>
                        </div>
                        <!-- Commnets 2 -->
                        <div class=" flex mt-6 mb-6 lg:mt-2">
                            <div class="w-1/12 mr-auto sm:w-1/12 sm:mr-5 xl:mr-2 2xl:mr-0">
                                <img class=" mt-1 min-w-11 h-12 rounded-full"
                                    src="https://s3-alpha-sig.figma.com/img/6fb1/2dd9/4761d0b747352f178c49faa623d741c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDbQozfjFIaQmvBzwWaS6eSw8iIC61KWMqgb7pNgLJ9QmuOQknGvKdGWTryAEeCmZ7~8ku-8Lv5laDBSAPxn-6MJY8zsSGmqVMgNVm62j3T9DqGeNtK8pmm4dnLL4rRRGoqGqw4kvCc~rw7Z-9CIaCGFtzhJOcF9RBKd2GdpfZDez7W53cmgSFzqZtHLvExJLlYROCb~n6e80KG2x4lNcIJyv1KbjC4GVqO819QT-jBpFZOQEgi6sRTYHxgzbd3~HPixH6ggOPMrltydKVJLv-P8E~e6KoVIyKu0hZGiHD1aBrzB50DtrsLpFRQNrG2M0XRmZtn~C14Vi2Mnwy~46Q__"
                                    alt="">
                            </div>
                            <div class="w-10/12 lg:mr-auto">
                                <p class="text-teal-400 text-xl font-bold ">
                                    Leonardo Da Vinci
                                </p>
                                <p class="text-gray-300 text-base font-normal">
                                    To Day
                                </p>
                                <p class="text-gray-500 text-xl font-normal">
                                    I loved the course, it had been a long time since I had experimented with
                                    watercolors and now I will do it more often thanks to Kitani Studio </p>
                            </div>
                        </div>
                        <!-- Commnets 3 -->
                        <div class=" flex mt-6 mb-6 lg:mt-2">
                            <div class="w-1/12 mr-auto sm:w-1/12 sm:mr-5 xl:mr-2 2xl:mr-0">
                                <img class=" mt-1 min-w-11 h-12 rounded-full"
                                    src="https://s3-alpha-sig.figma.com/img/6fb1/2dd9/4761d0b747352f178c49faa623d741c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDbQozfjFIaQmvBzwWaS6eSw8iIC61KWMqgb7pNgLJ9QmuOQknGvKdGWTryAEeCmZ7~8ku-8Lv5laDBSAPxn-6MJY8zsSGmqVMgNVm62j3T9DqGeNtK8pmm4dnLL4rRRGoqGqw4kvCc~rw7Z-9CIaCGFtzhJOcF9RBKd2GdpfZDez7W53cmgSFzqZtHLvExJLlYROCb~n6e80KG2x4lNcIJyv1KbjC4GVqO819QT-jBpFZOQEgi6sRTYHxgzbd3~HPixH6ggOPMrltydKVJLv-P8E~e6KoVIyKu0hZGiHD1aBrzB50DtrsLpFRQNrG2M0XRmZtn~C14Vi2Mnwy~46Q__"
                                    alt="">
                            </div>
                            <div class="w-10/12 lg:mr-auto">
                                <p class="text-teal-400 text-xl font-bold ">
                                    Leonardo Da Vinci
                                </p>
                                <p class="text-gray-300 text-base font-normal">
                                    To Day
                                </p>
                                <p class="text-gray-500 text-xl font-normal">
                                    Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to
                                    follow. What requires a course to master it. Safe and very didactic teacher. </p>
                            </div>
                        </div>
                        <!-- Commnets 4 -->
                        <div class=" flex mt-6 mb-6 lg:mt-2">
                            <div class="w-1/12 mr-auto sm:w-1/12 sm:mr-5 xl:mr-2 2xl:mr-0">
                                <img class=" mt-1 min-w-11 h-12 rounded-full"
                                    src="https://s3-alpha-sig.figma.com/img/6fb1/2dd9/4761d0b747352f178c49faa623d741c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDbQozfjFIaQmvBzwWaS6eSw8iIC61KWMqgb7pNgLJ9QmuOQknGvKdGWTryAEeCmZ7~8ku-8Lv5laDBSAPxn-6MJY8zsSGmqVMgNVm62j3T9DqGeNtK8pmm4dnLL4rRRGoqGqw4kvCc~rw7Z-9CIaCGFtzhJOcF9RBKd2GdpfZDez7W53cmgSFzqZtHLvExJLlYROCb~n6e80KG2x4lNcIJyv1KbjC4GVqO819QT-jBpFZOQEgi6sRTYHxgzbd3~HPixH6ggOPMrltydKVJLv-P8E~e6KoVIyKu0hZGiHD1aBrzB50DtrsLpFRQNrG2M0XRmZtn~C14Vi2Mnwy~46Q__"
                                    alt="">
                            </div>
                            <div class="w-10/12 lg:mr-auto">
                                <p class="text-teal-400 text-xl font-bold ">
                                    Leonardo Da Vinci
                                </p>
                                <p class="text-gray-300 text-base font-normal">
                                    To Day
                                </p>
                                <p class="text-gray-500 text-xl font-normal">
                                    I haven't finished the course yet, as I would like to have some feedback from the
                                    teacher, about the comments I shared on the forum 3 months ago, and I still haven't
                                    had any answer.
                                    I think the course is well structured, however the explanations and videos are very
                                    quick for beginners. However, it is good to go practicing. </p>
                            </div>
                        </div>
                        <!-- Commnets 5 -->
                        <div class=" flex mt-6 mb-6 lg:mt-2">
                            <div class="w-1/12 mr-auto sm:w-1/12 sm:mr-5 xl:mr-2 2xl:mr-0">
                                <img class=" mt-1 min-w-11 h-12 rounded-full"
                                    src="https://s3-alpha-sig.figma.com/img/6fb1/2dd9/4761d0b747352f178c49faa623d741c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDbQozfjFIaQmvBzwWaS6eSw8iIC61KWMqgb7pNgLJ9QmuOQknGvKdGWTryAEeCmZ7~8ku-8Lv5laDBSAPxn-6MJY8zsSGmqVMgNVm62j3T9DqGeNtK8pmm4dnLL4rRRGoqGqw4kvCc~rw7Z-9CIaCGFtzhJOcF9RBKd2GdpfZDez7W53cmgSFzqZtHLvExJLlYROCb~n6e80KG2x4lNcIJyv1KbjC4GVqO819QT-jBpFZOQEgi6sRTYHxgzbd3~HPixH6ggOPMrltydKVJLv-P8E~e6KoVIyKu0hZGiHD1aBrzB50DtrsLpFRQNrG2M0XRmZtn~C14Vi2Mnwy~46Q__"
                                    alt="">
                            </div>
                            <div class="w-10/12 lg:mr-auto">
                                <p class="text-teal-400 text-xl font-bold ">
                                    Leonardo Da Vinci
                                </p>
                                <p class="text-gray-300 text-base font-normal">
                                    To Day
                                </p>
                                <p class="text-gray-500 text-xl font-normal">
                                    Loved the course. I've learned some very subtle tecniques, expecially on leaves.
                                </p>
                            </div>
                        </div>
                        <!-- Commnets 5 -->
                        <div class=" flex mt-6 mb-6 lg:mt-2">
                            <div class="w-1/12 mr-auto sm:w-1/12 sm:mr-5 xl:mr-2 2xl:mr-0">
                                <img class=" mt-1 min-w-11 h-12 rounded-full"
                                    src="https://s3-alpha-sig.figma.com/img/6fb1/2dd9/4761d0b747352f178c49faa623d741c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDbQozfjFIaQmvBzwWaS6eSw8iIC61KWMqgb7pNgLJ9QmuOQknGvKdGWTryAEeCmZ7~8ku-8Lv5laDBSAPxn-6MJY8zsSGmqVMgNVm62j3T9DqGeNtK8pmm4dnLL4rRRGoqGqw4kvCc~rw7Z-9CIaCGFtzhJOcF9RBKd2GdpfZDez7W53cmgSFzqZtHLvExJLlYROCb~n6e80KG2x4lNcIJyv1KbjC4GVqO819QT-jBpFZOQEgi6sRTYHxgzbd3~HPixH6ggOPMrltydKVJLv-P8E~e6KoVIyKu0hZGiHD1aBrzB50DtrsLpFRQNrG2M0XRmZtn~C14Vi2Mnwy~46Q__"
                                    alt="">
                            </div>
                            <div class="w-10/12 lg:mr-auto">
                                <p class="text-teal-400 text-xl font-bold ">
                                    Leonardo Da Vinci
                                </p>
                                <p class="text-gray-300 text-base font-normal">
                                    To Day
                                </p>
                                <p class="text-gray-500 text-xl font-normal">
                                    Loved the course. I've learned some very subtle tecniques, expecially on leaves.
                                </p>
                            </div>
                        </div>
                        <button
                            class=" hidden lg:block self-center border-2 hover:border-sky-300 lg:border-gray-500 lg:rounded py-2 font-bold rounded-2xl w-80 lg:w-40 ">
                            <span class="text-gray-400 lg:text-gray-900 text-center">
                                Load more review</span>
                        </button>
                    </div>

                </div>
            </div>

            <!-- Right Content -->
            <div class="lg:w-1/3 hidden lg:block">

                <div class="max-w-md rounded overflow-hidden bg-white shadow-md mb-5 hidden lg:block xl:hidden">
                    <p class="ml-5 mt-5 flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM9 7H7V9H9V7ZM16 9H12C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7H16C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9ZM16 13H12C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 11H9V13H7V11ZM9 15H7V17H9V15ZM5 19H19V5H5V19Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                        <span class=" ml-5 text-sm font-normal text-gray-900">22 Section</span>
                    </p>
                    <p class="ml-5 mt-3 flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21 3.5H3C1.9 3.5 1 4.4 1 5.5V18.5C1 19.6 1.9 20.5 3 20.5H21C22.1 20.5 23 19.6 23 18.5V5.5C23 4.4 22.1 3.5 21 3.5ZM21 17.5C21 18.05 20.55 18.5 20 18.5H12V5.5H20C20.55 5.5 21 5.95 21 6.5V17.5ZM13.75 9H19.25C19.66 9 20 9.34 20 9.75C20 10.16 19.66 10.5 19.25 10.5H13.75C13.34 10.5 13 10.16 13 9.75C13 9.34 13.34 9 13.75 9ZM19.25 11.5H13.75C13.34 11.5 13 11.84 13 12.25C13 12.66 13.34 13 13.75 13H19.25C19.66 13 20 12.66 20 12.25C20 11.84 19.66 11.5 19.25 11.5ZM13.75 14H19.25C19.66 14 20 14.34 20 14.75C20 15.16 19.66 15.5 19.25 15.5H13.75C13.34 15.5 13 15.16 13 14.75C13 14.34 13.34 14 13.75 14Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                        <span class=" ml-5 text-sm font-normal text-gray-900">152 Lectures</span>
                    </p>
                    <p class="ml-5 mt-3 flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21 5.9001H13.41L16.35 2.9601C16.55 2.7601 16.55 2.4501 16.35 2.2501C16.15 2.0501 15.84 2.0501 15.64 2.2501L12 5.8901L8.36 2.2501C8.16 2.0501 7.85 2.0501 7.65 2.2501C7.45 2.4501 7.45 2.7601 7.65 2.9601L10.59 5.9001H3C1.9 5.9001 1 6.7901 1 7.9001V19.9001C1 21.0001 1.9 21.9001 3 21.9001H21C22.1 21.9001 23 21.0001 23 19.9001V7.9001C23 6.7901 22.1 5.9001 21 5.9001ZM10.5 17.0501L14.48 14.7701C15.15 14.3901 15.15 13.4201 14.48 13.0301L10.5 10.7501C9.83 10.3701 9 10.8601 9 11.6201V16.1701C9 16.9401 9.83 17.4301 10.5 17.0501ZM4 19.9001H20C20.55 19.9001 21 19.4501 21 18.9001V8.9001C21 8.3501 20.55 7.9001 20 7.9001H4C3.45 7.9001 3 8.3501 3 8.9001V18.9001C3 19.4501 3.45 19.9001 4 19.9001Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                        <span class=" ml-5 text-sm font-normal text-gray-900">21h 33m total lenghts</span>
                    </p>
                    <p class="ml-5 mt-3 flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14 4.65179V4.45179C14 3.82179 14.63 3.37179 15.21 3.60179C18.6 4.89179 21 8.16179 21 12.0018C21 15.8418 18.6 19.1118 15.21 20.4018C14.63 20.6218 14 20.1818 14 19.5518V19.3518C14 18.9718 14.24 18.6418 14.6 18.5018C17.18 17.4718 19 14.9418 19 12.0018C19 9.06179 17.18 6.53179 14.6 5.50179C14.25 5.36179 14 5.03179 14 4.65179ZM3 10.0018V14.0018C3 14.5518 3.45 15.0018 4 15.0018H7L10.29 18.2918C10.92 18.9218 12 18.4718 12 17.5818V6.41179C12 5.52179 10.92 5.07179 10.29 5.70179L7 9.00179H4C3.45 9.00179 3 9.45179 3 10.0018ZM16.5 12.0018C16.5 10.2318 15.48 8.71179 14 7.97179V16.0218C15.48 15.2918 16.5 13.7718 16.5 12.0018Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                        <span class=" ml-5 text-sm font-normal text-gray-900">English</span>
                    </p>
                </div>

                <div class="relative">
                    <img src="/src/assets/image1.png" alt="">
                    <div class="absolute top-8 lx:top-16 left-3 xl:left-6 flex items-start justify-center flex-col ">
                        <p class="text-white ml-1 bg-teal-500 rounded-md text-sm xl:text-lg font-bold p-1">WEBINAR</p>
                        <p class="text-white rounded-md mt-1 xl:text-2xl font-light p-1">Ana Kursova</p>
                        <p class="text-white rounded-md mt-1 text-2xl xl:text-4xl font-semibold p-1">Masterclass in
                            Design Thinking,
                            Innovation & Creativity</p>
                        <p
                            class="text-yellow-500 ml-1 mt-5 border border-yellow-500 rounded-md xl:text-lg font-medium py-2 px-6">
                            Learn More</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="relative mt-5 xl:mt-14 xl:mb-14 hidden lg:block">
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

        <!-- Button buy, Wishlist -->
        <div class="mt-10 mb-10 sticky bottom-0 left-0 right-0 bg-white p-3 flex lg:justify-between justify-center xl:hidden">
            <div class=" hidden lg:block justify-start">
                <p class="text-2xl font-bold text-gray-900">US$22.40
                    <span class="text-lg font-medium  text-gray-500">$30.13</span>
                </p>
                <div class="flex">
                    <p class="rounded-md flex items-center justify-center text-sm font-medium bg-purple-500 text-white"
                        style="width: 80px;">
                        20% OFF</p>
                </div>
            </div>
            <div class="flex">
                <button class="mx-2 border-2 border-gray-500 hover:border-sky-400 py-2 font-bold rounded-2xl"
                    style="width: 200px;">
                    <span class="text-gray-500 text-center">
                        <i class="fa-regular fa-heart"></i>
                        Wishlist</span>
                </button>
                <button class="mx-2 border-2 hover:border-sky-300 bg-teal-400 py-2 font-bold rounded-2xl"
                    style="width: 200px;">
                    <span class="text-white text-center">Buy</span>
                </button>
            </div>
        </div>
    </div>
</template>