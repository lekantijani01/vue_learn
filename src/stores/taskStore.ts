// stores/taskStore.ts
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as {
      title: string
      assignedTo: string
      startDate: string
      endDate: string
      priority: string
      group: string
      allDay: boolean
    }[]
  }),
  actions: {
    addTask(task: {
      title: string
      assignedTo: string
      startDate: string
      endDate: string
      priority: string
      group: string
      allDay: boolean
    }) {
      this.tasks.push(task)
    }
  }
})