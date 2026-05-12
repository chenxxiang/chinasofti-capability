<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeAurora from './HomeAurora.vue'
import HomeAuroraEn from './HomeAuroraEn.vue'
import HomeOverseas from './HomeOverseas.vue'
import HomeOverseasEn from './HomeOverseasEn.vue'
import HomeMiniapp from './HomeMiniapp.vue'
import HomeMiniappEn from './HomeMiniappEn.vue'

const { frontmatter } = useData()
</script>

<template>
  <HomeAurora v-if="frontmatter.layout === 'home-aurora'" />
  <HomeAuroraEn v-else-if="frontmatter.layout === 'home-aurora-en'" />
  <HomeOverseas v-else-if="frontmatter.layout === 'home-overseas'" />
  <HomeOverseasEn v-else-if="frontmatter.layout === 'home-overseas-en'" />
  <HomeMiniapp v-else-if="frontmatter.layout === 'home-miniapp'" />
  <HomeMiniappEn v-else-if="frontmatter.layout === 'home-miniapp-en'" />
  <DefaultTheme.Layout v-else>
    <template #nav-bar-title-before>
      <span class="vp-logo-chip">CSI</span>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.vp-logo-chip {
  background: linear-gradient(135deg, #1d4ed8, #7c3aed);
  color: #fff;
  padding: 4px 10px;
  border-radius: 7px;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  box-shadow: 0 3px 10px rgba(29,78,216,0.35);
  margin-right: 8px;
  flex-shrink: 0;
}
</style>
