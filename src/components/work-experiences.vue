<script setup lang="ts">
import { defineProps } from "vue";
import SectionTitle from "./section-title.vue";
import ListGroupItem from "./list-group-item.vue";
interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
}

defineProps<{ workExperiences: WorkExperience[]; title: "string"; lang: "fr" | "en" }>();
</script>

<template>
  <SectionTitle><i class="fa fa-suitcase ico"></i> {{ title }}</SectionTitle>
  <div v-for="job in workExperiences" class="job mb-3">
    <div>
      <div class="details mx-2 mb-2 p-3">
        <div class="where text-xl font-bold">{{ job.company }}</div>
        <div class="year capitalize opacity-70">
          {{ new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "fr-FR", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(job.startDate)) }} -
          {{ job.endDate ? new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "fr-FR", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(job.endDate)) : "Present" }}
        </div>
      </div>
    </div>
    <div>
      <div class="job-details ml-6 pr-2">
        <div class="profession text-xl font-bold">{{ job.position }}</div>
        <div class="description">
          <div class="highlights py-1 font-bold">Highlights</div>
          <ul class="list-group">
            <ListGroupItem v-for="highlight in job.highlights" v-html="highlight" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job .details {
  background: #eee;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
</style>
