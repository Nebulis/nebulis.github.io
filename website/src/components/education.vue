<script setup lang="ts">
import { defineProps } from "vue";
import SectionTitle from "./section-title.vue";
interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
}

defineProps<{ education: Education[]; title: string }>();
</script>

<template>
  <SectionTitle><i class="fa fa-university"></i> {{ title }}</SectionTitle>
  <ul id="education" class="relative px-0 py-4">
    <li v-for="edu in education" class="flex items-start relative">
      <div class="year bg-white p-1 font-bold text-center w-1/6">{{ edu.startDate.split("-")[0] }}<br />{{ edu.endDate.split("-")[0] }}</div>
      <div class="description ml-3 w-5/6 mb-2 p-2 relative">
        <h3 class="text-lg font-bold">{{ edu.institution }}</h3>
        <p class="mt-1"><i class="fa fa-graduation-cap"></i> {{ edu.studyType }}</p>
        <p class="mt-1">{{ edu.area }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
#education:before {
  width: 5px;
  height: 100%;
  position: absolute;
  left: 35px;
  top: 0;
  content: " ";
  display: block;
  background: #32475c;
  background: -moz-linear-gradient(top, #ffffff 0%, #32475c 7%, #32475c 89%, #ffffff 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffffff), color-stop(7%, #32475c), color-stop(89%, #32475c), color-stop(100%, #ffffff));
  background: -webkit-linear-gradient(top, #ffffff 0%, #32475c 7%, #32475c 89%, #ffffff 100%);
  background: -o-linear-gradient(top, #ffffff 0%, #32475c 7%, #32475c 89%, #ffffff 100%);
  background: -ms-linear-gradient(top, #ffffff 0%, #32475c 7%, #32475c 89%, #ffffff 100%);
  background: linear-gradient(to bottom, #ffffff 0%, #32475c 7%, #32475c 89%, #ffffff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 );
}
#education .description {
  background: #eee;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
#education .description:after {
  content: "";
  position: absolute;
  top: 15px;
  right: 0;
  left: -16px;
  height: 0;
  width: 0;
  border: solid transparent;
  border-right-color: #eee;
  border-width: 8px;
  pointer-events: none;
}
</style>
