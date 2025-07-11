<script lang="ts" setup>
import sidenav from "./sidenav.vue";
import taskActions from "./taskActions.vue";
import taskList from "./taskList.vue";
import taskDetails from "./taskDetails.vue";

</script>

<template>

   
  <section class="bg-white mb-4 min-h-screen flex flex-row">
    <!-- sidenav content -->
    <sidenav />
    
    <!-- task actions -->
    <taskActions />
    
    <!-- task list -->
    <taskList />

    <!-- details -->
    <taskDetails />
    

    <!-- Extra section -->
    <div class="bg-gray-50 flex-1 w-full"></div>
  </section>
</template>
