<script setup lang="ts">
import { defineProps } from "vue";
import Pill from "./pill.vue";
import SectionTitle from "./section-title.vue";
import SkillSectionTitle from "./skill-section-title.vue";

defineProps<{ name: string; label: string }>();
</script>

<template>
  <div id="photo-header" class="text-center">
    <div class="photo-container">
      <div id="photo" class="w-40 h-40 p-1 inline-block rounded-full transform -translate-y-1/2">
        <img src="../assets/me.png" alt="avatar" class="rounded-full" />
      </div>
    </div>
    <div id="text-header">
      <h1 class="text-4xl font-bold uppercase tracking-tight font-extrabold">
        {{ name }}<br /><span class="text-2xl opacity-70">{{ label }}</span>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.photo-container {
  /* w-40 / 2*/
  height: 5rem;
}
#photo {
  background: #334960;
}
#text-header h1 span {
  color: #334960;
}
#text-header:after {
  width: 100%;
  height: 3px;
  border-bottom: 1px solid #ddd;
  margin-top: 15px;
  content: "";
  display: block;
}
</style>
