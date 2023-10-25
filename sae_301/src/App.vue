<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PocketBase from 'pocketbase'
</script>

<template>
  <main>
    <Header />
      <RouterView />
    <Footer />
  </main>
</template>

