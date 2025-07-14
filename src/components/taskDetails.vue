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

</script>

<template>
 <!-- Fourth horizontal section -->

    <div class="bg-gray-50 flex flex-col py-6 px-2">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        class="demo-tabs"
        closable
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
        </el-tab-pane>
      </el-tabs>

      <div v-if="taskStore.selectedTask" class="p-4 border rounded shadow">
    <div class="flex justify-between mb-4">
      <h3 class="text-lg font-semibold">Viewing Task</h3>
      <div class="space-x-2">
        <button @click="fullscreen = !fullscreen">Toggle Fullscreen</button>
        <button @click="editMode = !editMode">Edit</button>
        <button @click="deleteTask">Delete</button>
      </div>
    </div>

    <div v-if="editMode">
      <!-- Inputs to edit -->
      <input v-model="taskStore.selectedTask.title" class="mb-2 border p-1" />
      <!-- Add inputs for other fields -->
      <button @click="saveEdit">Save</button>
    </div>
    <div v-else>
      <p><strong>Title:</strong> {{ taskStore.selectedTask.title }}</p>
      <p><strong>Priority:</strong> {{ taskStore.selectedTask.priority }}</p>
      <!-- Display other fields -->
    </div>
  </div>
    </div>
    
</template>