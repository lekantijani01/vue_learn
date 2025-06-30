<script setup>
import logo from '@/assets/img/ration logo.png';
</script>

<template>
    <nav class="bg-white border-b border-white">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
              <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                ></span
              >
            </a>
            </div>
            <div class="absolute top-0 right-0 mt-4 mr-6 flex items-center">
              <div class="relative">
                <button
                  class="flex items-center text-white rounded-full px-4 py-2 focus:outline-none"
                >
                  <span class="hidden md:inline text-gray-700 font-inter text-base mr-3">Lekan Tijani</span>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="20" fill="#CCE0EB"/>
<path d="M32.1767 29.844C30.4274 26.8305 27.6274 24.5688 24.3134 23.4924C25.9019 22.5478 27.1363 21.1078 27.827 19.3937C28.5177 17.6795 28.6265 15.786 28.1367 14.004C27.6469 12.222 26.5856 10.6501 25.1158 9.52981C23.646 8.4095 21.849 7.80273 20.0009 7.80273C18.1529 7.80273 16.3559 8.4095 14.8861 9.52981C13.4163 10.6501 12.355 12.222 11.8652 14.004C11.3754 15.786 11.4842 17.6795 12.1749 19.3937C12.8656 21.1078 14.1 22.5478 15.6884 23.4924C12.3745 24.5688 9.57445 26.8305 7.82515 29.844C7.73927 29.9852 7.69385 30.1474 7.69385 30.3127C7.69385 30.478 7.73927 30.6402 7.82515 30.7815C7.90528 30.9251 8.0227 31.0445 8.16501 31.127C8.30732 31.2095 8.46926 31.2521 8.63375 31.2502H31.3681C31.5326 31.2521 31.6946 31.2095 31.8369 31.127C31.9792 31.0445 32.0966 30.9251 32.1767 30.7815C32.2626 30.6402 32.308 30.478 32.308 30.3127C32.308 30.1474 32.2626 29.9852 32.1767 29.844Z" fill="white"/>
</svg>

                  />
                </button>
              </div>
            </div>
              </div>
            </div>
            
      
    </nav>

</template>