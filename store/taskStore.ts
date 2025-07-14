// stores/useTaskStore.ts
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as any[],
    nextId: 1,
    selectedTask: null as any | null,
  }),

  actions: {
    // Add a task with auto-generated ID
    addTask(task) {
      const newTask = { id: this.nextId++, ...task }
      this.tasks.push(newTask)
    },

    // Update a task by ID
    updateTask(id, updatedTask) {
      const index = this.tasks.findIndex((t) => t.id === id)
      if (index !== -1) {
        this.tasks[index] = { id, ...updatedTask }

        // Keep selectedTask in sync if editing currently viewed task
        if (this.selectedTask?.id === id) {
          this.selectedTask = this.tasks[index]
        }
      }
    },

    // Delete a task by ID
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((t) => t.id !== id)

      // Clear selected task if it was deleted
      if (this.selectedTask?.id === id) {
        this.selectedTask = null
      }
    },

    // Set selected task
    selectTask(task) {
      this.selectedTask = task
    },

    // Clear selected task
    clearSelectedTask() {
      this.selectedTask = null
    }
  }
})
