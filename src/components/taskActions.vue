<script setup>
import { ref, watch } from "vue";
import taskForm from "./taskForm.vue";
let showNewTaskPopup = ref(false);


const value1 =
  ref <
  [Date, Date] >
  [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)];

const showTaskPopup = (value) => {
    console.log("showTaskPopup called with value:", value);
  showNewTaskPopup.value = value;
};
</script>

<template>
  <div class="flex flex-col items-start" style="width: 268px">
    <div class="mt-6 w-full flex justify-start">
      <button
        class="w-[268px] h-[38px] py-2 px-3 rounded bg-[#006699] text-white text-sm font-medium hover:bg-[#35ace7] transition-colors duration-200"
        @click="showTaskPopup(true)"
      >
        <span class="flex items-center justify-center w-full">
          <svg
            class="mr-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8333 3.33333C10.8333 2.8731 10.4602 2.5 10 2.5C9.53976 2.5 9.16667 2.8731 9.16667 3.33333V9.16667H3.33333C2.8731 9.16667 2.5 9.53976 2.5 10C2.5 10.4602 2.8731 10.8333 3.33333 10.8333H9.16667V16.6667C9.16667 17.1269 9.53976 17.5 10 17.5C10.4602 17.5 10.8333 17.1269 10.8333 16.6667V10.8333H16.6667C17.1269 10.8333 17.5 10.4602 17.5 10C17.5 9.53976 17.1269 9.16667 16.6667 9.16667H10.8333V3.33333Z"
              fill="white"
            />
          </svg>
          New Task
        </span>
      </button>
    </div>
    <div
      class="flex items-center justify-between bg-white rounded"
      style="width: 268px; height: 48px"
    >
      <span class="text-gray-700 ml-5 font-medium-inter text-base leading-[1.4]"
        >Task</span
      >
      <button
        class="flex items-center gap-2 ml-4 p-2 rounded hover:bg-gray-100 transition-colors"
      ></button>
      <div class="flex items-center ml-2 space-x-2">
        <button
          class="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5186 9.34668H21.0186V4.84668"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.8311 17.8313C16.6776 18.9857 15.2076 19.7721 13.6071 20.091C12.0066 20.4099 10.3474 20.2469 8.83953 19.6227C7.33165 18.9984 6.04278 17.941 5.13596 16.5842C4.22914 15.2273 3.74512 13.632 3.74512 12C3.74512 10.368 4.22914 8.7727 5.13596 7.41585C6.04278 6.059 7.33165 5.00158 8.83953 4.37735C10.3474 3.75313 12.0066 3.59014 13.6071 3.90902C15.2076 4.22789 16.6776 5.0143 17.8311 6.16875L21.0186 9.34688"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          class="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
              fill="#00141F"
            />
            <path
              d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
              fill="#00141F"
            />
          </svg>
        </button>
      </div>
    </div>
    <button
      class="w-[268px] h-12 px-4 py-3 flex items-center gap-2 rounded bg-[#EAF0F4] text-gray-800 text-base font-medium hover:bg-gray-200 transition-colors duration-200 shadow-lg"
      style="
        padding-top: 12px;
        padding-right: 16px;
        padding-bottom: 12px;
        padding-left: 16px;
        gap: 8px;
      "
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
          stroke="#00141F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 2.25V5.25"
          stroke="#00141F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 2.25V5.25"
          stroke="#00141F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.75 8.25H20.25"
          stroke="#00141F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      All Task
    </button>

    <button
      class="w-[268px] h-12 px-4 py-3 flex items-center gap-2 rounded bg-white text-gray-800 text-base font-medium hover:bg-gray-200 transition-colors duration-200"
      style="
        padding-top: 12px;
        padding-right: 16px;
        padding-bottom: 12px;
        padding-left: 16px;
        gap: 8px;
      "
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.3344 19.5H3.69375C3.60265 19.5 3.51243 19.4821 3.42826 19.4472C3.34409 19.4123 3.26762 19.3612 3.20319 19.2968C3.13877 19.2324 3.08767 19.1559 3.05281 19.0717C3.01794 18.9876 3 18.8974 3 18.8063V7.5H20.25C20.4489 7.5 20.6397 7.57902 20.7803 7.71967C20.921 7.86032 21 8.05109 21 8.25V18.8344C21 19.0109 20.9299 19.1802 20.805 19.305C20.6802 19.4299 20.5109 19.5 20.3344 19.5Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 7.5V5.25C3 5.05109 3.07902 4.86033 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H8.69062C8.78801 4.49966 8.88451 4.51853 8.9746 4.55553C9.06469 4.59253 9.14659 4.64694 9.21563 4.71563L12 7.5"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      Lopworks
    </button>
    <taskForm :showPopUp="showNewTaskPopup" :showTaskPopupFn="showTaskPopup" />
  </div>
</template>
