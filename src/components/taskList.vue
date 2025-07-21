<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/taskStore";

const search = ref("");
const taskStore = useTaskStore();

function openTask(task) {
  taskStore.selectTask(task);
}
function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric"
  })
}
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
    <!-- Search -->
    <div class="px-4 mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search tasks"
        class="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>

    <!-- Search Indicator -->
    <div v-if="search" class="px-4 text-gray-500 text-sm flex items-center mb-2">
      <svg
        class="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-linecap="round" />
      </svg>
      <span>Search: {{ search }}</span>
    </div>

    <!-- Task List -->
    <div class="">
    <h2 class="font-bold text-lg">Task List</h2>

    <ul v-if="taskStore.tasks.length">
      <li
        v-for="task in taskStore.tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()))"
        :key="task.id"
        class="flex items-start p-4 mb-4 shadow-sm"
      >
        <!-- Checkbox -->
        <div class="mr-3 mt-1">
          <button
            class="w-5 h-5 border border-gray-300 rounded-full bg-white flex items-center justify-center focus:outline-none"
            @click="openTask(task)"
            aria-label="Open Task"
            type="button"
          >
          </button>
        </div>

        <!-- Task Details -->
        <div class="flex-1">
          <!-- Date -->
          <div class="flex items-center text-sm text-blue-600 mb-1">
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {{ formatDate(task.startDate) }}
          </div>

          <!-- Title -->
          <div class="text-base font-semibold text-black">
            {{ task.title }}
          </div>

          <!-- Subtitle -->
          <div class="text-sm text-gray-500 truncate">
            {{ task.description  }}
          </div>
        </div>

        <!-- Circle Checkmark Button -->
        
      </li>
    </ul>

      <p v-else>No tasks yet.</p>
    </div>
  </div>
</template>
