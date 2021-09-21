<script setup lang="ts">
import { defineProps, computed } from "vue";
import Pill from "./pill.vue";
import SectionTitle from "./section-title.vue";
import SkillSectionTitle from "./skill-section-title.vue";
interface Network {
  name: string;
  username: string;
  url: string;
}

defineProps<{ networks: Network[]; email: string; phone: string }>();
</script>

<template>
  <SectionTitle><i class="fa fa-bullseye"></i> Contact</SectionTitle>
  <div class="flex flex-wrap flex-col sm:flex-row lg:flex-col contact-item-container">
    <div class="contact-item flex w-100 sm:w-1/2 md:w-1/3 lg:w-100">
      <div class="icon"><span class="fa fa-phone fa-fw"></span></div>
      <div class="title flex items-center ml-3">{{ phone }}</div>
    </div>
    <div class="contact-item flex w-100 sm:w-1/2 md:w-1/3 lg:w-100">
      <div class="icon"><span class="fa fa-envelope fa-fw"></span></div>
      <div class="title flex items-center ml-3">
        <a v-bind:href="'mailto:' + email" target="_blank">{{ email }}</a>
      </div>
    </div>
    <div class="contact-item flex w-100 sm:w-1/2 md:w-1/3 lg:w-100">
      <div class="icon"><span class="fa fa-fw fa-globe-europe"></span></div>
      <div class="title flex items-center ml-3">
        <a href="https://magicoftravels.com" target="_blank">MagicOfTravels</a>
      </div>
    </div>
    <div v-for="network in networks" class="contact-item flex w-100 sm:w-1/2 md:w-1/3 lg:w-100">
      <div class="icon"><span v-bind:class="'fa fa-fw fa-' + network.name"></span></div>
      <div class="title flex items-center ml-3">
        <a v-bind:href="network.url" target="_blank">{{ network.username }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-item .icon {
  /* p-2 */
  padding: 0.5rem;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  color: #32475c;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-item:last-child .icon {
  border-bottom: none;
}
.contact-item .title {
  font-weight: 700;
}
.contact-item .description {
  color: #334960;
}
</style>
