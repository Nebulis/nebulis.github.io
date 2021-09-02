<script setup lang="ts">
import { defineProps } from "vue";
import SectionTitle from "./section-title.vue";
import Pill from "./pill.vue";
import ListGroupItem from "./list-group-item.vue";
interface Language {
  language: string;
  fluency: string[];
}

defineProps<{ languages: Language[]; title: "string" }>();
</script>

<template>
  <SectionTitle><i class="fa fa-language"></i> {{ title }}</SectionTitle>
  <ul>
    <ListGroupItem v-for="language in languages" class="flex justify-between items-center">
      {{ language.language }}<Pill class="ml-auto"> {{ language.fluency }}</Pill>
    </ListGroupItem>
  </ul>
</template>

<style scoped></style>
