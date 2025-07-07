<script lang="ts" setup>
import { ref } from 'vue';
import type { TabPaneName } from 'element-plus'

let tabIndex = 2
const editableTabsValue = ref('2')
const taskTitle = ref('')
const assignedTo = ref('')
const startDate = ref('') 
const endDate = ref('')
const priority = ref('')
const group = ref('')
const search = ref('')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    
  },
  {
    title: 'Tab 2',
    name: '2',
  
  },
])

const addTab = (targetName: string) => {
  const newTabName = `${++tabIndex}`
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,

  })
  editableTabsValue.value = newTabName
}
const removeTab = (targetName: TabPaneName) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}

const showNewTaskPopup = ref(false);


</script>

<template>
  <section class="bg-white mb-4 min-h-screen flex flex-row">
    <!-- First horizontal section  -->
    <div class="flex flex-col justify-start items-center bg-white shadow-lg w-24 p-5">
      <div class="flex flex-col gap-6 items-center">
      <div class="flex flex-col items-center">
        <button class="icon-btn group rounded-full p-2 transition-colors duration-200 hover:bg-blue-100">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 6.125H24.5V21C24.5 21.2321 24.4078 21.4546 24.2437 21.6187C24.0796 21.7828 23.8571 21.875 23.625 21.875H4.375C4.14294 21.875 3.92038 21.7828 3.75628 21.6187C3.59219 21.4546 3.5 21.2321 3.5 21V6.125Z" stroke="#000000FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.5 6.125L14 15.75L3.5 6.125" stroke="#000000FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        <span class="mt-2 text-xs text-gray-700"></span>
      </div>
      <div class="flex flex-col items-center">
        <button class="icon-btn group rounded-full p-2 transition-colors duration-200 hover:bg-blue-100">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.72961 15.3886C2.74891 13.7363 2.40516 11.7829 2.76294 9.89508C3.12071 8.0073 4.15539 6.31507 5.67264 5.13623C7.18989 3.95739 9.08533 3.37303 11.003 3.49291C12.9206 3.61279 14.7285 4.42866 16.0872 5.78729C17.4458 7.14591 18.2617 8.95382 18.3815 10.8715C18.5014 12.7891 17.9171 14.6845 16.7382 16.2018C15.5594 17.7191 13.8671 18.7537 11.9794 19.1115C10.0916 19.4693 8.13812 19.1255 6.48586 18.1448L3.76242 18.9214C3.65021 18.9529 3.53162 18.954 3.41885 18.9246C3.30608 18.8951 3.20319 18.8361 3.12077 18.7537C3.03834 18.6713 2.97936 18.5684 2.94989 18.4556C2.92041 18.3428 2.9215 18.2242 2.95305 18.112L3.72961 15.3886Z" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0732 19.2389C10.4587 20.3379 11.0835 21.3376 11.9025 22.1658C12.7215 22.9939 13.7142 23.6298 14.8089 24.0275C15.9036 24.4252 17.0729 24.5747 18.2325 24.4654C19.392 24.356 20.5128 23.9905 21.5139 23.3951V23.3951L24.2373 24.1717C24.3495 24.2032 24.4681 24.2043 24.5809 24.1748C24.6937 24.1454 24.7965 24.0864 24.879 24.004C24.9614 23.9215 25.0204 23.8187 25.0498 23.7059C25.0793 23.5931 25.0782 23.4745 25.0467 23.3623L24.2701 20.6389C24.9634 19.4751 25.3443 18.152 25.376 16.7978C25.4077 15.4436 25.089 14.1041 24.4508 12.9093C23.8127 11.7144 22.8767 10.7046 21.7336 9.97781C20.5906 9.25099 19.2791 8.83176 17.9264 8.76074" stroke="#00141FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
        <span class="mt-2 text-xs text-gray-700"></span>
      </div>
      <div class="flex flex-col items-center">
        <button class="icon-btn group rounded-full p-2 transition-colors duration-200 hover:bg-blue-100">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.75 4.375H5.25C4.76675 4.375 4.375 4.76675 4.375 5.25V22.75C4.375 23.2332 4.76675 23.625 5.25 23.625H22.75C23.2332 23.625 23.625 23.2332 23.625 22.75V5.25C23.625 4.76675 23.2332 4.375 22.75 4.375Z" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.25 2.625V6.125" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 2.625V6.125" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.375 9.625H23.625" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0625 14H13.125L11.375 16.1875C11.663 16.187 11.9467 16.2576 12.2009 16.393C12.455 16.5284 12.6719 16.7245 12.8321 16.9638C12.9924 17.2031 13.0911 17.4783 13.1195 17.7649C13.1479 18.0515 13.1051 18.3407 12.995 18.6068C12.8848 18.8729 12.7107 19.1077 12.488 19.2904C12.2654 19.4731 12.0011 19.598 11.7186 19.654C11.4361 19.7101 11.1441 19.6956 10.8686 19.6117C10.593 19.5279 10.3425 19.3773 10.1391 19.1734" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.75 15.3125L17.5 14V19.6875" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
        <span class="mt-2 text-xs text-gray-700"></span>
      </div>
      <div class="flex flex-col items-center">
        <button class="icon-btn group rounded-full p-2 transition-colors duration-200 hover:bg-blue-100">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 19.6875C16.4162 19.6875 18.375 17.7287 18.375 15.3125C18.375 12.8963 16.4162 10.9375 14 10.9375C11.5838 10.9375 9.625 12.8963 9.625 15.3125C9.625 17.7287 11.5838 19.6875 14 19.6875Z" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.4375 12.6875C22.4566 12.6858 23.462 12.9223 24.3735 13.378C25.285 13.8338 26.0774 14.4962 26.6875 15.3125" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.3125 15.3125C1.92259 14.4962 2.71499 13.8338 3.6265 13.378C4.53801 12.9223 5.5434 12.6858 6.5625 12.6875" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.7002 23.6251C8.27641 22.4451 9.17247 21.4506 10.2863 20.7549C11.4001 20.0593 12.687 19.6904 14.0002 19.6904C15.3134 19.6904 16.6002 20.0593 17.7141 20.7549C18.8279 21.4506 19.724 22.4451 20.3002 23.6251" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.56263 12.6875C5.89834 12.6882 5.24757 12.4998 4.68636 12.1443C4.12515 11.7889 3.67669 11.2811 3.39337 10.6802C3.11005 10.0794 3.00357 9.41031 3.08639 8.75119C3.1692 8.09208 3.43787 7.47014 3.86102 6.95805C4.28417 6.44596 4.84431 6.06486 5.47601 5.8593C6.1077 5.65373 6.78485 5.63218 7.42833 5.79716C8.07181 5.96214 8.65506 6.30684 9.10992 6.79099C9.56477 7.27514 9.87245 7.87873 9.99701 8.53125" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0029 8.53125C18.1275 7.87873 18.4352 7.27514 18.89 6.79099C19.3449 6.30684 19.9281 5.96214 20.5716 5.79716C21.2151 5.63218 21.8922 5.65373 22.5239 5.8593C23.1556 6.06486 23.7158 6.44596 24.1389 6.95805C24.5621 7.47014 24.8307 8.09208 24.9136 8.75119C24.9964 9.41031 24.8899 10.0794 24.6066 10.6802C24.3232 11.2811 23.8748 11.7889 23.3136 12.1443C22.7524 12.4998 22.1016 12.6882 21.4373 12.6875" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
        <span class="mt-2 text-xs text-gray-700"></span>
      </div>
      <div class="flex flex-col items-center">
      <button class="icon-btn group rounded-full p-2 transition-colors duration-200 hover:bg-blue-100">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14H23.625" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7H23.625" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 21H23.625" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0625 5.25L6.26719 8.75L4.375 7" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0625 12.25L6.26719 15.75L4.375 14" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0625 19.25L6.26719 22.75L4.375 21" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
      <span class="mt-2 text-xs text-gray-700"></span>
      </div>
    </div>
      </div>
    <!-- Second horizontal section -->
    
    <div class="flex flex-col items-start" style="width: 268px;">
      <div class="mt-6  w-full flex justify-start">
  <button
    class="w-[268px] h-[38px] py-2 px-3 rounded bg-[#006699] text-white text-sm font-medium hover:bg-[#35ace7] transition-colors duration-200"
    @click="showNewTaskPopup = true"
    >
    <span class="flex items-center justify-center w-full">
      <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8333 3.33333C10.8333 2.8731 10.4602 2.5 10 2.5C9.53976 2.5 9.16667 2.8731 9.16667 3.33333V9.16667H3.33333C2.8731 9.16667 2.5 9.53976 2.5 10C2.5 10.4602 2.8731 10.8333 3.33333 10.8333H9.16667V16.6667C9.16667 17.1269 9.53976 17.5 10 17.5C10.4602 17.5 10.8333 17.1269 10.8333 16.6667V10.8333H16.6667C17.1269 10.8333 17.5 10.4602 17.5 10C17.5 9.53976 17.1269 9.16667 16.6667 9.16667H10.8333V3.33333Z" fill="white"/>
      </svg>
      New Task
    </span>
    </button>

    <teleport to="body">
      <div
      v-if="showNewTaskPopup"
      class="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-30"
      style="padding: 40px;"
      >
      <div
        class="relative bg-white rounded shadow-lg"
        style="
        max-width: 90vw;
        max-height: 90vh;
        width: 1022px;
        height: 702px;
        padding: 24px 12px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        "
      >
        <button
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        @click="showNewTaskPopup = false"
        >
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-linecap="round"/>
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-linecap="round"/>
        </svg>
        </button>
        <!-- Popup content  -->
        <div class="flex-1 flex flex-col">
          <div
            class="absolute top-6 left-6 mb-6"
            style="
              font-family: Inter, sans-serif;
              font-weight: 600;
              font-size: 24px;
              line-height: 120%;
              letter-spacing: 0;
              vertical-align: middle;
              color: #1a202c;
            "
          >
            New Task
          </div>
          <section
            class="mt-10"
            style="width: 998px; height: 601px; background: #f9fafb; border-radius: 12px;"
          >
            <div style="display: flex; flex-direction: row; width: 100%; height: 100%;">
              <!-- Left Section -->
              <div
                style="
                  width: 499px;
                  height: 601px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  padding-top: 24px;
                  padding-right: 24px;
                  padding-left: 24px;
                  box-sizing: border-box;
                "
              >
                <div>
                  <label
                    for="task-title"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    style="font-family: Inter, sans-serif;"
                  >
                    Task Title
                  </label>
                  <input
                    id="task-title"
                    type="text"
                    v-model="taskTitle"
                    placeholder="Enter task title"
                    class="w-full h-7 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  <div>
                  <label
                  for="assigned-to"
                  class="block text-sm font-medium text-gray-700  mt-5"
                  style="font-family: Inter, sans-serif;"
                  >
                  Assigned To
                  </label>
                  <input
                  id="assigned-to"
                  type="email"
                  v-model="assignedTo"
                  placeholder="Enter an email"
                  class="w-full h-7 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 "
                  />
                </div>
                <div class="mt-5">
                  <label
                  class="block text-sm font-medium text-gray-700 mb-2"
                  style="font-family: Inter, sans-serif;"
                  >
                  Date To
                  </label>
                  <div class="flex items-center gap-2">
                  <input
                    type="date"
                    v-model="startDate"
                    class="h-7 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  <span class="text-gray-500">to</span>
                  <input
                    type="date"
                    v-model="endDate"
                    class="h-7 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  
                  </div>
                  
                </div>
                <div class="flex flex-row gap-4 mt-5">
                  <div class="flex flex-col flex-1">
                    <label
                      for="priority"
                      class="block text-sm font-medium text-gray-700 mb-2"
                      style="font-family: Inter, sans-serif;"
                    >
                      Priority
                    </label>
                    <select
                      id="priority"
                      v-model="priority"
                      class="h-9 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                  <div class="flex flex-col flex-1">
                    <label
                      for="group"
                      class="block text-sm font-medium text-gray-700 mb-2"
                      style="font-family: Inter, sans-serif;"
                    >
                      Group
                    </label>
                    <select
                      id="group"
                      v-model="group"
                      class="h-9 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="" disabled>Select group</option>
                      <option value="">Lopworks</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div class="w-full max-w-3xl">
    <!-- Label -->
    <label class="block mb-2 font-medium text-gray-900 text-base">Description</label>

    <!-- Toolbar -->
    <div class="border border-gray-300 rounded-t bg-gray-50 px-2 py-2 flex flex-wrap items-center gap-2">
      <!-- Left side -->
      <button class="hover:bg-gray-200 p-1 rounded text-gray-700"><i class="icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1225 5.81841L6.87983 10.061C6.58693 10.3539 6.58693 10.8288 6.87983 11.1217C7.17272 11.4146 7.6476 11.4146 7.94048 11.1217L12.1832 6.87907C13.0618 6.0004 13.0618 4.57578 12.1832 3.69709C11.3045 2.81841 9.87983 2.81841 9.00113 3.69709L4.7585 7.93974C3.29404 9.40419 3.29404 11.7785 4.7585 13.2431C6.22297 14.7075 8.59733 14.7075 10.0618 13.2431L14.3045 9.00039L15.3651 10.061L11.1225 14.3037C9.07223 16.3539 5.7481 16.3539 3.69785 14.3037C1.64759 12.2534 1.64759 8.92936 3.69785 6.87907L7.94048 2.63643C9.40493 1.17197 11.7794 1.17197 13.2438 2.63643C14.7083 4.1009 14.7083 6.47526 13.2438 7.93974L9.00113 12.1824C8.1225 13.061 6.69785 13.061 5.81917 12.1824C4.94048 11.3037 4.94048 9.87909 5.81917 9.00039L10.0618 4.75776L11.1225 5.81841Z" fill="#1F2937"/>
</svg>
</i></button>
      <button class="font-bold hover:bg-gray-200 p-1 rounded text-gray-700">B</button>
      <button class="italic hover:bg-gray-200 p-1 rounded text-gray-700">I</button>
      <button class="underline hover:bg-gray-200 p-1 rounded text-gray-700">U</button>

      <!-- Font family dropdown -->
      <select class="text-sm px-2 border-none bg-transparent focus:outline-none text-gray-700">
        <option>Font family</option>
        <option>Inter</option>
        <option>Arial</option>
        <option>Georgia</option>
      </select>

      <!-- Spacer -->
      <div class="flex-grow"></div>

      <!-- Alignment + list + undo/redo -->
      <div class="flex items-center gap-2">
        <button class="hover:bg-gray-200 p-1 rounded text-gray-700"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.875 9H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.875 4.5H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.8125 13.5H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.0625 3.9375L2.25 6.75L5.0625 9.5625" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        <button class="hover:bg-gray-200 p-1 rounded text-gray-700"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.875 9H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.875 4.5H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.8125 13.5H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.8125 3.9375L5.625 6.75L2.8125 9.5625" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        <button class="hover:bg-gray-200 p-1 rounded text-gray-700"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.3125 9H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.3125 4.5H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.3125 13.5H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.8125 4.21875L3.9375 3.65625V7.59375" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.88984 10.73C2.94168 10.6017 3.01999 10.4857 3.11968 10.3897C3.21938 10.2936 3.3382 10.2197 3.46839 10.1727C3.59859 10.1257 3.73723 10.1067 3.87527 10.1169C4.01331 10.1272 4.14764 10.1664 4.2695 10.232C4.39135 10.2977 4.498 10.3883 4.58246 10.498C4.66692 10.6076 4.72731 10.7339 4.75968 10.8684C4.79205 11.003 4.79567 11.1429 4.77031 11.279C4.74495 11.4151 4.69117 11.5443 4.6125 11.6581L2.8125 14.0628H4.78125" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        <button class="hover:bg-gray-200 p-1 rounded text-gray-700"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.1875 4.5H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.1875 9H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.1875 13.5H15.1875" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.09375 5.20312C3.48208 5.20312 3.79688 4.88833 3.79688 4.5C3.79688 4.11167 3.48208 3.79688 3.09375 3.79688C2.70542 3.79688 2.39062 4.11167 2.39062 4.5C2.39062 4.88833 2.70542 5.20312 3.09375 5.20312Z" fill="#131313"/>
<path d="M3.09375 14.2031C3.48208 14.2031 3.79688 13.8883 3.79688 13.5C3.79688 13.1117 3.48208 12.7969 3.09375 12.7969C2.70542 12.7969 2.39062 13.1117 2.39062 13.5C2.39062 13.8883 2.70542 14.2031 3.09375 14.2031Z" fill="#131313"/>
<path d="M3.09375 9.70312C3.48208 9.70312 3.79688 9.38833 3.79688 9C3.79688 8.61167 3.48208 8.29688 3.09375 8.29688C2.70542 8.29688 2.39062 8.61167 2.39062 9C2.39062 9.38833 2.70542 9.70312 3.09375 9.70312Z" fill="#131313"/>
</svg>
</button>
        <button class="hover:bg-gray-200 p-1 rounded text-gray-700"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5234 10.4131H16.0234V5.91309" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.25 12.9371C2.24951 11.6017 2.64512 10.2962 3.38679 9.18566C4.12845 8.07517 5.18284 7.20962 6.41655 6.69853C7.65026 6.18743 9.00785 6.05375 10.3175 6.31441C11.6272 6.57507 12.8302 7.21834 13.7742 8.16285L16.0242 10.4129" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        <button class="hover:bg-gray-200 p-1 rounded text-gray-700"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.47656 10.4131H1.97656V5.91309" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7508 12.9371C15.7513 11.6017 15.3557 10.2962 14.614 9.18566C13.8723 8.07517 12.8179 7.20962 11.5842 6.69853C10.3505 6.18743 8.99294 6.05375 7.68324 6.31441C6.37353 6.57507 5.17058 7.21834 4.22656 8.16285L1.97656 10.4129" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
      </div>
    </div>

    <!-- Editor -->
    <div
      contenteditable="true"
      class="min-h-[130px] bg-gray-50 border border-t-0 border-gray-300 rounded-b p-3 text-sm focus:outline-none"
    ></div>
  </div>
              </div>
              </div>              <!-- Right Section -->
              <div
                style="
                  width: 499px;
                  height: 601px;
                  display: flex;
                  flex-direction: column;
                  gap: 24px;
                  padding: 24px;
                  box-sizing: border-box;
                "
              >
                <!-- Right section content here -->
                <div class="max-w-md w-full space-y-2">
    <!-- Heading -->
    <h2 class="text-xl font-semibold text-gray-900">Meeting</h2>

    <!-- Detail Box -->
    <div class=" rounded p-4 space-y-4">
      <div class="flex items-start gap-3">
        <span><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.83268 2.49967V0.833008H6.49935V2.49967H11.4993V0.833008H13.166V2.49967H16.4993C16.9596 2.49967 17.3327 2.87277 17.3327 3.33301V7.49967H15.666V4.16634H13.166V5.83301H11.4993V4.16634H6.49935V5.83301H4.83268V4.16634H2.33268V15.833H7.33268V17.4997H1.49935C1.03912 17.4997 0.666016 17.1266 0.666016 16.6663V3.33301C0.666016 2.87277 1.03912 2.49967 1.49935 2.49967H4.83268ZM13.166 9.99967C11.3251 9.99967 9.83268 11.4921 9.83268 13.333C9.83268 15.1739 11.3251 16.6663 13.166 16.6663C15.0069 16.6663 16.4993 15.1739 16.4993 13.333C16.4993 11.4921 15.0069 9.99967 13.166 9.99967ZM8.16602 13.333C8.16602 10.5716 10.4046 8.33301 13.166 8.33301C15.9274 8.33301 18.166 10.5716 18.166 13.333C18.166 16.0944 15.9274 18.333 13.166 18.333C10.4046 18.333 8.16602 16.0944 8.16602 13.333ZM12.3327 10.833V13.6782L14.2434 15.5889L15.4219 14.4104L13.9993 12.9878V10.833H12.3327Z" fill="#616161"/>
</svg>
</span>
        <p class="text-gray-800">Due Wed, April 9th</p>
      </div>

      <div class="flex items-start gap-3">
        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9453 16.25H3.07813C3.0022 16.25 2.92703 16.235 2.85689 16.206C2.78674 16.1769 2.72301 16.1344 2.66933 16.0807C2.61564 16.027 2.57306 15.9633 2.54401 15.8931C2.51495 15.823 2.5 15.7478 2.5 15.6719V6.25H16.875C17.0408 6.25 17.1997 6.31585 17.3169 6.43306C17.4342 6.55027 17.5 6.70924 17.5 6.875V15.6953C17.5 15.8424 17.4416 15.9835 17.3375 16.0875C17.2335 16.1916 17.0924 16.25 16.9453 16.25Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 6.25V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H7.24219C7.32334 3.74972 7.40376 3.76544 7.47883 3.79628C7.5539 3.82711 7.62216 3.87245 7.67969 3.92969L10 6.25" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
        <p class="text-gray-800">Lopworks</p>
      </div>

      <div class="flex items-start gap-3">
        <span class="text-yellow-500"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.125 16.875V3.75" stroke="#FFBF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.125 13.1245C8.125 9.37452 11.875 16.8745 16.875 13.1245V3.74952C11.875 7.49952 8.125 -0.000476077 3.125 3.74952" stroke="#FFBF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
        <p class="text-gray-800">Medium</p>
      </div>

      <div class="flex items-start gap-3">
        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5.625V10H14.375" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875Z" stroke="#616161" stroke-width="2" stroke-miterlimit="10"/>
<path d="M15.3047 2.04688L17.9531 4.69531" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.04688 4.69531L4.69531 2.04688" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
        <p class="text-gray-800">15 minutes before</p>
      </div>

      <div class="flex items-start gap-3">
        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 6.875L17.5 5L15.625 3.125" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 10C2.50207 8.67455 3.02951 7.40398 3.96675 6.46675C4.90398 5.52951 6.17455 5.00207 7.5 5H17.5" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.375 13.125L2.5 15L4.375 16.875" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 10C17.4979 11.3254 16.9705 12.596 16.0333 13.5333C15.096 14.4705 13.8254 14.9979 12.5 15H2.5" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
        <p class="text-gray-800">Daily</p>
      </div>

      <div class="flex items-start gap-3">
        <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 3H15.75V4.5H2.25V3ZM2.25 14.25H15.75V15.75H2.25V14.25ZM2.25 10.5H15.75V12H2.25V10.5ZM2.25 6.75H15.75V8.25H2.25V6.75Z" fill="#616161"/>
</svg>
</span>
        <p class="text-gray-800">
          Deadline for submitting the Q1 financial report. Ensure all data is finalized.
        </p>
      </div>
    </div>
  </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </teleport>
      </div>
      <div class="flex items-center justify-between  bg-white rounded" style="width: 268px; height: 48px;">
      <span class="text-gray-700 ml-5 font-medium-inter text-base leading-[1.4]">Task</span>
      <button class="flex items-center gap-2 ml-4 p-2 rounded hover:bg-gray-100 transition-colors">
      </button>
      <div class="flex items-center ml-2 space-x-2">
        <button class="flex items-center p-2 rounded hover:bg-gray-100 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5186 9.34668H21.0186V4.84668" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.8311 17.8313C16.6776 18.9857 15.2076 19.7721 13.6071 20.091C12.0066 20.4099 10.3474 20.2469 8.83953 19.6227C7.33165 18.9984 6.04278 17.941 5.13596 16.5842C4.22914 15.2273 3.74512 13.632 3.74512 12C3.74512 10.368 4.22914 8.7727 5.13596 7.41585C6.04278 6.059 7.33165 5.00158 8.83953 4.37735C10.3474 3.75313 12.0066 3.59014 13.6071 3.90902C15.2076 4.22789 16.6776 5.0143 17.8311 6.16875L21.0186 9.34688" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        <button class="flex items-center p-2 rounded hover:bg-gray-100 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#00141F"/>
          <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#00141F"/>
        </svg>
        </button>
      </div>
      </div>
      <button
      class="w-[268px] h-12 px-4 py-3  flex items-center gap-2 rounded bg-[#EAF0F4] text-gray-800 text-base font-medium hover:bg-gray-200 transition-colors duration-200 shadow-lg"
      style="padding-top: 12px; padding-right: 16px; padding-bottom: 12px; padding-left: 16px; gap: 8px;"
    >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.5 2.25V5.25" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.5 2.25V5.25" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.75 8.25H20.25" stroke="#00141F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

      All Task
    </button>
    

    <button
      class="w-[268px] h-12 px-4 py-3  flex items-center gap-2 rounded bg-white text-gray-800 text-base font-medium hover:bg-gray-200 transition-colors duration-200"
      style="padding-top: 12px; padding-right: 16px; padding-bottom: 12px; padding-left: 16px; gap: 8px;"
    >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3344 19.5H3.69375C3.60265 19.5 3.51243 19.4821 3.42826 19.4472C3.34409 19.4123 3.26762 19.3612 3.20319 19.2968C3.13877 19.2324 3.08767 19.1559 3.05281 19.0717C3.01794 18.9876 3 18.8974 3 18.8063V7.5H20.25C20.4489 7.5 20.6397 7.57902 20.7803 7.71967C20.921 7.86032 21 8.05109 21 8.25V18.8344C21 19.0109 20.9299 19.1802 20.805 19.305C20.6802 19.4299 20.5109 19.5 20.3344 19.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7.5V5.25C3 5.05109 3.07902 4.86033 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H8.69062C8.78801 4.49966 8.88451 4.51853 8.9746 4.55553C9.06469 4.59253 9.14659 4.64694 9.21563 4.71563L12 7.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      Lopworks
    </button>
    </div>
    <!-- Third horizontal section -->
    <div
      class="bg-gray-50 flex flex-col"
      style="width: 342px; height: 952px; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; padding-top: 24px; padding-bottom: 24px;"
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
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" stroke="currentColor" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-linecap="round"/>
      </svg>
      <span>Search words: {{ search }}</span>
      </template>
      </div>
    </div>
    <!-- Fourth horizontal section -->

    
  
    <div class="bg-gray-50 flex flex-col py-6">
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
    
  

     
    <!-- Extra section -->
    <div class="bg-gray-50 flex-1 w-full"></div>

    
  </section>
</template>