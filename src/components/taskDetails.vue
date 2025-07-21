<script setup lang="ts">
import { ref } from "vue";
import type { TabPaneName } from "element-plus";
import { useTaskStore } from "../../store/taskStore"

const taskStore = useTaskStore()
const fullscreen = ref(false)
const editMode = ref(false)

function deleteTask() {
  taskStore.deleteTask(taskStore.selectedTask)
  taskStore.selectedTask = null
}

function saveEdit() {
  taskStore.updateTask(taskStore.selectedTask.id, taskStore.selectedTask)
  editMode.value = false
}

let tabIndex = 2;
const editableTabsValue = ref("2");


const editableTabs = ref([
  {
    title: "All tasks",
    name: "1",
  },
  {
    title: "Tab 2",
    name: "2",
  },
]);

const addTab = (targetName: string) => {
  const newTabName = `${++tabIndex}`;
  editableTabs.value.push({
    title: "New Tab",
    name: newTabName,
  });
  editableTabsValue.value = newTabName;
};
const removeTab = (targetName: TabPaneName) => {
  const tabs = editableTabs.value;
  let activeName = editableTabsValue.value;
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }

  editableTabsValue.value = activeName;
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
};
function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric"
  })
}

</script>

<template>
 <!-- Fourth horizontal section -->

  <div v-if="taskStore.selectedTask" class="p-4 border rounded shadow bg-white max-w-4xl mx-auto w-full">
  <!-- Header -->
  <div class="flex justify-between items-start mb-4">
  <div class="flex items-center space-x-2">
    <div class="w-5 h-5 border border-gray-300 rounded-full bg-white"></div>
    <h3 class="text-lg font-semibold">{{ taskStore.selectedTask.title }}</h3>
  </div>
  <div class="flex items-center space-x-4">
    <button @click="fullscreen = !fullscreen" title="Fullscreen">
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h6M4 4v6M20 4h-6M20 4v6M4 20h6M4 20v-6M20 20h-6M20 20v-6" />
    </svg>
    </button>
    <button @click="editMode = !editMode" title="Edit">
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5l3 3L12 15H9v-3L18.5 2.5z"/>
    </svg>
    </button>
    <button @click="deleteTask" title="Delete">
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4h6v3" />
    </svg>
    </button>
  </div>
  </div>

  <!-- Edit Mode -->
  <div v-if="editMode" class="space-y-2">
  <input v-model="taskStore.selectedTask.title" class="w-full border rounded p-2" />
  <input v-model="taskStore.selectedTask.priority" class="w-full border rounded p-2" />
  <!-- Add other fields here -->
  <button @click="saveEdit" class="bg-blue-600 text-white px-4 py-1 rounded">Save</button>
  </div>

  <!-- View Mode -->
  <div v-else class="space-y-3 text-sm text-gray-800">
  <div class="flex items-center gap-2">
    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
    <span class="text-sm font-medium">Due {{ formatDate(taskStore.selectedTask.startDate) }}</span>
  </div>
  <div class="flex items-center gap-2">
    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M6 3h12v4H6zM6 11h12v4H6zM6 15h12v4H6z" />
    </svg>
    <span>{{ taskStore.selectedTask.group || 'No group' }}</span>
  </div>
  <div class="flex items-center gap-2">
   <img src="/assets/Flag.svg" alt="red flag">
    <span>{{ taskStore.selectedTask.priority }}</span>
  </div>
  <div class="flex items-center gap-2">
    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
    <span>15 minutes before</span>
  </div>
  <div class="flex items-center gap-2">
    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582a7.5 7.5 0 0014.836 0H20V4" />
    </svg>
    <span>Daily</span>
  </div>
  <div class="flex items-center gap-2">
    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h10" />
    </svg>
    <span>{{ taskStore.selectedTask.description || "No description available." }}</span>
  </div>

  <!-- Sub-task -->
  <div class="pt-2">
    <button class="flex items-center text-blue-600 font-medium hover:underline">
    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
    </svg>
    Add Sub-task
    </button>
  </div>
  </div>
</div>

    
</template>