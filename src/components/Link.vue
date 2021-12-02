
<script setup>

const props = defineProps({
  linkName: String
})


</script>


<template>
  <router-link :to="{ name: props.linkName }" custom v-slot="{ route, navigate, isActive }">
    <button
      @click="navigate"
      :class="[isActive ? 'bg-red-400 hover:bg-red-300 active:bg-red-500' : 'bg-green-400 hover:bg-green-300 active:bg-green-500', 'hover:scale-105 active:scale-95 px-6 py-3 rounded-md font-bold text-white transition-all mb-5']"
    >{{ route.meta.translation }}</button>
  </router-link>
</template>

