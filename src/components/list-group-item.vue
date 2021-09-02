<template>
  <li class="list-group-item relative bg-white px-4 py-3 border border-gray-300"><slot></slot></li>
</template>

<script setup></script>

<style scoped>
.list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.list-group-item {
  /* collapse border */
  margin-top: -1px;
}
</style>
