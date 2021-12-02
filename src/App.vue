<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import Link from "@/components/Link.vue";



let count = ref(1);
const router = useRouter()
const route = useRoute()


</script>

<template>
  <div class="container mx-auto p-4">
    <div class="flex gap-3">
      <Link linkName="Home" />
      <Link linkName="Counter" />
      <Link linkName="TodoList" />
    </div>

    <router-view></router-view>
    <router-view name="second"></router-view>
  </div>
</template>