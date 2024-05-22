<template>
    <div class="container mx-auto sm:px-28">
        <div class="max-w-full  mx-auto">
            <div class="hidden lg:block">
                <TheHeader/>
            </div>
            <TheContent />
        </div>
    </div>
    <TheFooter />
</template>

<script setup>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheContent from '@/components/TheDetail/TheContent.vue'
</script>