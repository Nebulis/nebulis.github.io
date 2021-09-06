<script setup lang="ts">
import { defineProps } from "vue";
import Pill from "./pill.vue";
import SectionTitle from "./section-title.vue";
import SkillSectionTitle from "./skill-section-title.vue";
interface Interest {
  name: string;
  keywords: string[];
}

defineProps<{ interests: Interest[]; title: string }>();
</script>

<template>
  <SectionTitle><i class="fa fa-heart"></i> {{ title }}</SectionTitle>
  <div class="interests" v-for="interest in interests">
    <SkillSectionTitle>{{ interest.name }}</SkillSectionTitle>
    <div class="ml-6 col-sm-12" v-if="interest.keywords.length > 0">
      <Pill class="interest mb-2 mr-2" v-for="keyword in interest.keywords">{{ keyword }}</Pill>
    </div>
  </div>
</template>

<style scoped></style>
