<script setup lang="ts">
import { defineProps } from "vue";
import SectionTitle from "./section-title.vue";
import Pill from "./pill.vue";
import SkillSectionTitle from "./skill-section-title.vue";
interface Skill {
  name: string;
  keywords: string[];
}

defineProps<{ skills: Skill[]; title: string }>();
</script>

<template>
  <SectionTitle><i class="fa fa-tasks"></i> {{ title }}</SectionTitle>
  <div v-for="skill in skills">
    <SkillSectionTitle>{{ skill.name }}</SkillSectionTitle>
    <div class="ml-6 skills break-words">
      <Pill v-for="keyword in skill.keywords" class="mb-2 mr-2">{{ keyword }}</Pill>
    </div>
  </div>
</template>

<style scoped></style>
