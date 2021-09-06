<script setup lang="ts">
import Pill from "./components/pill.vue";
import Interests from "./components/interests.vue";
import Languages from "./components/languages.vue";
import Skills from "./components/skills.vue";
import Education from "./components/education.vue";
import Contact from "./components/contact.vue";
import WorkExperiences from "./components/work-experiences.vue";
import About from "./components/about.vue";
import Header from "./components/header.vue";
import SectionTitle from "./components/section-title.vue";
import SkillSectionTitle from "./components/skill-section-title.vue";
import Box from "./components/box.vue";
import ListGroupItem from "./list-group-item.vue";
import { ref, watch } from "vue";
import resumeEn from "./resume.en.json";
import resumeFr from "./resume.fr.json";

// set initial lang
let uri = window.location.search.substring(1);
let params = new URLSearchParams(uri);
// @ts-ignore
const lang = ref<"fr" | "en">(params.get("lang") || "fr");

const getResume = () => {
  return lang.value === "fr" ? resumeFr : resumeEn;
};

const resume = ref(getResume());
watch(lang, () => {
  resume.value = getResume();
});

const changeLanguage = () => {
  // there is no native way to listen for URL change so fuck it :)
  lang.value = lang.value === "en" ? "fr" : "en";

  const url = new URL(window.location as any);
  url.searchParams.set("lang", lang.value);
  window.history.pushState({}, "", url);
};
</script>

<template>
  <div class="container mx-auto bg-white mb-10 px-4 mt-20 relative">
    <span class="absolute cursor-pointer top-2 right-2">
      <img src="./assets/french-flag.svg" alt="Click to change the resume language to french" class="w-6" v-on:click="changeLanguage" v-if="lang === 'en'" />
      <img src="./assets/uk-flag.svg" alt="Click to change the resume language to english" class="w-6" v-on:click="changeLanguage" v-else />
    </span>
    <div class="-mx-4">
      <Header v-bind:name="resume.basics.name" v-bind:label="resume.basics.label" />
    </div>
    <div class="-mx-4n flex flex-col lg:flex-row">
      <div class="w-100 lg:w-7/12 px-4">
        <Box>
          <About v-bind:summary="resume.basics.summary" v-bind:title="lang === 'en' ? 'About' : 'À propos'" />
        </Box>
        <Box>
          <WorkExperiences v-bind:workExperiences="resume.work" v-bind:lang="lang" v-bind:title="lang === 'en' ? 'WORK EXPERIENCE' : 'EXPÉRIENCE PROFESSIONNELLE'" />
        </Box>
      </div>
      <Box class="w-100 lg:w-5/12 px-4">
        <Box>
          <Contact v-bind:email="resume.basics.email" v-bind:phone="resume.basics.phone" v-bind:networks="resume.basics.networks" />
        </Box>
        <Box>
          <Education v-bind:education="resume.education" v-bind:title="lang === 'en' ? 'EDUCATION' : 'Formation'" />
        </Box>
        <Box>
          <Skills v-bind:skills="resume.skills" v-bind:title="lang === 'en' ? 'SKILLS' : 'COMPÉTENCES'" />
        </Box>
        <Box class="languages">
          <Languages v-bind:languages="resume.languages" v-bind:title="lang === 'en' ? 'LANGUAGES' : 'LANGAGES'" />
        </Box>
        <Box>
          <Interests v-bind:interests="resume.interests" v-bind:title="lang === 'en' ? 'INTERESTS' : 'LOISIRS'" />
        </Box>
      </Box>
    </div>
  </div>
</template>

<style scoped></style>
