<template>
  <router-view />
</template>
<script setup lang="ts">
import { useAppStore } from "@/store";
console.log("kkkkkkkkkkkkkkk", useAppStore().isCollapse);
let a = import.meta.env.VITE_APP_TITLE;
console.log("aaaaaaaaaaaaaaaaaa", a);
</script>
<style scoped></style>
