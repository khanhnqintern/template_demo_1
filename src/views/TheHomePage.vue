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
import TheContent from '@/components/TheHomePage/TheContent.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const modalLogin = ref(false);
const modalSignup= ref(false);

onMounted(() => {
  if (route.query.showModalLogin === 'true') {
    modalLogin.value = true;
  }
  if (route.query.showModalSignUp === 'true') {
    modalSignup.value = true;
  }
});
</script>