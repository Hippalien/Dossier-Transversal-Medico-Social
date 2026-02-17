<script setup lang="ts">
import NavBar from './components/specifics/NavBar.vue';
import Tabs from './components/specifics/Tabs.vue';

const userName = ref<string>('')


</script>

<template>
 
  <header class="border-b border-gray-200 bg-white sticky top-0 z-10 w-full">
    <NavBar  :userName="userName"
     />
    <Tabs/>
  </header>

  <NuxtPage />
</template>