<template>
    <div class="container mx-auto sm:px-28">
        <div class="max-w-full mx-auto">
            <TheHeader />
            <TheContent />
        </div>
    </div>
    <TheFooter />
</template>
<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheContent from '@/components/TheSearch/TheContent.vue';
</script>