<script setup>
import { ref } from "vue";
const search = ref("");
</script>

<template>

    <div
      class="bg-gray-50 flex flex-col"
      style="
        width: 342px;
        height: 952px;
        border-left: 1px solid #e5e7eb;
        border-right: 1px solid #e5e7eb;
        padding-top: 24px;
        padding-bottom: 24px;
      "
    >
      <div class="px-4 mb-4">
        <input
          v-model="search"
          type="text"
          placeholder="Search words"
          class="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div class="px-4 text-gray-500 text-sm flex items-center">
        <template v-if="search">
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" stroke="currentColor" />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              stroke="currentColor"
              stroke-linecap="round"
            />
          </svg>
          <span>Search words: {{ search }}</span>
        </template>
      </div>
    </div>
</template>