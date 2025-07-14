<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/taskStore";

const search = ref("");
const taskStore = useTaskStore();

function openTask(task) {
  taskStore.selectTask(task);
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
    <div class="px-4">
      <h2 class="font-bold text-lg mb-4">Task List</h2>

      <ul v-if="taskStore.tasks.length">
        <li
          v-for="task in taskStore.tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()))"
          :key="task.id"
          class="mb-4 p-4 border rounded-md"
        >
          <!-- Date Range -->
          <div class="text-xs text-gray-500">
            {{ task.startDate }} → {{ task.endDate }}
          </div>

          <!-- Title -->
          <div class="text-md font-semibold">{{ task.title }}</div>

          <!-- Priority -->
          <div class="text-sm text-gray-600">{{ task.priority }}</div>

          <!-- Circle Checkmark Button -->
          <button
            @click="openTask(task)"
            class="mt-2 w-8 h-8 flex items-center justify-center bg-blue-100 hover:bg-blue-200 rounded-full"
            title="Open Task"
          >
            <svg
              class="w-4 h-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </li>
      </ul>

      <p v-else>No tasks yet.</p>
    </div>
  </div>
</template>
