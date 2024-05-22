<template>
    <div class="ml-5 mr-5 lg:ml-0 lg:mr-0">
        <span class="flex justify-center text-2xl font-bold mt-10 mb-3">My Account</span>
        <nav class="justify-between flex overflow-x-auto py-3 gap-10 lg:justify-center">
            <a href="#" class=" font-bold text-lg text-teal-400 border-b-2 border-teal-400 min-w-max">Profile</a>
            <a href="#" class="font-normal text-lg text-slate-700 min-w-max">Personalisation </a>
            <a href="#" class="font-normal text-lg text-slate-700 min-w-max">Account</a>
            <a href="#" class="lg:hidden font-normal text-lg text-slate-700 min-w-max">Other Settings</a>
            <a href="#" class="font-normal text-lg text-slate-700 min-w-max">Payment Methods</a>
            <a href="#" class="font-normal text-lg text-slate-700 min-w-max">Notifications</a>
            <a href="#" class="font-normal text-lg text-slate-700 min-w-max">Privacy</a>
        </nav>
        <div class="border-t border-gray-200"></div>
        <div class="flex flex-col mt-8 max-w-[700px] mx-auto">
            <div class="flex justify-center">
                <div class="relative inline-block">
                    <img src="https://s3-alpha-sig.figma.com/img/b896/4af0/c42901c04884c10443121741bce1ef5b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mNgCrX~SbdCKtceVJfThdgfnc7cdJLs1z8aTEMaq37ceia-ElB-WqUaF23eZbIFTSBGaKJbLNhr6tQxem3Lxmg5UGvY3sDaPWpnvLwAnGYRkN~lZ0iL1HI-~cfpvkfXUSomJ2tw8-SVK8ry0hENzhTpRas19xZ1O9rJElfkld2J-8iVjxpZ06Nq4ixkpPG9R0fv4BJa4s03j-Qa2iym4EUsAQGqDiJUoMk6R4bR-fov8Mlkg3j8wFzsoT9FF-VX1LZGJ2gDLmkuV6HUZhBoKGdeX7I59t-0tWNvLkvh2UKMiXCU-35IiJ8TCpArgWX6TYM~1FVNlMaLSBmukPyXCcg__"
                        alt="Avatar" class="w-32 h-32 rounded-full object-cover">
                    <button class="absolute bottom-0 right-0 p-1 bg-white rounded-full">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#050505" fill-opacity="0.77" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.62484 12.5417C9.304 12.5417 9.0415 12.2792 9.0415 11.9583V10.7917H7.87484C7.554 10.7917 7.2915 10.5292 7.2915 10.2083C7.2915 9.8875 7.554 9.625 7.87484 9.625H9.0415V8.45833C9.0415 8.1375 9.304 7.875 9.62484 7.875C9.94567 7.875 10.2082 8.1375 10.2082 8.45833V9.625H11.3748C11.6957 9.625 11.9582 9.8875 11.9582 10.2083C11.9582 10.5292 11.6957 10.7917 11.3748 10.7917H10.2082V11.9583C10.2082 12.2792 9.94567 12.5417 9.62484 12.5417ZM13.3593 14.5833C13.6719 14.0419 14.2496 13.7083 14.8748 13.7083C15.5001 13.7083 16.0778 14.0419 16.3904 14.5833C16.703 15.1248 16.703 15.7919 16.3904 16.3333C16.0778 16.8748 15.5001 17.2083 14.8748 17.2083C14.2496 17.2083 13.6719 16.8748 13.3593 16.3333C13.0467 15.7919 13.0467 15.1248 13.3593 14.5833ZM19.5415 10.7917H17.6923L16.969 10.0042C16.7532 9.765 16.4382 9.625 16.1115 9.625H12.3782C12.4773 9.8 12.5415 9.9925 12.5415 10.2083C12.5415 10.85 12.0165 11.375 11.3748 11.375H10.7915V11.9583C10.7915 12.6 10.2665 13.125 9.62484 13.125C9.409 13.125 9.2165 13.0608 9.0415 12.9617V18.9583C9.0415 19.6 9.5665 20.125 10.2082 20.125H19.5415C20.1832 20.125 20.7082 19.6 20.7082 18.9583V11.9583C20.7082 11.3167 20.1832 10.7917 19.5415 10.7917ZM11.9582 15.4583C11.9582 17.0683 13.2648 18.375 14.8748 18.375C16.4848 18.375 17.7915 17.0683 17.7915 15.4583C17.7915 13.8483 16.4848 12.5417 14.8748 12.5417C13.2648 12.5417 11.9582 13.8483 11.9582 15.4583Z"
                                fill="#F9F9F9" fill-opacity="0.9" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="mt-10">
                <label class="text-gray-900">First Name</label>
                <input type="email" class=" w-full h-12 border-b-4 border-gray-300 opacity-65 pl-2 placeholder-gray-900"
                    placeholder="Jonathan">
            </div>

            <div class="mt-6">
                <label class="text-gray-900">Last Name</label>
                <input type="email" class=" w-full h-12 border-b-4 border-gray-300 opacity-65 pl-2 placeholder-gray-900"
                    placeholder="Doe">
            </div>

            <div class="mt-6">
                <input type="email" class=" w-full h-12 border-b-4 border-gray-300 opacity-65 pl-2 placeholder-gray-900"
                    placeholder="Headline">
            </div>

            <div class="mt-6">
                <label class="text-gray-900">Language</label>
                <div class="relative">
                    <input type="email"
                        class=" w-full h-12 border-b-4 border-gray-300 opacity-65 pl-2 placeholder-gray-900"
                        placeholder="JonEnglishathan">
                    <select class="absolute right-3 top-1/2 transform -translate-y-1/2"></select>
                </div>
            </div>
            <div class="mt-6">
                <label class="text-gray-900">Link</label>
                <input type="email" class=" w-full h-12 border-b-4 border-gray-300 opacity-65 pl-2 placeholder-gray-900"
                    placeholder="Https://Kitani.io">
            </div>

            <!-- Button Save Changes -->
            <div class="flex items-center justify-center mt-20">
                <button
                    class=" text-center text-white border-2 hover:border-sky-300 bg-red-600 lg:bg-teal-400 items-center px-36 py-3 lg:px-10 lg:py-3 font-bold rounded-2xl ">
                    Save Changes
                </button>
            </div>
        </div>
    </div>
</template>