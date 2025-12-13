<template>
  <router-view />
</template>
<script setup lang="ts">
import { useAppStore } from "@/store";
console.log("kkkkkkkkkkkkkkk", useAppStore().isCollapse);
console.log("kkkkkkkkkkkkkkk", useAppStore().isCollapse);
let a = import.meta.env.VITE_APP_TITLE;
</script>
<style scoped></style>
