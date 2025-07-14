<script setup lang="ts">
import { ref, defineProps } from "vue";
import { ElDatePicker } from "element-plus";
import { useTaskStore } from "@/stores/taskStore"
defineProps<{
 showPopUp: boolean,
  showTaskPopupFn: (value: boolean) => void
}>()

const taskTitle = ref("");
const assignedTo = ref("");
const startDate = ref("");
const endDate = ref("");
const priority = ref("");
const group = ref("");
const value1 = ref("");
const allDay = ref(false);
const taskStore = useTaskStore()

function handleSubmit() {
  const newTask = {
    title: taskTitle.value,
    assignedTo: assignedTo.value,
    startDate: startDate.value,
    endDate: endDate.value,
    priority: priority.value,
    group: group.value,
    allDay: allDay.value
  }

  taskStore.addTask(newTask)

  // Clear form
  taskTitle.value = ""
  assignedTo.value = ""
  startDate.value = ""
  endDate.value = ""
  priority.value = ""
  group.value = ""
  allDay.value = false
}

const handleCreate = () => {
  console.log("Create button clicked");
  
};
const handleCancel = () => {
  console.log("Cancel button clicked");
};

</script>

<template>
<teleport to="body">
          <div
            v-if="showPopUp"
            class="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-30"
            style="padding: 40px"
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
                @click="showTaskPopupFn(false)"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
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
                <form
                            @submit.prevent="handleCreate"
                            @reset.prevent="handleCancel"
                          >
                <section
                  class="mt-10"
                  style="
                    width: 998px;
                    height: 601px;
                    background: #f9fafb;
                    border-radius: 12px;
                  "
                >
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      width: 100%;
                      height: 100%;
                    "
                  >
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
                          style="font-family: Inter, sans-serif"
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
                          <!-- Assigned To -->
                          <label
                            for="assigned-to"
                            class="block text-sm font-medium text-gray-700 mt-5"
                            style="font-family: Inter, sans-serif"
                          >
                            Assigned To
                          </label>
                          <input
                            id="assigned-to"
                            type="email"
                            v-model="assignedTo"
                            placeholder="Enter an email"
                            class="w-full h-7 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                          />
                        </div>

                        <!-- Date Section -->
                        <div class="mt-2">
                          <label
                            class="block text-sm font-medium text-gray-700 mb-1"
                            style="font-family: Inter, sans-serif"
                          >
                            Date
                          </label>

                          <!-- Flex row: date picker and button -->
                          <div class="flex items-center space-x-4">
                            <el-date-picker
                              v-model="value1"
                              type="datetimerange"
                              range-separator="To"
                              start-placeholder="Start date"
                              end-placeholder="End date"
                              class="w-full"
                            />

                            <div
                              class="flex flex-nowrap items-center space-x-2 mt-3"
                            >
                              <input
                                id="all-day"
                                type="checkbox"
                                v-model="allDay"
                                class="w-5 h-5 accent-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                for="all-day"
                                class="text-sm text-gray-700 whitespace-nowrap"
                                style="font-family: Inter, sans-serif"
                              >
                                All Day
                              </label>
                            </div>

                            <button class="transition mt-3">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.26806 9.7501C5.26681 8.86096 5.44148 7.98035 5.78202 7.15901C6.12256 6.33766 6.62223 5.5918 7.25226 4.96438C7.88228 4.33697 8.63022 3.84041 9.45297 3.50329C10.2757 3.16617 11.1571 2.99516 12.0462 3.0001C15.7587 3.02823 18.7306 6.1126 18.7306 9.83448V10.5001C18.7306 13.8564 19.4337 15.8064 20.0524 16.8751C20.1182 16.9889 20.1528 17.118 20.1529 17.2494C20.153 17.3809 20.1186 17.51 20.0531 17.624C19.9876 17.7379 19.8933 17.8326 19.7796 17.8986C19.666 17.9647 19.537 17.9996 19.4056 18.0001H4.59306C4.46163 17.9996 4.33263 17.9647 4.21899 17.8986C4.10534 17.8326 4.01104 17.7379 3.94552 17.624C3.88001 17.51 3.84559 17.3809 3.8457 17.2494C3.84582 17.118 3.88047 16.9889 3.94619 16.8751C4.56494 15.8064 5.26806 13.8564 5.26806 10.5001V9.7501Z"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>

                            <button class="transition mt-3">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.75 8.25L21 6L18.75 3.75"
                                  stroke="#616161"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M3 12C3.00248 10.4095 3.63542 8.88478 4.7601 7.7601C5.88478 6.63542 7.40946 6.00248 9 6H21"
                                  stroke="#616161"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.25 15.75L3 18L5.25 20.25"
                                  stroke="#616161"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M21 12C20.9975 13.5905 20.3646 15.1152 19.2399 16.2399C18.1152 17.3646 16.5905 17.9975 15 18H3"
                                  stroke="#616161"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div class="flex flex-row gap-4 mt-5">
                          <div class="flex flex-col flex-1">
                            <label
                              for="priority"
                              class="block text-sm font-medium text-gray-700 mb-2"
                              style="font-family: Inter, sans-serif"
                            >
                              Priority
                            </label>
                            <select
                              id="priority"
                              v-model="priority"
                              class="h-9 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                            >
                              <option value="high"> High</option>
                              <option value="medium">Medium</option>
                              <option value="low">Low</option>
                            </select>
                          </div>
                          <div class="flex flex-col flex-1">
                            <label
                              for="group"
                              class="block text-sm font-medium text-gray-700 mb-2"
                              style="font-family: Inter, sans-serif"
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
                          <label
                            class="block mb-2 font-medium text-gray-900 text-base"
                            >Description</label
                          >

                          <!-- Toolbar -->
                          <div
                            class="border border-gray-300 rounded-t bg-gray-50 px-2 py-2 flex flex-wrap items-center gap-2"
                          >
                            <!-- Left side -->
                            <button
                              class="hover:bg-gray-200 p-1 rounded text-gray-700"
                            >
                              <i class="icon"
                                ><svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.1225 5.81841L6.87983 10.061C6.58693 10.3539 6.58693 10.8288 6.87983 11.1217C7.17272 11.4146 7.6476 11.4146 7.94048 11.1217L12.1832 6.87907C13.0618 6.0004 13.0618 4.57578 12.1832 3.69709C11.3045 2.81841 9.87983 2.81841 9.00113 3.69709L4.7585 7.93974C3.29404 9.40419 3.29404 11.7785 4.7585 13.2431C6.22297 14.7075 8.59733 14.7075 10.0618 13.2431L14.3045 9.00039L15.3651 10.061L11.1225 14.3037C9.07223 16.3539 5.7481 16.3539 3.69785 14.3037C1.64759 12.2534 1.64759 8.92936 3.69785 6.87907L7.94048 2.63643C9.40493 1.17197 11.7794 1.17197 13.2438 2.63643C14.7083 4.1009 14.7083 6.47526 13.2438 7.93974L9.00113 12.1824C8.1225 13.061 6.69785 13.061 5.81917 12.1824C4.94048 11.3037 4.94048 9.87909 5.81917 9.00039L10.0618 4.75776L11.1225 5.81841Z"
                                    fill="#1F2937"
                                  />
                                </svg>
                              </i>
                            </button>
                            <button
                              class="font-bold hover:bg-gray-200 p-1 rounded text-gray-700"
                            >
                              B
                            </button>
                            <button
                              class="italic hover:bg-gray-200 p-1 rounded text-gray-700"
                            >
                              I
                            </button>
                            <button
                              class="underline hover:bg-gray-200 p-1 rounded text-gray-700"
                            >
                              U
                            </button>

                            <!-- Font family dropdown -->
                            <select
                              class="text-sm px-2 border-none bg-transparent focus:outline-none text-gray-700"
                            >
                              <option>Font family</option>
                              <option>Inter</option>
                              <option>Arial</option>
                              <option>Georgia</option>
                            </select>

                            <!-- Spacer -->
                            <div class="flex-grow"></div>

                            <!-- Alignment + list + undo/redo -->
                            <div class="flex items-center gap-2">
                              <button
                                class="hover:bg-gray-200 p-1 rounded text-gray-700"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.875 9H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M7.875 4.5H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M2.8125 13.5H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M5.0625 3.9375L2.25 6.75L5.0625 9.5625"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </button>
                              <button
                                class="hover:bg-gray-200 p-1 rounded text-gray-700"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.875 9H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M7.875 4.5H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M2.8125 13.5H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M2.8125 3.9375L5.625 6.75L2.8125 9.5625"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </button>
                              <button
                                class="hover:bg-gray-200 p-1 rounded text-gray-700"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.3125 9H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M7.3125 4.5H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M7.3125 13.5H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M2.8125 4.21875L3.9375 3.65625V7.59375"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M2.88984 10.73C2.94168 10.6017 3.01999 10.4857 3.11968 10.3897C3.21938 10.2936 3.3382 10.2197 3.46839 10.1727C3.59859 10.1257 3.73723 10.1067 3.87527 10.1169C4.01331 10.1272 4.14764 10.1664 4.2695 10.232C4.39135 10.2977 4.498 10.3883 4.58246 10.498C4.66692 10.6076 4.72731 10.7339 4.75968 10.8684C4.79205 11.003 4.79567 11.1429 4.77031 11.279C4.74495 11.4151 4.69117 11.5443 4.6125 11.6581L2.8125 14.0628H4.78125"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </button>
                              <button
                                class="hover:bg-gray-200 p-1 rounded text-gray-700"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.1875 4.5H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M6.1875 9H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M6.1875 13.5H15.1875"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M3.09375 5.20312C3.48208 5.20312 3.79688 4.88833 3.79688 4.5C3.79688 4.11167 3.48208 3.79688 3.09375 3.79688C2.70542 3.79688 2.39062 4.11167 2.39062 4.5C2.39062 4.88833 2.70542 5.20312 3.09375 5.20312Z"
                                    fill="#131313"
                                  />
                                  <path
                                    d="M3.09375 14.2031C3.48208 14.2031 3.79688 13.8883 3.79688 13.5C3.79688 13.1117 3.48208 12.7969 3.09375 12.7969C2.70542 12.7969 2.39062 13.1117 2.39062 13.5C2.39062 13.8883 2.70542 14.2031 3.09375 14.2031Z"
                                    fill="#131313"
                                  />
                                  <path
                                    d="M3.09375 9.70312C3.48208 9.70312 3.79688 9.38833 3.79688 9C3.79688 8.61167 3.48208 8.29688 3.09375 8.29688C2.70542 8.29688 2.39062 8.61167 2.39062 9C2.39062 9.38833 2.70542 9.70312 3.09375 9.70312Z"
                                    fill="#131313"
                                  />
                                </svg>
                              </button>
                              <button
                                class="hover:bg-gray-200 p-1 rounded text-gray-700"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.5234 10.4131H16.0234V5.91309"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M2.25 12.9371C2.24951 11.6017 2.64512 10.2962 3.38679 9.18566C4.12845 8.07517 5.18284 7.20962 6.41655 6.69853C7.65026 6.18743 9.00785 6.05375 10.3175 6.31441C11.6272 6.57507 12.8302 7.21834 13.7742 8.16285L16.0242 10.4129"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </button>
                              <button
                                class="hover:bg-gray-200 p-1 rounded text-gray-700"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.47656 10.4131H1.97656V5.91309"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15.7508 12.9371C15.7513 11.6017 15.3557 10.2962 14.614 9.18566C13.8723 8.07517 12.8179 7.20962 11.5842 6.69853C10.3505 6.18743 8.99294 6.05375 7.68324 6.31441C6.37353 6.57507 5.17058 7.21834 4.22656 8.16285L1.97656 10.4129"
                                    stroke="#131313"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>

                          <!-- Editor -->
                          
                            <div
                              class="min-h-[130px] bg-gray-50 border border-t-0 border-gray-300 p-3 text-sm focus:outline-none"
                            ></div>
                            <div class="flex justify-start space-x-2 mt-4">
                              <button
                                type="reset"
                                class="w-28 h-10 px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                class="w-28 h-10 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
                              >
                                Create
                              </button>
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
                      <div class="max-w-md w-full space-y-2">
                        <!-- Heading -->
                        <h2 class="text-xl font-semibold text-gray-900">
                          Meeting
                        </h2>

                        <!-- Detail Box -->
                        <div class="rounded p-4 space-y-4">
                          <div class="flex items-start gap-3">
                            <span
                              ><svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.83268 2.49967V0.833008H6.49935V2.49967H11.4993V0.833008H13.166V2.49967H16.4993C16.9596 2.49967 17.3327 2.87277 17.3327 3.33301V7.49967H15.666V4.16634H13.166V5.83301H11.4993V4.16634H6.49935V5.83301H4.83268V4.16634H2.33268V15.833H7.33268V17.4997H1.49935C1.03912 17.4997 0.666016 17.1266 0.666016 16.6663V3.33301C0.666016 2.87277 1.03912 2.49967 1.49935 2.49967H4.83268ZM13.166 9.99967C11.3251 9.99967 9.83268 11.4921 9.83268 13.333C9.83268 15.1739 11.3251 16.6663 13.166 16.6663C15.0069 16.6663 16.4993 15.1739 16.4993 13.333C16.4993 11.4921 15.0069 9.99967 13.166 9.99967ZM8.16602 13.333C8.16602 10.5716 10.4046 8.33301 13.166 8.33301C15.9274 8.33301 18.166 10.5716 18.166 13.333C18.166 16.0944 15.9274 18.333 13.166 18.333C10.4046 18.333 8.16602 16.0944 8.16602 13.333ZM12.3327 10.833V13.6782L14.2434 15.5889L15.4219 14.4104L13.9993 12.9878V10.833H12.3327Z"
                                  fill="#616161"
                                />
                              </svg>
                            </span>
                            <p class="text-gray-800">Due Wed, April 9th</p>
                          </div>

                          <div class="flex items-start gap-3">
                            <span
                              ><svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.9453 16.25H3.07813C3.0022 16.25 2.92703 16.235 2.85689 16.206C2.78674 16.1769 2.72301 16.1344 2.66933 16.0807C2.61564 16.027 2.57306 15.9633 2.54401 15.8931C2.51495 15.823 2.5 15.7478 2.5 15.6719V6.25H16.875C17.0408 6.25 17.1997 6.31585 17.3169 6.43306C17.4342 6.55027 17.5 6.70924 17.5 6.875V15.6953C17.5 15.8424 17.4416 15.9835 17.3375 16.0875C17.2335 16.1916 17.0924 16.25 16.9453 16.25Z"
                                  stroke="#616161"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.5 6.25V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H7.24219C7.32334 3.74972 7.40376 3.76544 7.47883 3.79628C7.5539 3.82711 7.62216 3.87245 7.67969 3.92969L10 6.25"
                                  stroke="#616161"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <p class="text-gray-800">Lopworks</p>
                          </div>

                          <div class="flex items-start gap-3">
                            <span class="text-yellow-500"
                              ><svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.125 16.875V3.75"
                                  stroke="#FFBF00"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M3.125 13.1245C8.125 9.37452 11.875 16.8745 16.875 13.1245V3.74952C11.875 7.49952 8.125 -0.000476077 3.125 3.74952"
                                  stroke="#FFBF00"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <p class="text-gray-800">Medium</p>
                          </div>

                          <div class="flex items-start gap-3">
                            <span
                              ><svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 5.625V10H14.375"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875Z"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                />
                                <path
                                  d="M15.3047 2.04688L17.9531 4.69531"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.04688 4.69531L4.69531 2.04688"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <p class="text-gray-800">15 minutes before</p>
                          </div>

                          <div class="flex items-start gap-3">
                            <span
                              ><svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.625 6.875L17.5 5L15.625 3.125"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.5 10C2.50207 8.67455 3.02951 7.40398 3.96675 6.46675C4.90398 5.52951 6.17455 5.00207 7.5 5H17.5"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M4.375 13.125L2.5 15L4.375 16.875"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M17.5 10C17.4979 11.3254 16.9705 12.596 16.0333 13.5333C15.096 14.4705 13.8254 14.9979 12.5 15H2.5"
                                  stroke="#616161"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <p class="text-gray-800">Daily</p>
                          </div>

                          <div class="flex items-start gap-3">
                            <span
                              ><svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.25 3H15.75V4.5H2.25V3ZM2.25 14.25H15.75V15.75H2.25V14.25ZM2.25 10.5H15.75V12H2.25V10.5ZM2.25 6.75H15.75V8.25H2.25V6.75Z"
                                  fill="#616161"
                                />
                              </svg>
                            </span>
                            <p class="text-gray-800">
                              Deadline for submitting the Q1 financial report.
                              Ensure all data is finalized.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </form>
              </div>
            </div>
          </div>
        </teleport>

</template>