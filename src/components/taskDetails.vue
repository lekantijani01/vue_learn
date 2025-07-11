<script setup lang="ts">
import { ref } from "vue";
import type { TabPaneName } from "element-plus";

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
    </div>
    
</template>