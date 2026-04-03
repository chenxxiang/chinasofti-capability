<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeAurora from './HomeAurora.vue'

const { frontmatter } = useData()
</script>

<template>
  <HomeAurora v-if="frontmatter.layout === 'home-aurora'" />
  <DefaultTheme.Layout v-else />
</template>
