<script setup>
import { ref } from 'vue';

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
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
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
                  class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 "
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
                    class="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  <span class="text-gray-500">to</span>
                  <input
                    type="date"
                    v-model="endDate"
                    class="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  </div>
                </div>
                </div>
                
              </div>
              <!-- Right Section -->
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
      class="w-[268px] h-12 px-4 py-3  flex items-center gap-2 rounded bg-[#EAF0F4] text-gray-800 text-base font-medium hover:bg-gray-200 transition-colors duration-200"
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
    <div class="bg-gray-50 w-[673px] h-[942px] pt-6 pb-6 flex flex-col gap-3 relative">
      <div class="flex justify-start items-center mb-2 pl-6">
      <button class="w-24 h-6 flex items-start justify-start rounded hover:bg-gray-200 transition-colors" aria-label="Close">
      <svg width="66" height="13" viewBox="0 0 66 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.88636 12H0.409091L4.68182 0.363636H6.13636L10.4091 12H8.93182L5.45455 2.20455H5.36364L1.88636 12ZM2.43182 7.45455H8.38636V8.70455H2.43182V7.45455ZM13.3807 0.363636V12H12.0398V0.363636H13.3807ZM17.1776 0.363636V12H15.8366V0.363636H17.1776ZM23.679 1.61364V0.363636H32.4062V1.61364H28.7472V12H27.3381V1.61364H23.679ZM35.7798 12.2045C35.2268 12.2045 34.7249 12.1004 34.2741 11.892C33.8234 11.6799 33.4654 11.375 33.2003 10.9773C32.9351 10.5758 32.8026 10.0909 32.8026 9.52273C32.8026 9.02273 32.901 8.61742 33.098 8.30682C33.295 7.99242 33.5582 7.74621 33.8878 7.56818C34.2173 7.39015 34.581 7.25758 34.9787 7.17045C35.3802 7.07955 35.7836 7.00758 36.1889 6.95455C36.7192 6.88636 37.1491 6.83523 37.4787 6.80114C37.812 6.76326 38.0545 6.70076 38.206 6.61364C38.3613 6.52652 38.4389 6.375 38.4389 6.15909V6.11364C38.4389 5.55303 38.2855 5.11742 37.9787 4.80682C37.6757 4.49621 37.2154 4.34091 36.598 4.34091C35.9579 4.34091 35.456 4.48106 35.0923 4.76136C34.7287 5.04167 34.473 5.34091 34.3253 5.65909L33.0526 5.20455C33.2798 4.67424 33.5829 4.26136 33.9616 3.96591C34.3442 3.66667 34.7609 3.45833 35.2116 3.34091C35.6662 3.2197 36.1132 3.15909 36.5526 3.15909C36.8329 3.15909 37.1548 3.19318 37.5185 3.26136C37.8859 3.32576 38.2401 3.46023 38.581 3.66477C38.9257 3.86932 39.2116 4.17803 39.4389 4.59091C39.6662 5.00379 39.7798 5.55682 39.7798 6.25V12H38.4389V10.8182H38.3707C38.2798 11.0076 38.1283 11.2102 37.9162 11.4261C37.7041 11.642 37.4219 11.8258 37.0696 11.9773C36.7173 12.1288 36.2874 12.2045 35.7798 12.2045ZM35.9844 11C36.5147 11 36.9616 10.8958 37.3253 10.6875C37.6927 10.4792 37.9692 10.2102 38.1548 9.88068C38.3442 9.55114 38.4389 9.20455 38.4389 8.84091V7.61364C38.3821 7.68182 38.2571 7.74432 38.0639 7.80114C37.8745 7.85417 37.6548 7.90151 37.4048 7.94318C37.1586 7.98106 36.9181 8.01515 36.6832 8.04545C36.4522 8.07197 36.2647 8.0947 36.1207 8.11364C35.7723 8.15909 35.4465 8.23295 35.1435 8.33523C34.8442 8.43371 34.6018 8.58333 34.4162 8.78409C34.2344 8.98106 34.1435 9.25 34.1435 9.59091C34.1435 10.0568 34.3158 10.4091 34.6605 10.6477C35.009 10.8826 35.4503 11 35.9844 11ZM48.4091 5.22727L47.2045 5.56818C47.1288 5.36742 47.017 5.17235 46.8693 4.98295C46.7254 4.78977 46.5284 4.63068 46.2784 4.50568C46.0284 4.38068 45.7083 4.31818 45.3182 4.31818C44.7841 4.31818 44.339 4.44129 43.983 4.6875C43.6307 4.92992 43.4545 5.23864 43.4545 5.61364C43.4545 5.94697 43.5758 6.21023 43.8182 6.40341C44.0606 6.59659 44.4394 6.75758 44.9545 6.88636L46.25 7.20455C47.0303 7.39394 47.6117 7.68371 47.9943 8.07386C48.3769 8.46023 48.5682 8.95833 48.5682 9.56818C48.5682 10.0682 48.4242 10.5152 48.1364 10.9091C47.8523 11.303 47.4545 11.6136 46.9432 11.8409C46.4318 12.0682 45.8371 12.1818 45.1591 12.1818C44.2689 12.1818 43.5322 11.9886 42.9489 11.6023C42.3655 11.2159 41.9962 10.6515 41.8409 9.90909L43.1136 9.59091C43.2348 10.0606 43.464 10.4129 43.8011 10.6477C44.142 10.8826 44.5871 11 45.1364 11C45.7614 11 46.2576 10.8674 46.625 10.6023C46.9962 10.3333 47.1818 10.0114 47.1818 9.63636C47.1818 9.33333 47.0758 9.07955 46.8636 8.875C46.6515 8.66667 46.3258 8.51136 45.8864 8.40909L44.4318 8.06818C43.6326 7.87879 43.0455 7.58523 42.6705 7.1875C42.2992 6.78598 42.1136 6.28409 42.1136 5.68182C42.1136 5.18939 42.2519 4.75379 42.5284 4.375C42.8087 3.99621 43.1894 3.69886 43.6705 3.48295C44.1553 3.26705 44.7045 3.15909 45.3182 3.15909C46.1818 3.15909 46.8598 3.34848 47.3523 3.72727C47.8485 4.10606 48.2008 4.60606 48.4091 5.22727ZM51.8366 8.81818L51.8139 7.15909H52.0866L55.9048 3.27273H57.5639L53.4957 7.38636H53.3821L51.8366 8.81818ZM50.5866 12V0.363636H51.9276V12H50.5866ZM56.1321 12L52.723 7.68182L53.6776 6.75L57.8366 12H56.1321ZM65.4716 5.22727L64.267 5.56818C64.1913 5.36742 64.0795 5.17235 63.9318 4.98295C63.7879 4.78977 63.5909 4.63068 63.3409 4.50568C63.0909 4.38068 62.7708 4.31818 62.3807 4.31818C61.8466 4.31818 61.4015 4.44129 61.0455 4.6875C60.6932 4.92992 60.517 5.23864 60.517 5.61364C60.517 5.94697 60.6383 6.21023 60.8807 6.40341C61.1231 6.59659 61.5019 6.75758 62.017 6.88636L63.3125 7.20455C64.0928 7.39394 64.6742 7.68371 65.0568 8.07386C65.4394 8.46023 65.6307 8.95833 65.6307 9.56818C65.6307 10.0682 65.4867 10.5152 65.1989 10.9091C64.9148 11.303 64.517 11.6136 64.0057 11.8409C63.4943 12.0682 62.8996 12.1818 62.2216 12.1818C61.3314 12.1818 60.5947 11.9886 60.0114 11.6023C59.428 11.2159 59.0587 10.6515 58.9034 9.90909L60.1761 9.59091C60.2973 10.0606 60.5265 10.4129 60.8636 10.6477C61.2045 10.8826 61.6496 11 62.1989 11C62.8239 11 63.3201 10.8674 63.6875 10.6023C64.0587 10.3333 64.2443 10.0114 64.2443 9.63636C64.2443 9.33333 64.1383 9.07955 63.9261 8.875C63.714 8.66667 63.3883 8.51136 62.9489 8.40909L61.4943 8.06818C60.6951 7.87879 60.108 7.58523 59.733 7.1875C59.3617 6.78598 59.1761 6.28409 59.1761 5.68182C59.1761 5.18939 59.3144 4.75379 59.5909 4.375C59.8712 3.99621 60.2519 3.69886 60.733 3.48295C61.2178 3.26705 61.767 3.15909 62.3807 3.15909C63.2443 3.15909 63.9223 3.34848 64.4148 3.72727C64.911 4.10606 65.2633 4.60606 65.4716 5.22727Z" fill="#006699"/>
      </svg>
      <span class="mx-1"></span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.9997 5.5865L11.9495 0.636719L13.3637 2.05093L8.4139 7.0007L13.3637 11.9504L11.9495 13.3646L6.9997 8.4149L2.04996 13.3646L0.635742 11.9504L5.5855 7.0007L0.635742 2.05093L2.04996 0.636719L6.9997 5.5865Z" fill="#006699"/>
      </svg>
      </button>
      <span class="text-gray-700 text-sm font-inter"></span>
      </div>
     
    </div>
    <!-- Extra section -->
    <div class="bg-gray-50 flex-1 w-full"></div>

    
  </section>
</template>