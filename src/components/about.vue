<script setup lang="ts">
import { defineProps } from "vue";
import SectionTitle from "./section-title.vue";

defineProps<{ summary: string; title: "string" }>();
</script>

<template>
  <SectionTitle><i class="fa fa-user"></i> {{title}}</SectionTitle>
  <p>{{ summary }}</p>
</template>

<style scoped></style>
