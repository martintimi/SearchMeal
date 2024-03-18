<template>
  <div class="bg-gray-100 h-full font-mono">
    <Navbar />

    <main>
        <router-view/>
    </main>
</div>
</template>

<script setup>

import  Navbar from '../components/Navbar.vue';
</script>
<style>
</style>

