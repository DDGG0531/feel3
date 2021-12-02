
<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore();
// 將一般物件 變成響應式物件
const { count, doubleCount, halfCount } = storeToRefs(counter);

</script>


<template>
  <div>Hello Counter2!</div>
  <div>origin count: {{ count }}</div>
  <div>double count: {{ doubleCount }}</div>
  <div>half count: {{ halfCount }}</div>

  <div class="flex gap-3">
    <button
      @click="counter.increment()"
      class="bg-blue-400 hover:bg-blue-300 active:bg-blue-500 hover:scale-105 active:scale-95 px-6 py-3 rounded-md font-bold text-white transition-all mb-5"
    >加一</button>

    <button
      @click="counter.decrement()"
      class="bg-blue-400 hover:bg-blue-300 active:bg-blue-500 hover:scale-105 active:scale-95 px-6 py-3 rounded-md font-bold text-white transition-all mb-5"
    >減一</button>
  </div>
</template>

