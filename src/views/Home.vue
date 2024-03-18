<template>
<div><div class="flex p-8 justify-center">
<input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals">    
</div>
<div class="flex gap-1 justify-center mt-3 pb-5">
    <router-link v-for="letter of letters" :key="letter" :to="{name: 'byLetter', params: {letter}}">
      {{ letter }}
    </router-link>
</div>

</div>
</template>

<script setup>
import { computed, onMounted } from "vue"; 
import store from "../store";
import axiosClient from "../axiosClient";
import { ref } from 'vue';


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const ingredients = ref([])

onMounted(async () =>{
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data)
  ingredients.value = response.data
})

</script>